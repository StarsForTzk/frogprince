<script setup lang="ts">
useHead({
  title: "渠道门店 | 青蛙王子童装",
  meta: [{ name: "description", content: "青蛙王子童装覆盖全国28个省份、拥有1200多家门店，以多渠道布局服务各地消费者。" }],
})
const {url: assetUrl} = await useWebsiteAssets('stores')
const heroImage = computed(() => `url('${assetUrl('hero', '/static/pic/3.png')}')`)
const galleryImage = computed(() => `url('${assetUrl('gallery', '/static/pic/3.png')}')`)

const channels = [
  { title: "购物中心", names: "万达、新城吾悦、爱琴海、龙湖天街、大悦城、万象汇等" },
  { title: "地方商业", names: "胖东来、丹尼斯、信誉楼、大张等" },
  { title: "百货体系", names: "银泰、武商集团、银座、利群等" },
  { title: "商超母婴", names: "苏宁、华润万家、世纪华联、孩子王等" },
  { title: "奥特莱斯", names: "砂之船、杉杉、百联、华盛等" },
]
const storeFormats = ["街铺", "购物中心", "百货", "商超", "奥特莱斯"]
</script>

<template>
  <main class="bg-paper font-sans text-ink antialiased">
    <NuxtLink aria-label="返回首页" class="fixed right-5 top-5 z-50 flex items-center gap-3 rounded-badge bg-char px-4 py-3 text-paper md:right-8 md:top-8" to="/"><span class="text-[12px]">HOME</span><span>←</span></NuxtLink>
    <section class="stores-hero relative flex h-[82vh] min-h-[620px] max-h-[900px] flex-col justify-between overflow-hidden p-6 text-paper md:p-12"><NuxtLink class="relative z-10 inline-flex w-fit" to="/"><img alt="青蛙王子童装" class="h-auto w-[132px] brightness-0 invert md:w-[176px]" src="/static/pic/logo.png"></NuxtLink><div class="relative z-10"><p class="mb-4 text-[12px] text-paper/75">Store Coverage — Across China</p><h1 class="text-[54px] font-light uppercase leading-[0.88] sm:text-[82px] lg:text-[116px]">Closer To<br>Every Family</h1></div></section>
    <section class="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-32"><span class="text-[12px] text-smoke">01 — Nationwide Network</span><div class="mt-4 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]"><h2 class="text-[42px] font-light leading-[1.08] sm:text-heading-lg">从核心城市，<br>走近更多家庭。</h2><div><p class="max-w-[600px] text-[15px] leading-[1.8] text-pewter">青蛙王子覆盖全国28个省份，门店总数超过1200家。渠道布局覆盖街铺、购物中心、百货、商超与奥特莱斯，并持续进入各级城市的重要商业区域。</p><div class="mt-14 grid border-y border-mist sm:grid-cols-3"><div class="py-7 sm:pr-5"><strong class="block text-[34px] font-light md:text-[44px]">28</strong><span class="text-[11px] text-smoke">覆盖省份</span></div><div class="border-t border-mist py-7 sm:border-l sm:border-t-0 sm:px-5"><strong class="block text-[34px] font-light md:text-[44px]">1200+</strong><span class="text-[11px] text-smoke">全国门店</span></div><div class="border-t border-mist py-7 sm:border-l sm:border-t-0 sm:pl-5"><strong class="block text-[34px] font-light md:text-[44px]">80万+</strong><span class="text-[11px] text-smoke">会员规模</span></div></div></div></div></section>
    <section class="bg-char text-paper"><div class="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28"><span class="text-[12px] text-paper/50">02 — Channel Partners</span><div class="mt-4 grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"><h2 class="text-[42px] font-light leading-[1.08] sm:text-heading-lg">多渠道布局，<br>连接不同城市。</h2><div class="border-t border-paper/20"><article v-for="(channel, index) in channels" :key="channel.title" class="grid gap-4 border-b border-paper/20 py-7 sm:grid-cols-[40px_160px_1fr]"><span class="text-[11px] text-paper/40">0{{ index + 1 }}</span><h3 class="text-[17px]">{{ channel.title }}</h3><p class="text-[14px] leading-[1.7] text-paper/60">{{ channel.names }}</p></article></div></div></div></section>
    <section class="border-y border-mist"><div class="mx-auto max-w-[1200px] px-6 py-16 md:px-8 md:py-20"><span class="text-[12px] text-smoke">02.5 — Store Formats</span><div class="mt-6 flex flex-wrap gap-3"><span v-for="format in storeFormats" :key="format" class="rounded-badge bg-mist px-5 py-3 text-[14px]">{{ format }}</span></div></div></section>
    <section class="mx-auto grid max-w-[1200px] gap-12 px-6 py-20 md:px-8 md:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div class="min-h-[520px] rounded-card bg-[url('/static/pic/3.png')] bg-cover bg-center"/><div><span class="text-[12px] text-smoke">03 — Contact</span><h2 class="mt-4 text-[42px] font-light leading-[1.08]">找到我们，<br>了解更多。</h2><div class="mt-10 border-t border-mist text-[14px]"><p class="border-b border-mist py-5">上海市闵行区放鹤路1088号</p><a class="block border-b border-mist py-5 hover:text-ember" href="tel:075781213692">0757-81213692</a><a class="block border-b border-mist py-5 hover:text-ember" href="mailto:hr@frogprince.cn">hr@frogprince.cn</a></div><p class="mt-5 text-[12px] leading-[1.7] text-smoke">具体门店地址及营业信息请以品牌官方渠道发布为准。</p></div></section>
    <footer class="bg-char px-6 py-6 text-paper"><div class="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-3 text-[11px] text-paper/55"><p>Copyright © 2026 青蛙王子童装 FrogPrince</p><NuxtLink to="/">返回首页</NuxtLink></div></footer>
  </main>
</template>

<style scoped>
.stores-hero { isolation: isolate; background: v-bind(heroImage) center 42% / cover no-repeat; }
.stores-hero + section + section + section + section > div:first-child { background-image: v-bind(galleryImage); }
.stores-hero::after { position: absolute; inset: 0; z-index: 0; background: linear-gradient(180deg, rgb(0 0 0 / 8%), rgb(0 0 0 / 55%)); content: ''; }
</style>
