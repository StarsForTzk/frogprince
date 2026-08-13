<script lang="ts" setup>
import {onMounted, onUnmounted} from "vue"
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

useHead({
  title: "企业文化 | 青蛙王子童装",
  meta: [{name: "description", content: "青蛙王子企业文化：秉承初心与责任，创民族品牌，树百年基业。"}],
})

const cultureSections = [
  {
    number: "01",
    label: "MISSION",
    title: "使命",
    headline: "一颗王子心，\n成就金色梦",
    lines: ["秉承初心与责任", "胸怀天下儿童，承载家人梦想", "传承利他、共赢", "成就儿童梦想"],
  },
  {
    number: "02",
    label: "VISION",
    title: "愿景",
    headline: "创民族品牌，\n树百年基业",
    lines: ["品牌的崛起是中国崛起的一个样板", "自信展现，走出国门", "传承优秀，放眼百年"],
  },
]
const values = ["兼爱", "尚贤", "传承", "利它"]
let animationContext: gsap.Context | undefined

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  animationContext = gsap.context(() => {
    gsap.from(".culture-nav", {y: -20, opacity: 0, duration: 1, ease: "power2.out", delay: 0.2})
    gsap.from(".culture-mark", {y: -12, opacity: 0, duration: 1.2, ease: "power2.out", delay: 0.35})
    gsap.from(".culture-title", {y: 24, opacity: 0, duration: 1.4, ease: "power2.out", delay: 0.4})
    gsap.utils.toArray<HTMLElement>(".culture-fade").forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {trigger: element, start: "top 85%"},
        y: 30,
        opacity: 0,
        duration: 1.1,
        ease: "power2.out"
      })
    })
  })
})
onUnmounted(() => animationContext?.revert())
</script>

