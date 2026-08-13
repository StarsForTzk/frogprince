<script lang="ts" setup>
import {onMounted, onUnmounted} from 'vue'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

useHead({
  title: '公司简介 | 青蛙王子童装',
  meta: [
    {
      name: 'description',
      content: '青蛙王子童装创立于1991年，致力于成为儿童平价时装引领者。'
    }
  ]
})
const {url: assetUrl} = await useWebsiteAssets('company')

const milestones = [
  {year: '1991', title: '从制造出发', text: '上海蛙品儿童用品有限公司前身东方制衣厂成立，产品随后出口东南亚。'},
  {year: '1990s', title: '品牌进入市场', text: '注册青蛙王子、青蛙皇子品牌，开设首家品牌专卖店，产品覆盖中国内地。'},
  {year: '2000s', title: '设计与规模并进', text: '青蛙皇子工业园落成，品牌登陆中国国际时装周，并获得童装设计与行业品牌荣誉。'},
  {year: '2013', title: '中国十大童装品牌', text: '获得中国服装行业协会颁发的中国十大童装品牌称号，并连续三届蝉联。'},
  {year: '2015', title: '中国好宝贝', text: '与金鹰卡通共同打造儿童才艺大赛，连续举办六届，为儿童提供展示舞台。'},
  {year: '2018', title: '品牌焕新', text: '获得安正时尚集团注资，运营中心迁至上海，注册上海蛙品儿童用品有限公司。'},
  {year: '2021', title: '重新定义品牌价值', text: '以儿童多元生活方式为方向，升级品牌与产品价值内涵。'},
  {year: '2022', title: '构建品牌新势能', text: '提出范感生活价值主张，加大高性价比、高质量简约时尚产品研发。'},
  {year: '2023', title: '线上渠道升级', text: '成立线上业务子公司，整合渠道资源，并推出聚焦场景与消费需求的体验店。'},
  {year: 'TODAY', title: '全岁段、多品类', text: '持续建设儿童潮范生活方式品牌，陪伴0至14岁儿童成长。'}
]

const figures = [
  {value: '1991', label: '品牌创立'},
  {value: '1200+', label: '全国门店'},
  {value: '28', label: '覆盖省份'},
  {value: '80万+', label: '会员规模'}
]

let animationContext: gsap.Context | undefined

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  animationContext = gsap.context(() => {
    gsap.from('.company-nav', {y: -20, opacity: 0, duration: 1, ease: 'power2.out', delay: 0.2})
    gsap.from('.company-brand', {y: -12, opacity: 0, duration: 1.2, ease: 'power2.out', delay: 0.35})
    gsap.from('.company-title', {y: 24, opacity: 0, duration: 1.4, ease: 'power2.out', delay: 0.35})
    gsap.utils.toArray<HTMLElement>('.company-fade').forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {trigger: element, start: 'top 85%'},
        y: 30,
        opacity: 0,
        duration: 1.1,
        ease: 'power2.out'
      })
    })
  })
})

onUnmounted(() => animationContext?.revert())
</script>

