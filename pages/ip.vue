<script setup lang="ts">
useHead({
  title: "品牌 IP 波克克 | 青蛙王子童装",
  meta: [{ name: "description", content: "认识青蛙王子品牌 IP 波克克：来自波西克亚星球的追梦美学家，传递纯真童趣与范感生活。" }],
})

const traits = ["猎奇思维", "勇于探索", "坚持创新", "热爱生活"]
const skills = ["音乐", "美术", "足球"]
</script>

<template>
  <main class="bg-paper font-sans text-ink antialiased">
    <NuxtLink aria-label="返回首页" class="fixed right-5 top-5 z-50 flex items-center gap-3 rounded-badge bg-char px-4 py-3 text-paper md:right-8 md:top-8" to="/"><span class="text-[12px]">HOME</span><span>←</span></NuxtLink>
    <section class="ip-hero relative flex h-[82vh] min-h-[620px] max-h-[900px] flex-col justify-between overflow-hidden p-6 text-paper md:p-12"><NuxtLink class="relative z-10 inline-flex w-fit" to="/"><img alt="青蛙王子童装" class="h-auto w-[132px] brightness-0 invert md:w-[176px]" src="/static/pic/logo.png"></NuxtLink><div class="relative z-10"><p class="mb-4 text-[12px] text-paper/75">Brand IP — Bokee</p><h1 class="text-[58px] font-light uppercase leading-[0.86] sm:text-[90px] lg:text-[126px]">Meet<br>Bokee</h1></div></section>
    <section class="mx-auto grid max-w-[1200px] gap-12 px-6 py-20 md:px-8 md:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><span class="text-[12px] text-smoke">01 — Character Profile</span><h2 class="mt-4 text-[48px] font-light leading-[1.02] sm:text-heading-lg">波克克，<br>追梦美学家。</h2></div><div class="max-w-[620px] text-[15px] leading-[1.85] text-pewter"><p>波克克来自波西克亚星球，1岁，和小伙伴一起从浩瀚宇宙来到地球，寻找梦想中纯真童趣的植物，传达美学与范感生活。</p><p class="mt-7 border-l border-ember pl-5 text-[18px] text-ink">看见孩子的想象力，也让每一种天赋都拥有被表达的空间。</p></div></section>
    <section class="border-y border-mist"><div class="mx-auto grid max-w-[1200px] md:grid-cols-2"><div class="min-h-[520px] bg-[url('/static/pic/1.png')] bg-cover bg-center"/><div class="grid grid-cols-2"><div class="border-b border-mist p-6 sm:p-10"><span class="text-[11px] text-smoke">PERSONALITY</span><h2 class="mt-16 text-[30px] font-light">人物个性</h2><div class="mt-8 space-y-3 text-[14px] text-pewter"><p v-for="trait in traits" :key="trait">{{ trait }}</p></div></div><div class="border-b border-l border-mist p-6 sm:p-10"><span class="text-[11px] text-smoke">SKILLS</span><h2 class="mt-16 text-[30px] font-light">擅长领域</h2><div class="mt-8 space-y-3 text-[14px] text-pewter"><p v-for="skill in skills" :key="skill">{{ skill }}</p></div></div><div class="col-span-2 bg-char p-6 text-paper sm:p-10"><span class="text-[11px] text-paper/45">MISSION</span><h2 class="mt-12 text-[36px] font-light">为孩子带来纯真童趣，<br>传达范感生活美学。</h2></div></div></div></section>
    <section class="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-32"><span class="text-[12px] text-smoke">02 — IP Universe</span><div class="mt-4 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]"><h2 class="text-[42px] font-light leading-[1.08] sm:text-heading-lg">从一个角色，<br>延展一座想象星球。</h2><p class="max-w-[450px] text-[15px] leading-[1.8] text-pewter">波克克可延展至服装图案、配饰、文具、家居和线下活动等品牌周边场景，成为孩子成长过程中的想象伙伴。</p></div></section>
    <footer class="bg-char px-6 py-6 text-paper"><div class="mx-auto flex max-w-[1200px] justify-between gap-3 text-[11px] text-paper/55"><p>Copyright © 2026 青蛙王子童装 FrogPrince</p><NuxtLink to="/">返回首页</NuxtLink></div></footer>
  </main>
</template>

<style scoped>
.ip-hero { isolation: isolate; background: url('/static/pic/4.png') center / cover no-repeat; }
.ip-hero::after { position: absolute; inset: 0; z-index: 0; background: linear-gradient(180deg, rgb(0 0 0 / 8%), rgb(0 0 0 / 56%)); content: ''; }
</style>
