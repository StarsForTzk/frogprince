<script setup lang="ts">
import { onMounted, onUnmounted } from "vue"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

useHead({
  title: "品牌诠释 | 青蛙王子童装",
  meta: [{ name: "description", content: "青蛙王子以有温度的儿童时装为品牌理念，表达自然、时尚与价值感。" }],
})

const values = [
  { index: "01", title: "自然", english: "NATURAL", text: "尊重儿童真实的成长状态，让面料、色彩与廓形回到舒适、自在和充满生命力的日常。" },
  { index: "02", title: "时尚", english: "FASHION", text: "从全球趋势中汲取灵感，用适合儿童的设计语言重新表达，让每一次穿着都自然地回应当下。" },
  { index: "03", title: "价值感", english: "VALUE", text: "在设计、品质与日常价格之间寻找平衡，让值得被看见的儿童时装进入更多中国家庭。" },
]
const cities = ["MILAN", "PARIS", "NEW YORK", "LONDON", "SEOUL"]
const honors = ["十佳童装设计师", "南中国时尚杰出贡献奖", "中国十佳童装设计奖", "最佳时尚童装设计品牌"]
let animationContext: gsap.Context | undefined

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  animationContext = gsap.context(() => {
    gsap.from(".brand-nav", { y: -20, opacity: 0, duration: 1, ease: "power2.out", delay: 0.2 })
    gsap.from(".brand-mark", { y: -12, opacity: 0, duration: 1.2, ease: "power2.out", delay: 0.35 })
    gsap.from(".brand-hero-title", { y: 24, opacity: 0, duration: 1.4, ease: "power2.out", delay: 0.4 })
    gsap.utils.toArray<HTMLElement>(".brand-fade").forEach((element) => {
      gsap.from(element, { scrollTrigger: { trigger: element, start: "top 85%" }, y: 30, opacity: 0, duration: 1.1, ease: "power2.out" })
    })
  })
})
onUnmounted(() => animationContext?.revert())
</script>

