import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/projects", "/about", "/contact", "/resume"];

  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
