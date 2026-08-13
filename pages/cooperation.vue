<script setup lang="ts">
useHead({
  title: "商业合作 | 青蛙王子童装",
  meta: [{ name: "description", content: "青蛙王子童装商业合作页面，了解品牌渠道规模、产品能力与合作方向。" }],
})
const {url: assetUrl} = await useWebsiteAssets('cooperation')
const heroImage = computed(() => `url('${assetUrl('hero', '/static/pic/3.png')}')`)

const capabilities = [
  { title: "商品研发", text: "深耕35年儿童服饰领域，围绕重点品类、面料优化和儿童多场景需求持续开发产品。" },
  { title: "运营管理", text: "以销售数据和单店模型支持精细化用户运营，布局线上线下渠道与会员服务。" },
  { title: "品牌势能", text: "依托安正时尚集团与五大内容平台，连接全国门店、会员和合作伙伴。" },
]
const directions = ["品牌门店与渠道合作", "线上平台与内容合作", "IP 联名与跨界合作", "儿童活动与公益合作"]
</script>

<template>
  <main class="bg-paper font-sans text-ink antialiased">
    <NuxtLink aria-label="返回首页" class="fixed right-5 top-5 z-50 flex items-center gap-3 rounded-badge bg-char px-4 py-3 text-paper md:right-8 md:top-8" to="/"><span class="text-[12px]">HOME</span><span>←</span></NuxtLink>
    <section class="cooperation-hero relative flex h-[82vh] min-h-[620px] max-h-[900px] flex-col justify-between overflow-hidden p-6 text-paper md:p-12"><NuxtLink class="relative z-10 inline-flex w-fit" to="/"><img alt="青蛙王子童装" class="h-auto w-[132px] brightness-0 invert md:w-[176px]" src="/static/pic/logo.png"></NuxtLink><div class="relative z-10"><p class="mb-4 text-[12px] text-paper/75">Cooperation — Join Frog Prince</p><h1 class="text-[52px] font-light uppercase leading-[0.88] sm:text-[82px] lg:text-[112px]">Create More<br>Together</h1></div></section>
    <section class="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-32"><span class="text-[12px] text-smoke">01 — Why Frog Prince</span><div class="mt-4 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><h2 class="text-[42px] font-light leading-[1.08] sm:text-heading-lg">与青蛙王子，<br>共创儿童生活。</h2><div><p class="max-w-[600px] text-[15px] leading-[1.8] text-pewter">青蛙王子覆盖全国28个省份，拥有1200+门店和80万+会员，提供从0至14岁的全龄段、多品类产品，并持续拓展线上线下品牌势能。</p><div class="mt-12 grid border-t border-mist md:grid-cols-3"><div v-for="item in capabilities" :key="item.title" class="border-b border-mist py-7 md:border-l md:px-5"><h3 class="text-[20px] font-normal">{{ item.title }}</h3><p class="mt-4 text-[14px] leading-[1.75] text-pewter">{{ item.text }}</p></div></div></div></div></section>
    <section class="bg-char text-paper"><div class="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28"><span class="text-[12px] text-paper/50">02 — Cooperation Directions</span><div class="mt-4 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"><h2 class="text-[42px] font-light leading-[1.08] sm:text-heading-lg">寻找长期伙伴，<br>打开更多可能。</h2><div class="border-t border-paper/20"><div v-for="(direction, index) in directions" :key="direction" class="flex items-center justify-between border-b border-paper/20 py-6"><span class="text-[11px] text-paper/40">0{{ index + 1 }}</span><strong class="text-[18px] font-normal">{{ direction }}</strong><span aria-hidden="true" class="text-ember">→</span></div></div></div></div></section>
    <section class="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-32"><span class="text-[12px] text-smoke">03 — Contact</span><div class="mt-4 grid gap-12 lg:grid-cols-[1fr_1fr]"><h2 class="text-[42px] font-light leading-[1.08] sm:text-heading-lg">把想法带来，<br>一起做成。</h2><div class="border-t border-mist text-[15px]"><a class="block border-b border-mist py-6 hover:text-ember" href="mailto:hr@frogprince.cn">hr@frogprince.cn</a><a class="block border-b border-mist py-6 hover:text-ember" href="tel:075781213692">0757-81213692</a><p class="py-6 text-[13px] leading-[1.7] text-smoke">合作方向、门店信息和具体商务条款请以双方正式沟通及合同为准。</p></div></div></section>
    <footer class="bg-char px-6 py-6 text-paper"><div class="mx-auto flex max-w-[1200px] justify-between gap-3 text-[11px] text-paper/55"><p>Copyright © 2026 青蛙王子童装 FrogPrince</p><NuxtLink to="/">返回首页</NuxtLink></div></footer>
  </main>
</template>

<style scoped>
.cooperation-hero { isolation: isolate; background: v-bind(heroImage) center / cover no-repeat; }
.cooperation-hero::after { position: absolute; inset: 0; z-index: 0; background: linear-gradient(180deg, rgb(0 0 0 / 8%), rgb(0 0 0 / 56%)); content: ''; }
</style>
