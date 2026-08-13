<script setup lang="ts">
useHead({
  title: "面料科技 | 青蛙王子童装",
  meta: [{ name: "description", content: "了解青蛙王子童装对天然、环保、舒适面料及防油、防水、防风功能科技的产品实践。" }],
})

const functions = [
  { number: "01", title: "防油", english: "OIL REPELLENT", text: "面向儿童真实日常，降低常见油渍对衣物表面的影响，让清洁与打理更从容。" },
  { number: "02", title: "防水", english: "WATER REPELLENT", text: "为通勤、出游和轻户外场景提供实用保护，在多变天气中保持舒适体验。" },
  { number: "03", title: "防风", english: "WIND RESISTANT", text: "通过面料与结构协同应对冷风，兼顾活动自由度与儿童日常穿着需要。" },
]
const research = ["重点品类面料优化", "羽绒服轻量化研发", "三合一外套多场景设计", "数字化产品开发", "与供应商进行原材料趋势互动"]
</script>

<template>
  <main class="bg-paper font-sans text-ink antialiased">
    <NuxtLink aria-label="返回首页" class="fixed right-5 top-5 z-50 flex items-center gap-3 rounded-badge bg-char px-4 py-3 text-paper md:right-8 md:top-8" to="/"><span class="text-[12px]">HOME</span><span>←</span></NuxtLink>
    <section class="technology-hero relative flex h-[82vh] min-h-[620px] max-h-[900px] flex-col justify-between overflow-hidden p-6 text-paper md:p-12">
      <NuxtLink class="relative z-10 inline-flex w-fit" to="/"><img alt="青蛙王子童装" class="h-auto w-[132px] brightness-0 invert md:w-[176px]" src="/static/pic/logo.png"></NuxtLink>
      <div class="relative z-10"><p class="mb-4 text-[12px] text-paper/75">Dr. Frog — Fabric & Function</p><h1 class="text-[54px] font-light uppercase leading-[0.88] sm:text-[82px] lg:text-[112px]">Built For<br>Real Life</h1></div>
    </section>
    <section class="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-32">
      <div class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><span class="text-[12px] text-smoke">01 — Material Belief</span><h2 class="mt-4 text-[42px] font-light leading-[1.08] sm:text-heading-lg">从一块面料，<br>回应真实成长。</h2></div><div class="max-w-[650px] space-y-7 text-[15px] leading-[1.8]"><p>青蛙王子聚焦产品品质，选择天然、环保、舒适的面辅料，并持续与专业机构合作探索面料功能，为儿童提供更好的适穿体验。</p><p class="border-l border-ember pl-5 text-[18px] text-pewter">专业、潮范、好体验、高性价比，是产品研发持续坚持的方向。</p></div></div>
    </section>
    <section class="bg-char text-paper"><div class="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28"><span class="text-[12px] text-paper/50">02 — Functional Protection</span><h2 class="mt-4 text-[42px] font-light leading-[1.08] sm:text-heading-lg">三重功能，<br>应对多场景日常。</h2><div class="mt-16 grid border-t border-paper/20 md:grid-cols-3"><article v-for="item in functions" :key="item.number" class="flex min-h-[320px] flex-col justify-between border-b border-paper/20 p-6 md:border-b-0 md:border-l"><span class="text-[11px] text-paper/40">{{ item.number }}</span><div><p class="text-[11px] tracking-[0.14em] text-paper/45">{{ item.english }}</p><h3 class="mt-3 text-[36px] font-light">{{ item.title }}</h3><p class="mt-6 text-[14px] leading-[1.75] text-paper/65">{{ item.text }}</p></div></article></div></div></section>
    <section class="mx-auto grid max-w-[1200px] gap-12 px-6 py-20 md:px-8 md:py-32 lg:grid-cols-[1fr_1fr] lg:items-center"><div class="min-h-[520px] rounded-card bg-[url('/static/pic/5.png')] bg-cover bg-center"/><div><span class="text-[12px] text-smoke">03 — Product Practice</span><h2 class="mt-4 text-[42px] font-light leading-[1.08]">轻量、多样，<br>延长穿着价值。</h2><p class="mt-8 max-w-[500px] text-[15px] leading-[1.8] text-pewter">围绕羽绒服、三合一外套等重点品类，青蛙王子关注轻户外、上学与聚会等多场景需求；通过一衣多搭适应不同温度与风格，让单品拥有更长的使用周期。</p><NuxtLink class="mt-10 inline-flex text-[15px] text-ember" to="/products">查看全龄产品&nbsp;→</NuxtLink></div></section>
    <section class="border-t border-mist"><div class="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28"><span class="text-[12px] text-smoke">04 — R&amp;D And Supply Chain</span><div class="mt-4 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><h2 class="text-[42px] font-light leading-[1.08] sm:text-heading-lg">从研发到供应链，<br>让产品更接近需求。</h2><div class="grid border-t border-mist sm:grid-cols-2"> <div v-for="(item, index) in research" :key="item" class="border-b border-mist py-5 sm:border-l sm:px-5"><span class="mr-4 text-[11px] text-smoke">0{{ index + 1 }}</span><span class="text-[14px]">{{ item }}</span></div></div></div></div></section>
    <footer class="bg-char px-6 py-6 text-paper"><div class="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-3 text-[11px] text-paper/55"><p>Copyright © 2026 青蛙王子童装 FrogPrince</p><NuxtLink to="/">返回首页</NuxtLink></div></footer>
  </main>
</template>

<style scoped>
.technology-hero { isolation: isolate; background: url('/static/pic/2.png') center / cover no-repeat; }
.technology-hero::after { position: absolute; inset: 0; z-index: 0; background: linear-gradient(180deg, rgb(0 0 0 / 8%), rgb(0 0 0 / 55%)); content: ''; }
</style>
