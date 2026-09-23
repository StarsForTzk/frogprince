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
                },
                {property: 'og:type', content: 'website'},
                {property: 'og:site_name', content: '青蛙王子童装'},
                {property: 'og:title', content: '青蛙王子童装 | FROG PRINCE'},
                {
                    property: 'og:description',
                    content: '青蛙王子童装专注儿童服饰，以舒适、安全、品质与设计为核心，为孩子提供覆盖春夏秋冬及新年场景的童装产品。'
                },
                {property: 'og:url', content: 'https://www.frogprince.cn/'},
                {property: 'og:image', content: 'https://www.frogprince.cn/static/ico/share-logo.png'},
                {property: 'og:image:type', content: 'image/png'},
                {property: 'og:image:width', content: '512'},
                {property: 'og:image:height', content: '512'},
                {property: 'og:image:alt', content: '青蛙王子童装品牌标志'},
                {name: 'twitter:card', content: 'summary'},
                {name: 'twitter:image', content: 'https://www.frogprince.cn/static/ico/share-logo.png'}
            ],
            link: [
                {rel: 'icon', type: 'image/png', sizes: '512x512', href: '/static/ico/share-logo.png'},
                {rel: 'apple-touch-icon', sizes: '512x512', href: '/static/ico/share-logo.png'},
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
