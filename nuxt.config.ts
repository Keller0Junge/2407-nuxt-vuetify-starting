// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css', '~/assets/scss/main.scss'],

    modules: ['@nuxt/eslint'],
    devtools: { enabled: true },
    build: {
        transpile: ['vuetify'],
    },
    eslint: {
        // options here
        config: {
            stylistic: {
                indent: 4,
                semi: true,
                quotes: 'single',
            } },
    },
});
