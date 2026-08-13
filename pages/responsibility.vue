<script setup lang="ts">
useHead({
  title: "品牌行动 | 青蛙王子童装",
  meta: [{ name: "description", content: "青蛙王子通过儿童才艺舞台、公益行动、时尚发布及跨界联名，看见儿童天赋，支持儿童志向成长。" }],
})

const actions = [
  { year: "2015", title: "中国好宝贝", text: "青蛙王子在行业首创儿童才艺大赛，已连续举办六届，为全国儿童提供展示才艺与表达自我的舞台。" },
  { year: "公益", title: "看见天然才赋", text: "与广州候鸟慈善基金会联合开展公益活动，看见孩子的天然才赋，支持孩子的志向成长。" },
  { year: "2021", title: "儿童时尚周", text: "亮相第四届中国国际儿童时尚周，以时尚发布秀呈现潮范儿童生活的新体验。" },
]

const collaborations = [
  { name: "哆啦A梦", text: "以经典动漫形象连接共同的童年记忆，让熟悉的想象力进入儿童日常穿着。" },
  { name: "大闹天宫", text: "以朱红、图腾与东方叙事重释传统文化，在当代童装中表达鲜明的中国气质。" },
]
const mediaChannels = ["微信", "小红书", "抖音", "微博", "头条"]
</script>

<template>
  <main class="bg-paper font-sans text-ink antialiased">
    <NuxtLink aria-label="返回首页" class="fixed right-5 top-5 z-50 flex items-center gap-3 rounded-badge bg-char px-4 py-3 text-paper md:right-8 md:top-8" to="/"><span class="text-[12px]">HOME</span><span>←</span></NuxtLink>
    <section class="action-hero relative flex h-[82vh] min-h-[620px] max-h-[900px] flex-col justify-between overflow-hidden p-6 text-paper md:p-12"><NuxtLink class="relative z-10 inline-flex w-fit" to="/"><img alt="青蛙王子童装" class="h-auto w-[132px] brightness-0 invert md:w-[176px]" src="/static/pic/logo.png"></NuxtLink><div class="relative z-10"><p class="mb-4 text-[12px] text-paper/75">Brand Actions — Grow Together</p><h1 class="text-[52px] font-light uppercase leading-[0.88] sm:text-[80px] lg:text-[110px]">See The Gift.<br>Support The Dream.</h1></div></section>
    <section class="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-32"><span class="text-[12px] text-smoke">01 — Our Commitment</span><div class="mt-4 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"><h2 class="text-[42px] font-light leading-[1.08] sm:text-heading-lg">看见孩子的天然才赋，<br>支持孩子的志向成长。</h2><p class="max-w-[450px] text-[15px] leading-[1.8] text-pewter">成长不只有一种答案。青蛙王子通过才艺、公益、时尚与文化合作，为儿童创造更多被看见、被鼓励和自由表达的机会。</p></div></section>
    <section class="border-y border-mist"><article v-for="(action, index) in actions" :key="action.title" class="border-b border-mist last:border-b-0"><div class="mx-auto grid min-h-[260px] max-w-[1200px] gap-7 px-6 py-12 md:grid-cols-[100px_0.8fr_1.2fr] md:items-center md:px-8"><span class="text-[12px] text-smoke">{{ action.year }}</span><h2 class="text-[30px] font-light md:text-[38px]">{{ action.title }}</h2><p class="max-w-[520px] text-[15px] leading-[1.8] text-pewter">{{ action.text }}</p></div></article></section>
    <section class="bg-char text-paper"><div class="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28"><span class="text-[12px] text-paper/50">02 — IP Collaboration</span><div class="mt-4 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><h2 class="text-[42px] font-light leading-[1.08] sm:text-heading-lg">让熟悉的故事，<br>进入新的童年。</h2><div class="border-t border-paper/20"><article v-for="(item, index) in collaborations" :key="item.name" class="grid gap-5 border-b border-paper/20 py-8 sm:grid-cols-[50px_180px_1fr]"><span class="text-[11px] text-paper/40">0{{ index + 1 }}</span><h3 class="text-[22px] font-normal">{{ item.name }}</h3><p class="text-[14px] leading-[1.75] text-paper/65">{{ item.text }}</p></article></div></div></div></section>
    <section class="mx-auto grid max-w-[1200px] gap-12 px-6 py-20 md:px-8 md:py-32 lg:grid-cols-2 lg:items-end"><div class="min-h-[480px] rounded-card bg-[url('/static/pic/1.png')] bg-cover bg-center"/><div><span class="text-[12px] text-smoke">03 — Towards The Future</span><h2 class="mt-4 text-[42px] font-light leading-[1.08]">陪伴成长，<br>共创未来。</h2><p class="mt-8 max-w-[480px] text-[15px] leading-[1.8] text-pewter">以儿童用户为中心，以产品价值体验为核心，青蛙王子持续连接家庭、伙伴与社会，缔造值得消费者信赖的儿童品牌。</p></div></section>
    <section class="border-t border-mist bg-mist/40"><div class="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28"><span class="text-[12px] text-smoke">04 — Brand Communication</span><div class="mt-4 grid gap-10 lg:grid-cols-[1fr_1fr]"><h2 class="text-[42px] font-light leading-[1.08]">在孩子喜欢的地方，<br>持续传递品牌。</h2><div class="flex flex-wrap content-start gap-3"> <span v-for="channel in mediaChannels" :key="channel" class="rounded-badge bg-paper px-5 py-3 text-[14px]">{{ channel }}</span></div></div></div></section>
    <footer class="bg-char px-6 py-6 text-paper"><div class="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-3 text-[11px] text-paper/55"><p>Copyright © 2026 青蛙王子童装 FrogPrince</p><NuxtLink to="/">返回首页</NuxtLink></div></footer>
  </main>
</template>

<style scoped>
.action-hero { isolation: isolate; background: url('/static/pic/5.png') center 44% / cover no-repeat; }
.action-hero::after { position: absolute; inset: 0; z-index: 0; background: linear-gradient(180deg, rgb(0 0 0 / 8%), rgb(0 0 0 / 58%)); content: ''; }
</style>
