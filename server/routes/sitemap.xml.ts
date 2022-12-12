import { serverQueryContent } from "#content/server";
import { SitemapStream, streamToPromise } from "sitemap";

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find();
  const sitemap = new SitemapStream({
    hostname: "https://le-classement.fr",
  });

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: doc.sitemap?.changefreq || "monthly",
      priority: doc.sitemap?.priority || 0.5,
      lastmod: doc.sitemap?.lastmod,
    });
  }
  sitemap.end();

  return streamToPromise(sitemap);
});