<template>
  <main class="bg-paper text-ink font-sans tracking-body-loose antialiased">
    <NuxtLink
        aria-label="返回首页"
        class="company-nav fixed top-5 right-5 z-50 flex items-center gap-3 rounded-badge bg-char px-4 py-3 text-paper transition-colors hover:bg-ink md:top-8 md:right-8 md:px-5"
        to="/"
    >
      <span class="text-[12px] font-medium tracking-wide">HOME</span>
      <span aria-hidden="true" class="text-[16px] leading-none">←</span>
    </NuxtLink>

    <section
        class="company-hero relative flex h-[82vh] min-h-[620px] max-h-[880px] w-full flex-col justify-between overflow-hidden p-6 text-paper md:p-12">
      <div class="absolute inset-0 bg-cover bg-center" :style="{backgroundImage: `url('${assetUrl('hero', '/static/pic/3.png')}')`}" />
      <NuxtLink class="company-brand relative z-10 inline-flex w-fit" to="/">
        <img alt="青蛙王子童装" class="h-auto w-[132px] brightness-0 invert md:w-[176px]" src="/static/pic/logo.png">
      </NuxtLink>
      <div class="company-title relative z-10 max-w-[1050px]">
        <p class="mb-4 text-[12px] text-paper/75">Frog Family — Company Profile</p>
        <h1 class="text-[56px] font-light uppercase leading-[0.88] tracking-heading-tight sm:text-[80px] lg:text-[112px]">
          About<br>Frog Prince
        </h1>
      </div>
    </section>

    <section class="mx-auto w-full max-w-[1200px] px-6 py-20 md:px-8 md:py-32">
      <div class="company-fade grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <span class="mb-3 block text-[12px] text-smoke">01 — Who We Are</span>
          <h2 class="text-heading-lg font-light tracking-heading-tight">从佛山出发，<br>向更广阔的未来。</h2>
        </div>
        <div class="max-w-[660px] space-y-7 pt-1 text-[15px] leading-[1.75]">
          <p>中国新一线品牌、中国十大童装品牌——青蛙王子（FROG
            PRINCE），创立于1991年，创始地位于中国四大童装名镇之一——佛山；2018年，获得知名上市服装企业安正时尚集团注资，并将品牌运营中心迁至上海，注册“上海蛙品儿童用品有限公司”，以国际化视野开创未来。</p>
          <p>
            青蛙王子持续拓展全国渠道，门店覆盖28个省份，总数超过1200家，形成由街铺、购物中心、百货、商超与奥特莱斯共同组成的多层次商业网络。</p>
          <p class="border-l border-ember pl-5 font-serif text-[18px] italic leading-[1.55] text-pewter">
            让好设计进入更多家庭，让孩子在自在穿着中探索每天的新鲜世界。</p>
        </div>
      </div>

      <div class="company-fade mt-20 grid border-t border-mist sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
        <div v-for="(figure, index) in figures" :key="figure.value"
             :class="{ 'sm:border-l': index > 0 }" class="border-b border-mist py-8 sm:px-6 lg:border-b-0">
          <strong class="block text-[34px] font-light tracking-heading-tight md:text-[42px]">{{ figure.value }}</strong>
          <span class="mt-2 block text-[12px] leading-[1.5] text-smoke">{{ figure.label }}</span>
        </div>
      </div>
    </section>

    <section id="journey" class="bg-char text-paper">
      <div class="mx-auto grid max-w-[1440px] lg:grid-cols-[0.8fr_1.2fr]">
        <div class="company-history-image min-h-[480px] bg-cover bg-center lg:min-h-full" :style="{backgroundImage: `url('${assetUrl('history', '/static/pic/5.png')}')`}"/>
        <div class="company-fade px-6 py-20 md:px-16 lg:px-20 lg:py-24">
          <span class="mb-3 block text-[12px] text-paper/50">02 — Our Journey</span>
          <h2 class="mb-14 text-heading-lg font-light tracking-heading-tight">一段持续生长的<br>品牌旅程。</h2>
          <div>
            <article v-for="milestone in milestones" :key="milestone.year"
                     class="grid grid-cols-[72px_1fr] gap-5 border-t border-paper/20 py-7 md:grid-cols-[96px_1fr]">
              <span class="text-[12px] text-paper/50">{{ milestone.year }}</span>
              <div>
                <h3 class="mb-2 text-[18px] font-normal">{{ milestone.title }}</h3>
                <p class="max-w-[430px] text-[14px] leading-[1.65] text-paper/65">{{ milestone.text }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="company-fade mx-auto w-full max-w-[1200px] px-6 py-20 md:px-8 md:py-32">
      <span class="mb-3 block text-[12px] text-smoke">03 — Our Direction</span>
      <div class="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <h2 class="max-w-[820px] text-heading-lg font-light tracking-heading-tight">以平价时装回应成长，<br>以长期主义连接家庭。
        </h2>
        <p class="max-w-[420px] text-[15px] leading-[1.7] text-pewter">
          从产品设计到城市渠道，青蛙王子始终围绕儿童真实的穿着需要，让品质、审美与日常价格取得更好的平衡。</p>
      </div>
      <NuxtLink class="mt-12 inline-flex items-center gap-2 text-[15px] text-ember transition-opacity hover:opacity-70"
                to="/">
        返回首页 <span class="text-[16px]">→</span></NuxtLink>
    </section>

    <footer class="border-t border-mist bg-char px-6 py-6 text-paper md:px-12">
      <div
          class="mx-auto flex max-w-[1200px] items-center justify-between gap-4 text-[11px] leading-none text-paper/55 sm:text-[12px]">
        <p class="whitespace-nowrap">Copyright © 2026 青蛙王子童装 FrogPrince All Rights Reserved</p>
        <a class="whitespace-nowrap transition-colors hover:text-paper" href="https://beian.miit.gov.cn" rel="noopener noreferrer"
           target="_blank">沪ICP备20007378号-1</a>
      </div>
    </footer>
  </main>
</template>

<style scoped>
.company-hero {
  isolation: isolate;
  background: #222;
}

.company-hero::after {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: linear-gradient(180deg, rgb(0 0 0 / 10%), rgb(0 0 0 / 48%));
  content: '';
}

@media (max-width: 640px) {
  .company-hero {
    background-position: 58% center;
  }

  .company-history-image {
    background-position: 58% center;
  }
}
</style>
