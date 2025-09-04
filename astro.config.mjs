// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://ggnu11.github.io/yumyum-support",
  base: "/yumyum-support", // Project Pages일 때 꼭 필요!
  integrations: [tailwind(), react()],
});
