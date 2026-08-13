<script lang="ts" setup>
import {onMounted, onUnmounted} from "vue"
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

useHead({
  title: "品牌诠释 | 青蛙王子童装",
  meta: [{name: "description", content: "青蛙王子支持儿童志向成长，释放孩子爱玩天性，传递潮范生活美学。"}],
})

const values = [
  {
    index: "01",
    title: "专业",
    english: "PROFESSIONAL",
    text: "深耕儿童服饰领域，以儿童真实需求为起点，将设计、面料与穿着体验落实到每一件产品。"
  },
  {
    index: "02",
    title: "范感",
    english: "STYLE",
    text: "以简约时尚和轻奢感表达儿童多元生活方式，让孩子阳光、自信地展现自己的态度。"
  },
  {
    index: "03",
    title: "好体验",
    english: "EXPERIENCE",
    text: "以舒适产品体验和有温度的终端服务，回应儿童在校园、户外、社交与居家等多场景需求。"
  },
  {
    index: "04",
    title: "高性价比",
    english: "VALUE",
    text: "在品质、设计与日常价格之间取得平衡，让可靠的儿童时尚产品进入更多中国家庭。"
  }
]
const honors = [
  {year: "2003 / 2005", title: "中国市场知名品牌产品"},
  {year: "2013 / 2021 / 2022", title: "中国十大童装品牌"},
  {year: "2022", title: "年度购物中心新锐品牌"},
  {year: "累计 100+", title: "品牌与设计类奖项"},
  {year: "设计团队", title: "中国十佳童装设计师 / 中国十佳童装设计奖 / 最佳时尚童装设计品牌"}
]
const globalPartners = [
  {name: "CATHERINE", role: "国际童装创意交流", text: "与品牌团队交流流行趋势和儿童产品美学。"},
  {name: "FRANCOISE", role: "品牌系统指导", text: "围绕品牌系统、设计美学与品牌力升级提供专业交流。"},
  {name: "IVY", role: "商品与供应链", text: "围绕商品体系和供应链系统升级展开合作。"}
]
let animationContext: gsap.Context | undefined

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  animationContext = gsap.context(() => {
    gsap.from(".brand-nav", {y: -20, opacity: 0, duration: 1, ease: "power2.out", delay: 0.2})
    gsap.from(".brand-mark", {y: -12, opacity: 0, duration: 1.2, ease: "power2.out", delay: 0.35})
    gsap.from(".brand-hero-title", {y: 24, opacity: 0, duration: 1.4, ease: "power2.out", delay: 0.4})
    gsap.utils.toArray<HTMLElement>(".brand-fade").forEach((element) => {
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
    <NuxtLink aria-label="返回首页" class="brand-nav fixed top-5 right-5 z-50 flex items-center gap-3 rounded-badge bg-char px-4 py-3 text-paper transition-colors hover:bg-ink md:top-8 md:right-8 md:px-5"
              to="/">
      <span class="text-[12px] font-medium tracking-wide">HOME</span><span aria-hidden="true"
                                                                           class="text-[16px] leading-none">←</span>
    </NuxtLink>

    <section
        class="brand-hero relative flex h-[88vh] min-h-[660px] max-h-[940px] w-full flex-col justify-between overflow-hidden p-6 text-paper md:p-12">
      <NuxtLink class="brand-mark relative z-10 inline-flex w-fit" to="/">
        <img alt="青蛙王子童装" class="h-auto w-[132px] brightness-0 invert md:w-[176px]" src="/static/pic/logo.png">
      </NuxtLink>
      <div class="brand-hero-title relative z-10 max-w-[1100px]"><p class="mb-5 text-[12px] text-paper/75">Brand
        Philosophy — 1991 / Present</p>
        <h1 class="text-[50px] font-light uppercase leading-[0.9] tracking-heading-tight sm:text-[76px] lg:text-[106px]">
          Style.<br>Experience. Value.</h1></div>
    </section>

    <section class="mx-auto w-full max-w-[1200px] px-6 py-20 md:px-8 md:py-32">
      <div class="brand-fade grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
        <div><span class="mb-3 block text-[12px] text-smoke">01 — Brand Belief</span>
          <h2 class="text-heading-lg font-light tracking-heading-tight">支持志向成长，<br>释放爱玩天性。</h2></div>
        <div class="max-w-[680px] pt-1"><p class="font-serif text-[26px] leading-[1.5] text-pewter md:text-[32px]">
          “支持儿童志向成长，释放孩子爱玩天性，传递潮范生活美学。”</p>
          <p class="mt-10 max-w-[610px] text-[15px] leading-[1.8]">
            青蛙王子以消费者为核心，聚焦儿童简约时尚、轻奢感与高质性价比产品，基于穿搭服务与传播，打造全岁段、多品类儿童潮范生活方式品牌。</p>
        </div>
      </div>
    </section>

    <section class="border-y border-mist">
      <article v-for="value in values" :key="value.index" class="brand-fade border-b border-mist last:border-b-0">
        <div
            class="mx-auto grid min-h-[260px] w-full max-w-[1200px] gap-8 px-6 py-12 md:grid-cols-[90px_1fr_1fr] md:items-center md:px-8">
          <span class="text-[12px] text-smoke">{{ value.index }}</span>
          <div><p class="mb-2 text-[11px] text-ember">{{ value.english }}</p>
            <h2 class="text-[44px] font-light tracking-heading-tight md:text-[62px]">{{ value.title }}</h2></div>
          <p class="max-w-[460px] text-[15px] leading-[1.75] text-pewter">{{ value.text }}</p></div>
      </article>
    </section>

    <section class="bg-char text-paper">
      <div class="mx-auto grid min-h-[760px] max-w-[1440px] lg:grid-cols-[1.05fr_0.95fr]">
        <div class="brand-designer-image min-h-[500px] lg:min-h-full"/>
        <div class="brand-fade flex flex-col justify-center px-6 py-20 md:px-16 lg:px-20 lg:py-24"><span
            class="mb-3 block text-[12px] text-paper/50">02 — Design Leadership</span>
          <h2 class="text-heading-lg font-light tracking-heading-tight">设计，始于对儿童<br>真实生活的理解。</h2>
          <p class="mt-10 max-w-[520px] text-[15px] leading-[1.8] text-paper/70">
            品牌由董事长邓庆云先生主笔设计。他是中国首位集四项童装设计与时尚荣誉于一身的设计者，以长期的专业积累持续塑造青蛙王子的设计表达。</p>
          <div id="honors" class="mt-12 scroll-mt-8">
            <div v-for="honor in honors" :key="honor.year + honor.title"
                 class="grid grid-cols-[120px_1fr] gap-4 border-t border-paper/20 py-5"><span
                class="text-[11px] text-paper/40">{{ honor.year }}</span><span
                class="text-[14px] text-paper/85">{{ honor.title }}</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="overflow-hidden py-20 md:py-32">
      <div class="brand-fade mx-auto w-full max-w-[1200px] px-6 md:px-8"><span
          class="mb-3 block text-[12px] text-smoke">03 — Global Perspective</span>
        <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"><h2
            class="text-heading-lg font-light tracking-heading-tight">与世界同步，<br>为中国儿童设计。</h2>
          <p class="max-w-[470px] text-[15px] leading-[1.8] text-pewter">
            自1991年创立以来，青蛙王子始终与国际流行趋势接轨，与全球多家时尚趋势预测机构深度交流合作，定期组织团队前往国际时尚之都交流学习，将最新的时尚流行元素带给中国儿童。</p>
        </div>
      </div>
      <div class="brand-fade mx-auto mt-20 grid max-w-[1200px] border-y border-mist md:grid-cols-3">
        <article v-for="partner in globalPartners" :key="partner.name" class="border-b border-mist p-7 md:min-h-[260px] md:border-b-0 md:border-l">
          <span class="text-[11px] text-smoke">{{ partner.role }}</span><h3 class="mt-8 text-[28px] font-light">{{ partner.name }}</h3><p class="mt-5 text-[14px] leading-[1.75] text-pewter">{{ partner.text }}</p>
        </article>
      </div>
    </section>

    <section class="brand-fade mx-auto w-full max-w-[1200px] px-6 pb-20 md:px-8 md:pb-32">
      <div class="bg-mist p-8 md:p-14"><span class="mb-3 block text-[12px] text-smoke">Our Expression</span>
        <h2 class="max-w-[900px] text-heading font-light tracking-heading-tight md:text-[48px]">
          专业、范感、好体验、高性价比，让潮范生活陪伴每一次成长。</h2>
        <NuxtLink class="mt-10 inline-flex items-center gap-2 text-[15px] text-ember transition-opacity hover:opacity-70"
                  to="/">
          返回首页 <span class="text-[16px]">→</span></NuxtLink>
      </div>
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
.brand-hero {
  isolation: isolate;
  background: url("/static/pic/4.png") center 44% / cover no-repeat;
}

.brand-hero::after {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: linear-gradient(180deg, rgb(0 0 0 / 8%), rgb(0 0 0 / 50%));
  content: "";
}

.brand-designer-image {
  background: url("/static/pic/2.png") center / cover no-repeat;
}

@media (max-width: 640px) {
  .brand-hero {
    background-position: 58% center;
  }

  .brand-designer-image {
    background-position: 60% center;
  }
}
</style>
