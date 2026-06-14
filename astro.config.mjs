import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://friendsay.com",
  output: "static",
  devToolbar: {
    enabled: false
  }
});
