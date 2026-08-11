export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss'],
    css: ['~/assets/css/main.css'],
    app: {
        head: {
            title: 'FROG PRINCE',
            meta: [
                {
                    name: 'description',
                    content: 'Frog Prince Autumn 2026 Kids Collection — engineered for the elements, designed for play.'
                }
            ],
            link: [
                {rel: 'icon', type: 'image/svg+xml', href: '/static/ico/logo.svg'},
                {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Lora:ital@0;1&family=Montserrat:wght@300;400;500;600&display=swap'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@500;600&display=swap'
                },
                {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'}
            ]
        }
    }
})
