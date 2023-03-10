import path from 'path'
import { defineConfig } from 'rollup'
import esbuild from 'rollup-plugin-esbuild'
import postcss from 'rollup-plugin-postcss'
import url from 'postcss-url'

export default defineConfig({
  input: path.resolve(process.cwd(), 'src/layer.js'),
  plugins: [
    esbuild({
      sourceMap: true,
      minify: true,
      target: 'ie9',
    }),
    postcss({
      minimize: false,
      sourceMap: true,
      extract: 'css/layer.css',
      plugins: [url({ url: 'inline' })],
    }),
  ],

  output: [
    {
      file: path.resolve(process.cwd(), 'dist/layer.js'),
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: path.resolve(process.cwd(), 'dist/layer.umd.js'),
      format: 'umd',
      sourcemap: true,
      name: 'layer',
      globals: {
        jquery: 'jQuery'
      }
    },
    {
      file: path.resolve(process.cwd(), 'dist/layer.mjs'),
      format: 'esm',
      sourcemap: true,
      exports: 'auto',
    },
  ],
 external: 'jquery'
})
