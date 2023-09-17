import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "http://danmartens.com",
  base: "/humanities-project",
  integrations: [mdx(), sitemap()],
});
