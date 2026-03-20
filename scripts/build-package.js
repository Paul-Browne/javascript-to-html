import * as esbuild from 'esbuild'

esbuild.build({
    entryPoints: ['src/index.js'],
    format: 'esm',
    outdir: 'dist',
    target: 'esnext',
    sourcemap: true,
    bundle: true,
    minify: true,
    // minifyIdentifiers: false,
    // minifyWhitespace: true,
    // minifySyntax: true
})