<template>
  <main class="bg-paper text-ink font-sans tracking-body-loose antialiased">
    <NuxtLink aria-label="返回首页" class="culture-nav fixed top-5 right-5 z-50 flex items-center gap-3 rounded-badge bg-char px-4 py-3 text-paper transition-colors hover:bg-ink md:top-8 md:right-8 md:px-5"
              to="/">
      <span class="text-[12px] font-medium tracking-wide">HOME</span><span aria-hidden="true"
                                                                           class="text-[16px] leading-none">←</span>
    </NuxtLink>

    <section
        class="culture-hero relative flex h-[82vh] min-h-[620px] max-h-[900px] w-full flex-col justify-between overflow-hidden p-6 text-paper md:p-12">
      <NuxtLink class="culture-mark relative z-10 inline-flex w-fit" to="/">
        <img alt="青蛙王子童装" class="h-auto w-[132px] brightness-0 invert md:w-[176px]" src="/static/pic/logo.png">
      </NuxtLink>
      <div class="culture-title relative z-10 max-w-[1050px]"><p class="mb-5 text-[12px] text-paper/75">Frog Family —
        Culture &amp; Spirit</p>
        <h1 class="text-[52px] font-light uppercase leading-[0.88] tracking-heading-tight sm:text-[82px] lg:text-[116px]">
          Culture<br>In Motion</h1></div>
    </section>

    <section class="mx-auto w-full max-w-[1200px] px-6 py-20 md:px-8 md:py-32">
      <div class="culture-fade max-w-[860px]"><span class="mb-4 block text-[12px] text-smoke">01 — The Heart</span>
        <h2 class="text-heading-lg font-light tracking-heading-tight">文化不是墙上的文字，<br>而是每一次选择的方向。</h2>
        <p class="mt-10 max-w-[620px] text-[15px] leading-[1.8] text-pewter">
          一颗王子心，成就金色梦。青蛙王子把对儿童的关怀、对家人的责任和对长期事业的坚持，放在品牌每天的行动里。</p></div>
    </section>

    <section class="border-y border-mist">
      <article v-for="section in cultureSections" :key="section.number"
               class="culture-fade border-b border-mist last:border-b-0">
        <div
            class="mx-auto grid min-h-[430px] w-full max-w-[1200px] gap-10 px-6 py-16 md:grid-cols-[100px_0.9fr_1.1fr] md:items-center md:px-8 md:py-20">
          <span class="text-[12px] text-smoke">{{ section.number }}<br><span
              class="mt-2 block text-[10px] tracking-[0.12em]">{{ section.label }}</span></span>
          <h2 class="whitespace-pre-line text-[48px] font-light leading-[0.95] tracking-heading-tight md:text-[68px]">
            {{ section.headline }}</h2>
          <div><p class="mb-8 text-[22px] font-light text-ember">{{ section.title }}</p>
            <div class="space-y-4 border-t border-mist pt-6 text-[15px] leading-[1.6] text-pewter"><p
                v-for="line in section.lines" :key="line">{{ line }}</p></div>
          </div>
        </div>
      </article>
    </section>

    <section class="bg-char text-paper">
      <div
          class="culture-fade mx-auto grid min-h-[700px] max-w-[1200px] gap-16 px-6 py-20 md:px-8 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div><span class="mb-4 block text-[12px] text-paper/50">03 — Our Values</span>
          <h2 class="text-heading-lg font-light tracking-heading-tight">兼爱、尚贤、<br>传承、利它。</h2>
          <p class="mt-10 max-w-[430px] text-[15px] leading-[1.8] text-paper/65">
            价值观融汇墨家、儒家和道家思想精髓，集国学心传之大成，成为公司团队新时代的集体标签，呈现于世。</p></div>
        <div class="grid grid-cols-2 border-t border-paper/20 sm:grid-cols-4 lg:border-t-0">
          <div v-for="(value, index) in values" :key="value"
               class="flex min-h-[180px] flex-col justify-between border-b border-paper/20 p-5 first:border-l-0 sm:border-l sm:p-6 lg:min-h-[300px] lg:border-b-0">
            <span class="text-[11px] text-paper/40">0{{ index + 1 }}</span><strong
              class="text-[28px] font-light md:text-[36px]">{{ value }}</strong></div>
        </div>
      </div>
    </section>

    <section class="culture-fade mx-auto w-full max-w-[1200px] px-6 py-20 md:px-8 md:py-32"><span
        class="mb-4 block text-[12px] text-smoke">04 — The Personality</span>
      <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"><h2
          class="text-heading-lg font-light tracking-heading-tight">性情鲜活，<br>使命在身，希望在心。</h2>
        <p class="max-w-[420px] text-[15px] leading-[1.8] text-pewter">
          至此，公司品牌形象人格化确立。青蛙王子既保有孩子般的鲜活与好奇，也肩负着让更多家庭拥有美好童年的长期使命。</p>
      </div>
      <NuxtLink class="mt-12 inline-flex items-center gap-2 text-[15px] text-ember transition-opacity hover:opacity-70"
                to="/">
        返回首页 <span class="text-[16px]">→</span></NuxtLink>
    </section>

    <footer class="border-t border-mist bg-char px-6 py-6 text-paper md:px-12">
      <div
          class="mx-auto flex max-w-[1200px] items-center justify-between gap-4 text-[11px] leading-none text-paper/55 sm:text-[12px]">
        <p class="whitespace-nowrap">Copyright © 2026 青蛙王子童装 FrogPrince All Rights Reserved</p><a
          class="whitespace-nowrap transition-colors hover:text-paper" href="https://beian.miit.gov.cn" rel="noopener noreferrer"
          target="_blank">沪ICP备20007378号-1</a></div>
    </footer>
  </main>
</template>

<style scoped>
.culture-hero {
  isolation: isolate;
  background: url("/static/pic/5.png") center 45% / cover no-repeat;
}

.culture-hero::after {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: linear-gradient(180deg, rgb(0 0 0 / 10%), rgb(0 0 0 / 52%));
  content: "";
}

@media (max-width: 640px) {
  .culture-hero {
    background-position: 62% center;
  }
}
</style>
