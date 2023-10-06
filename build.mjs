#!/usr/bin/env node
import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["src/app.js"],
  bundle: true,
  //   sourcemap: true,
  //   platform: "node",
  loader: {
    ".js": "jsx", // Use the 'jsx' loader for .js files
  },
  outfile: "dist/out.js",
});
