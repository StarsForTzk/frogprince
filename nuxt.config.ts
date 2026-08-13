export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss'],
    css: ['~/assets/css/main.css'],
    runtimeConfig: {
        websiteApiBase: 'https://daily.frogbi.com'
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'zh-CN'
            },
            title: '青蛙王子童装 | FROG PRINCE',
            meta: [
                {
                    name: 'description',
                    content: '青蛙王子童装专注儿童服饰，以舒适、安全、品质与设计为核心，为孩子提供覆盖春夏秋冬及新年场景的童装产品，陪伴每一个自在成长的童年。'
                },
                {
                    name: 'keywords',
                    content: '青蛙王子童装,青蛙王子,FROG PRINCE,儿童服饰,儿童服装,童装品牌'
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
