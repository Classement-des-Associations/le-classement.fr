import * as dotenv from "dotenv";
dotenv.config();

import { Client } from "@notionhq/client";
import consola from "consola";
import { resolve } from "pathe";
import fs from "node:fs";
import { useEnv } from "./_env.mjs";
import { useExtractContent } from "./_extract.mjs";

async function main() {
  consola.info("Starting script");

  consola.info("Loading env");
  const { notionKey, associationsDatabaseId } = useEnv();

  consola.info("Connecting to Notion");
  const notion = new Client({ auth: notionKey });

  consola.info("Fetching associations");
  const { results: associations } = await notion.databases.query({
    database_id: associationsDatabaseId,
    page_size: 4,
    filter: {
      property: "Montrer",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "Nom",
        direction: "ascending",
      },
    ],
  });
  consola.success("Associations fetched");

  if (!associations) {
    throw new Error("No associations found");
  }

  consola.info("Extracting data");
  const data = new Set();
  for await (const { properties } of associations) {
    const name = useExtractContent(properties["Nom"]);
    const category = useExtractContent(properties["Catégorie"]);
    const schoolsPagesId = useExtractContent(properties["Ecoles"]);

    const schools = [];
    for await (const pageId of schoolsPagesId) {
      const { properties } = await notion.pages.retrieve({
        page_id: pageId,
        sorts: [
          {
            property: "Nom",
            direction: "ascending",
          },
        ],
      });

      const schoolName = useExtractContent(properties["Nom"]);
      schools.push(schoolName);
    }

    data.add({
      name,
      category,
      schools,
    });
  }
  consola.success("Data extracted");

  consola.info("Writing data");
  fs.writeFileSync(
    resolve("content", "_associations.json"),
    JSON.stringify({ body: [...data] }, null, 2),
    "utf-8"
  );
  consola.success("Data written");

  consola.success("Script finished");
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