<template>
  <main class="bg-paper text-ink font-sans tracking-body-loose antialiased">
    <NuxtLink to="/" aria-label="返回首页" class="brand-nav fixed top-5 right-5 z-50 flex items-center gap-3 rounded-badge bg-char px-4 py-3 text-paper transition-colors hover:bg-ink md:top-8 md:right-8 md:px-5"><span class="text-[12px] font-medium tracking-wide">HOME</span><span aria-hidden="true" class="text-[16px] leading-none">←</span></NuxtLink>

    <section class="brand-hero relative flex h-[88vh] min-h-[660px] max-h-[940px] w-full flex-col justify-between overflow-hidden p-6 text-paper md:p-12">
      <div class="brand-mark relative z-10 flex items-center"><span class="brand-wordmark text-[24px] font-semibold leading-none md:text-[30px]">青蛙王子</span><span class="ml-3 border-l border-paper/50 pl-3 text-[10px] font-medium tracking-[0.24em] md:text-[11px]">童装</span></div>
      <div class="brand-hero-title relative z-10 max-w-[1100px]"><p class="mb-5 text-[12px] text-paper/75">Brand Philosophy — 1991 / Present</p><h1 class="text-[50px] font-light uppercase leading-[0.9] tracking-heading-tight sm:text-[76px] lg:text-[106px]">Natural.<br>Fashion. Value.</h1></div>
    </section>

    <section class="mx-auto w-full max-w-[1200px] px-6 py-20 md:px-8 md:py-32"><div class="brand-fade grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24"><div><span class="mb-3 block text-[12px] text-smoke">01 — Brand Belief</span><h2 class="text-heading-lg font-light tracking-heading-tight">有温度的<br>儿童时装。</h2></div><div class="max-w-[680px] pt-1"><p class="font-serif text-[26px] leading-[1.5] text-pewter md:text-[32px]">“衣服不只是孩子日常生活的陪伴，也应当承载舒适、审美与成长的温度。”</p><p class="mt-10 max-w-[610px] text-[15px] leading-[1.8]">青蛙王子以“有温度的儿童时装”为品牌理念。自然，是对成长天性的尊重；时尚，是对当代审美的回应；价值感，则让好的设计与品质被更多家庭真实拥有。</p></div></div></section>

    <section class="border-y border-mist"><article v-for="value in values" :key="value.index" class="brand-fade border-b border-mist last:border-b-0"><div class="mx-auto grid min-h-[260px] w-full max-w-[1200px] gap-8 px-6 py-12 md:grid-cols-[90px_1fr_1fr] md:items-center md:px-8"><span class="text-[12px] text-smoke">{{ value.index }}</span><div><p class="mb-2 text-[11px] text-ember">{{ value.english }}</p><h2 class="text-[44px] font-light tracking-heading-tight md:text-[62px]">{{ value.title }}</h2></div><p class="max-w-[460px] text-[15px] leading-[1.75] text-pewter">{{ value.text }}</p></div></article></section>

    <section class="bg-char text-paper"><div class="mx-auto grid min-h-[760px] max-w-[1440px] lg:grid-cols-[1.05fr_0.95fr]"><div class="brand-designer-image min-h-[500px] lg:min-h-full" /><div class="brand-fade flex flex-col justify-center px-6 py-20 md:px-16 lg:px-20 lg:py-24"><span class="mb-3 block text-[12px] text-paper/50">02 — Design Leadership</span><h2 class="text-heading-lg font-light tracking-heading-tight">设计，始于对儿童<br>真实生活的理解。</h2><p class="mt-10 max-w-[520px] text-[15px] leading-[1.8] text-paper/70">品牌由董事长邓庆云先生主笔设计。他是中国首位集四项童装设计与时尚荣誉于一身的设计者，以长期的专业积累持续塑造青蛙王子的设计表达。</p><div class="mt-12"><div v-for="(honor, index) in honors" :key="honor" class="grid grid-cols-[38px_1fr] border-t border-paper/20 py-5"><span class="text-[11px] text-paper/40">0{{ index + 1 }}</span><span class="text-[14px] text-paper/85">{{ honor }}</span></div></div></div></div></section>

    <section class="overflow-hidden py-20 md:py-32"><div class="brand-fade mx-auto w-full max-w-[1200px] px-6 md:px-8"><span class="mb-3 block text-[12px] text-smoke">03 — Global Perspective</span><div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"><h2 class="text-heading-lg font-light tracking-heading-tight">与世界同步，<br>为中国儿童设计。</h2><p class="max-w-[470px] text-[15px] leading-[1.8] text-pewter">自1991年创立以来，青蛙王子始终与国际流行趋势接轨，与全球多家时尚趋势预测机构深度交流合作，定期组织团队前往国际时尚之都交流学习，将最新的时尚流行元素带给中国儿童。</p></div></div><div class="brand-fade mt-20 border-y border-mist"><div v-for="(city, index) in cities" :key="city" class="border-b border-mist last:border-b-0"><div class="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-6 md:px-8"><span class="text-[11px] text-smoke">0{{ index + 1 }}</span><strong class="text-[25px] font-light tracking-heading-tight sm:text-[32px]">{{ city }}</strong><span aria-hidden="true" class="text-[16px] text-ember">→</span></div></div></div></section>

    <section class="brand-fade mx-auto w-full max-w-[1200px] px-6 pb-20 md:px-8 md:pb-32"><div class="bg-mist p-8 md:p-14"><span class="mb-3 block text-[12px] text-smoke">Our Expression</span><h2 class="max-w-[900px] text-heading font-light tracking-heading-tight md:text-[48px]">让自然成为底色，让时尚回应时代，让价值感陪伴每一次成长。</h2><NuxtLink to="/" class="mt-10 inline-flex items-center gap-2 text-[15px] text-ember transition-opacity hover:opacity-70">返回首页 <span class="text-[16px]">→</span></NuxtLink></div></section>

    <footer class="border-t border-mist bg-char px-6 py-6 text-paper md:px-12"><div class="mx-auto flex max-w-[1200px] items-center justify-between gap-4 text-[11px] leading-none text-paper/55 sm:text-[12px]"><p class="whitespace-nowrap">Copyright © 2026 青蛙王子童装 FrogPrince All Rights Reserved</p><a class="whitespace-nowrap transition-colors hover:text-paper" href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">沪ICP备20007378号-1</a></div></footer>
  </main>
</template>

<style scoped>
.brand-hero { isolation: isolate; background: url("/static/大屏/4.png") center 44% / cover no-repeat; }
.brand-hero::after { position: absolute; inset: 0; z-index: 0; background: linear-gradient(180deg, rgb(0 0 0 / 8%), rgb(0 0 0 / 50%)); content: ""; }
.brand-designer-image { background: url("/static/大屏/2.png") center / cover no-repeat; }
@media (max-width: 640px) { .brand-hero { background-position: 58% center; } .brand-designer-image { background-position: 60% center; } }
</style>
