import { defineConfig } from "@junobuild/config";

/** @type {import('@junobuild/config').JunoConfig} */
export default defineConfig({
  satellite: {
    ids: {
      production: "fmkjf-bqaaa-aaaal-acpza-cai",
    },
    source: "src",
    storage: {
      headers: [
        {
          source: "**/*.js",
          headers: [["Cache-Control", "max-age=31536000"]],
        },
        {
          source: "**/*.css",
          headers: [["Cache-Control", "max-age=31536000"]],
        },
        {
          source: "**/*.woff2",
          headers: [["Cache-Control", "max-age=31536000"]],
        },
        {
          source: "**/*.svg",
          headers: [["Cache-Control", "max-age=31536000"]],
        },
        {
          source: "**/releases/**/*",
          headers: [["Content-Type", "application/octet-stream"]],
        },
      ],
    },
    encoding: [["**/releases/*.gz", "identity"]],
    precompress: false,
  },
});
