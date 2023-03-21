import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default [
  {
    input: "src/index.js",
    plugins: [nodeResolve(), terser(), filesize()],
    output: {
      sourcemap: true, //can pass 'inline' for inline source maps
      file: "dist/index.umd.min.js",
      format: "umd",
      name: "beyondConsole",
    },
  },
  {
    input: "src/index.js",
    plugins: [nodeResolve(), terser(), filesize()],
    output: {
      sourcemap: true, //can pass 'inline' for inline source maps
      file: "dist/index.min.js",
      format: "es",
    },
  },
];
