import * as dotenv from "dotenv";
dotenv.config();

import { Client } from "@notionhq/client";
import consola from "consola";
import { resolve } from "pathe";
import fs from "node:fs";
import { useEnv } from "./_env.mjs";
import { useExtractContent } from "./_extract.mjs";
import { useSlugify } from "./_slugify.mjs";

async function main() {
  consola.info("Starting script");

  consola.info("Loading env");
  const { notionKey, associationsDatabaseId } = useEnv();

  consola.info("Connecting to Notion");
  const notion = new Client({ auth: notionKey });

  consola.info("Fetching associations");
  const { results: associations } = await notion.databases.query({
    database_id: associationsDatabaseId,
    page_size: 20,
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

  const startTime = new Date();
  consola.info("Extracting data");
  const data = new Set();
  for await (const { properties } of associations) {
    const name = useExtractContent(properties["Nom"]);
    const description = useExtractContent(properties["Description"]);
    const category = useExtractContent(properties["Catégorie"]);
    const linkedIn = useExtractContent(properties["LinkedIn"]);
    const instagram = useExtractContent(properties["Instagram"]);
    const website = useExtractContent(properties["Site web"]);
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
      id: useSlugify(name),
      name,
      description,
      category,
      schools,
      linkedIn,
      instagram,
      website,
    });
  }
  const diffTime = new Date(Date.now() - startTime.getTime());
  consola.success(`Data extracted in ${diffTime.getSeconds()}s`);

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
