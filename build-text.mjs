import * as esbuild from "esbuild";

let ts = "let x: number = 1";
let result = await esbuild.transform(ts, {
  loader: "ts",
  sourcemap: true,
});
console.log(result);
