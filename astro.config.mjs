// @ts-check
import { languages, defaultLang } from './src/i18n/utils';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://detivenc.github.io',
    i18n: {
        locales: Object.keys(languages),
        defaultLocale: defaultLang,
        routing: {
            prefixDefaultLocale: true
        }
    },
});
