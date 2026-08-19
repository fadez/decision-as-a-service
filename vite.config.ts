import { defineConfig, lazyPlugins } from 'vite-plus';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    lint: {
        jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
        rules: { 'vite-plus/prefer-vite-plus-imports': 'error' },
        options: { typeAware: true, typeCheck: true },
    },
    fmt: {
        singleQuote: true,
        sortPackageJson: false,
        sortTailwindcss: {
            stylesheet: './src/app.css',
        },
    },
    plugins: lazyPlugins(() => [tailwindcss()]),
});
