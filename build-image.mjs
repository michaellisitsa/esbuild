import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["src/image.js"],
  bundle: true,
  loader: {
    ".png": "dataurl",
    ".svg": "text",
  },
  outfile: "dist/out-image.js",
});
