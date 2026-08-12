<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const slides = [
  "/static/pic/2.png",
  "/static/pic/1.png",
  "/static/pic/3.png",
  "/static/pic/4.png",
  "/static/pic/5.png",
];
const activeSlide = ref(0);
const seasons = [
  { id: "spring", label: "春", english: "SPRING", title: "A softer beginning.", description: "轻盈、透气与自然色彩，陪孩子走进一段正在发生的春日成长。", color: "#dfe9dc", accent: "#547258", images: ["/static/pic/1.png", "/static/pic/3.png"] },
  { id: "summer", label: "夏", english: "SUMMER", title: "Made for open air.", description: "清爽廓形与轻薄触感，让每一次奔跑都拥有更自由的余地。", color: "#e7eff0", accent: "#3d6970", images: ["/static/pic/2.png", "/static/pic/5.png"] },
  { id: "autumn", label: "秋", english: "AUTUMN", title: "The quiet structure.", description: "层次、纹理和恰到好处的温度，构成秋日衣橱的秩序感。", color: "#eadfd6", accent: "#9a5e43", images: ["/static/pic/3.png", "/static/pic/4.png"] },
  { id: "winter", label: "冬", english: "WINTER", title: "A warm architecture.", description: "以可靠面料和结构设计抵御寒冷，把温暖留在孩子的每一步里。", color: "#dfe3e5", accent: "#495d68", images: ["/static/pic/4.png", "/static/pic/1.png"] },
  { id: "new-year", label: "新年", english: "NEW YEAR", title: "A little more wonder.", description: "喜庆但不喧闹的色彩，记录团聚时刻，也收藏新一年的期待。", color: "#ead8d0", accent: "#a4432f", images: ["/static/pic/5.png", "/static/pic/2.png"] },
];
const activeSeasonIndex = ref(0);
const activeCollectionImage = ref(0);
const activeSeason = computed(() => seasons[activeSeasonIndex.value]);
const footerGroups = [
  {
    title: "Frog Family",
    links: [
      "公司简介",
      "品牌诠释",
      "成长历程",
      "荣誉称号",
      "企业文化",
      "社会责任",
      "联系我们",
    ],
  },
  {
    title: "Frog Service",
    links: ["会员活动", "会员权益", "售后服务", "服务热线"],
  },
  { title: "Dr.Frog", links: ["面料宝典", "穿衣搭配", "育儿心经"] },
  {
    title: "Recruitment",
    links: ["招聘信息", "学习成长", "职业通道", "薪酬福利", "办公环境"],
  },
  { title: "E-Shop", links: ["唯品会", "天猫商城"] },
];
const footerRoutes: Record<string, string> = {
  公司简介: "/company",
  品牌诠释: "/brand",
  企业文化: "/culture",
  售后服务: "/service",
};
let timer: ReturnType<typeof window.setInterval> | undefined;
let collectionTimer: ReturnType<typeof window.setInterval> | undefined;
let animationContext: gsap.Context | undefined;

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  animationContext = gsap.context(() => {
    gsap.from(".gsap-hero", {
      y: 20,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.4,
    });
    gsap.from(".gsap-brand", {
      y: -12,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      delay: 0.5,
    });
    gsap.utils.toArray<HTMLElement>(".gsap-fade").forEach((element) => {
      gsap.from(element, {
        scrollTrigger: { trigger: element, start: "top 85%" },
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      });
    });
  });
  timer = window.setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % slides.length;
  }, 6000);
  collectionTimer = window.setInterval(() => {
    activeCollectionImage.value = (activeCollectionImage.value + 1) % activeSeason.value.images.length;
  }, 5000);
});

onUnmounted(() => {
  if (timer) window.clearInterval(timer);
  if (collectionTimer) window.clearInterval(collectionTimer);
  animationContext?.revert();
});

function selectSeason(index: number) {
  activeSeasonIndex.value = index;
  activeCollectionImage.value = 0;
}

function changeCollectionImage(direction: number) {
  const total = activeSeason.value.images.length;
  activeCollectionImage.value = (activeCollectionImage.value + direction + total) % total;
}
</script>

<template>
  <div class="bg-paper text-ink font-sans tracking-body-loose antialiased">
    <section
      aria-label="Frog Prince collection highlights"
      class="hero-section relative w-full h-screen hero-bg flex flex-col justify-between p-6 md:p-12 text-paper"
    >
      <div
        v-for="(slide, index) in slides"
        :key="slide"
        class="hero-slide"
        :class="{ 'is-active': activeSlide === index }"
        :style="{ backgroundImage: `url('${slide}')` }"
      />
      <div
        class="gsap-brand absolute top-6 left-6 md:top-12 md:left-12 z-10 flex items-center text-paper"
      >
        <img src="/static/pic/logo.png" alt="青蛙王子童装" class="h-auto w-[132px] brightness-0 invert md:w-[176px]" />
      </div>
      <div class="gsap-hero absolute bottom-6 left-6 md:bottom-12 md:left-12">
        <h1
          class="text-display font-light tracking-display-tight uppercase max-w-[1000px]"
        >
          FROG PRINCE
        </h1>
      </div>
      <div
        aria-label="Hero slides"
        class="hero-pagination absolute bottom-6 right-6 md:bottom-12 md:right-12 flex gap-2"
      >
        <span
          v-for="(_, index) in slides"
          :key="index"
          class="hero-dot w-2 h-2 rounded-full"
          :class="activeSlide === index ? 'bg-paper' : 'bg-paper/45'"
        />
      </div>
    </section>

    <section aria-label="Frog Prince visual film" class="relative h-[72vh] min-h-[520px] max-h-[860px] overflow-hidden bg-char text-paper">
      <video class="absolute inset-0 h-full w-full object-cover" autoplay muted loop playsinline preload="metadata" poster="/static/pic/2.png">
        <source src="/static/video/青蛙26夏季趋势.mp4" type="video/mp4" />
      </video>
      <div class="absolute inset-0 bg-black/20" />
      <div class="relative z-10 flex h-full flex-col justify-end p-6 md:p-12">
        <span class="mb-3 text-[12px] text-paper/75">Frog Prince — Visual Film</span>
        <h2 class="max-w-[760px] text-[42px] font-light leading-[0.95] tracking-heading-tight sm:text-[62px]">Designed for<br>everyday wonder.</h2>
      </div>
    </section>

    <section class="w-full max-w-[1200px] mx-auto px-6 py-20 md:px-8 md:py-32">
      <div class="gsap-fade grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
        <div><span class="mb-3 block text-[12px] text-smoke">01 — The Philosophy</span><h2 class="text-[42px] font-light leading-[1.1] tracking-heading-tight sm:text-[56px] lg:text-heading-lg"><span class="whitespace-nowrap">从孩子的生活，</span><br>开始设计。</h2></div>
        <div class="max-w-[630px]"><p class="text-[15px] leading-[1.75] text-pewter">青蛙王子以儿童真实的生活为起点，围绕春、夏、秋、冬与新年建立完整的产品系统。每个系列有自己的温度、色彩和穿着场景，却共享同一套对舒适、品质和设计的坚持。</p><p class="mt-7 font-serif text-[19px] italic leading-[1.5] text-pewter">“让衣服适应孩子的生活，而不是让孩子迁就衣服。”</p></div>
      </div>
    </section>

    <section class="w-full max-w-[1200px] mx-auto pb-20 md:px-8 md:pb-32 px-6">
      <div class="gsap-fade border-t border-mist pt-6 md:pt-8">
        <span class="block text-[12px]" :style="{ color: activeSeason.accent }">02 — The Collection</span>
        <div class="mt-6 grid border-y border-mist md:grid-cols-5">
          <button v-for="(season, index) in seasons" :key="season.id" type="button" role="tab" :aria-selected="activeSeasonIndex === index" class="group flex items-center justify-between border-b border-mist px-1 py-5 text-left transition-colors md:border-b-0 md:border-r md:px-5 md:first:pl-0 md:last:border-r-0" @click="selectSeason(index)"><span><span class="mb-1 block text-[10px] text-smoke">0{{ index + 1 }}</span><strong class="block text-[18px] font-normal" :style="activeSeasonIndex === index ? { color: season.accent } : undefined">{{ season.label }}</strong></span><span class="text-[18px] transition-transform group-hover:translate-x-1" :style="{ color: season.accent }">{{ activeSeasonIndex === index ? '↗' : '→' }}</span></button>
        </div>
      </div>
      <div class="gsap-fade mt-4 grid min-h-[590px] overflow-hidden rounded-card lg:grid-cols-[1.35fr_0.65fr]" :style="{ backgroundColor: activeSeason.color }">
        <div class="relative min-h-[390px] overflow-hidden lg:min-h-0"><div class="absolute inset-0 bg-cover bg-center transition-all duration-700" :style="{ backgroundImage: `url('${activeSeason.images[activeCollectionImage]}')` }" /><div class="absolute inset-0 bg-black/10" /><div class="absolute bottom-6 left-6 right-6 flex items-end justify-between md:bottom-10 md:left-10 md:right-10"><span class="text-[12px] text-paper/85">{{ activeSeason.english }} / 0{{ activeCollectionImage + 1 }}</span><div class="flex gap-2"><button v-for="(image, index) in activeSeason.images" :key="image" type="button" :aria-label="`查看第 ${index + 1} 张图片`" class="h-2 w-2 rounded-full transition-transform" :class="activeCollectionImage === index ? 'scale-125 bg-paper' : 'bg-paper/50'" @click="activeCollectionImage = index" /></div></div></div>
        <div class="flex flex-col justify-between p-7 md:p-10"><div><span class="text-[11px] tracking-[0.16em]" :style="{ color: activeSeason.accent }">{{ activeSeason.english }} / 2026</span><h4 class="mt-5 text-[36px] font-light leading-[1.02] tracking-heading-tight md:text-[50px]">{{ activeSeason.title }}</h4><p class="mt-7 text-[15px] leading-[1.75] text-ink/65">{{ activeSeason.description }}</p><div class="mt-10 border-t border-ink/15 pt-5"><span class="text-[11px] text-smoke">Season Focus</span><p class="mt-3 text-[15px]" :style="{ color: activeSeason.accent }">{{ activeSeason.label }}系列 / 生活场景 / 日常穿着</p></div></div><div class="flex items-center justify-between border-t border-ink/15 pt-5 text-[12px]" :style="{ color: activeSeason.accent }"><span>Lookbook 0{{ activeSeasonIndex + 1 }} — 05</span><button type="button" class="inline-flex items-center gap-2 transition-opacity hover:opacity-60" @click="changeCollectionImage(1)">Next image <span class="text-[16px]">→</span></button></div></div>
      </div>
    </section>

    <section
      aria-label="Site navigation"
      class="border-t border-mist bg-paper px-6 py-12 md:px-12 md:py-16"
    >
      <div
        class="mx-auto grid max-w-[1180px] grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-3 lg:grid-cols-[260px_repeat(5,minmax(0,1fr))]"
      >
        <div>
          <h2
            class="mb-8 whitespace-nowrap text-[22px] font-medium tracking-tight"
          >
            Frog Prince
          </h2>
          <div
            class="flex flex-col gap-4 text-[14px] leading-[1.45] text-pewter"
          >
            <a
              class="grid grid-cols-[18px_1fr] items-start gap-3 hover:text-ember transition-colors"
              href="https://maps.google.com/?q=上海市闵行区放鹤路1088号"
              target="_blank"
              rel="noopener noreferrer"
              ><i
                aria-hidden="true"
                class="fa-solid fa-location-dot mt-0.5 w-4 shrink-0 text-ember"
              /><span>上海市闵行区放鹤路1088号</span></a
            ><a
              class="grid grid-cols-[18px_1fr] items-start gap-3 hover:text-ember transition-colors"
              href="tel:075781213692"
              ><i
                aria-hidden="true"
                class="fa-solid fa-phone mt-0.5 w-4 shrink-0 text-ember"
              /><span>0757-81213692</span></a
            ><a
              class="grid grid-cols-[18px_1fr] items-start gap-3 hover:text-ember transition-colors"
              href="mailto:hr@frogprince.cn"
              ><i
                aria-hidden="true"
                class="fa-solid fa-envelope mt-0.5 w-4 shrink-0 text-ember"
              /><span>hr@frogprince.cn</span></a
            >
            <div class="mt-2 flex items-center gap-4">
              <a
                v-for="social in [
                  {
                    name: '小红书',
                    url: 'https://www.xiaohongshu.com/user/profile/5e1d19460000000001006b2e',
                    icon: 'xiaohongshu.svg',
                  },
                  {
                    name: '抖音',
                    url: 'https://www.douyin.com/user/MS4wLjABAAAA0mj05YKeKaqxfXQ0b_KawUM9Z2T6AhkSpNiAOKc0E8g',
                    icon: 'douyin.svg',
                  },
                  {
                    name: '天猫',
                    url: 'https://qingwawangzimy.tmall.com/',
                    icon: 'tianmao.svg',
                  },
                ]"
                :key="social.name"
                :aria-label="social.name"
                class="flex h-10 w-10 items-center justify-center rounded-full bg-mist opacity-80 transition-all hover:bg-ember/10 hover:opacity-100"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                ><img
                  :alt="social.name"
                  class="h-5 w-auto"
                  :src="`/static/ico/${social.icon}`"
              /></a>
            </div>
          </div>
        </div>
        <div v-for="group in footerGroups" :key="group.title">
          <h2
            class="mb-8 whitespace-nowrap text-[22px] font-medium tracking-tight"
          >
            {{ group.title }}
          </h2>
          <nav
            :aria-label="group.title"
            class="flex flex-col items-start gap-4 text-[14px] leading-[1.35] text-pewter"
          >
          <NuxtLink
            v-for="link in group.links"
            :key="link"
            class="hover:text-ember transition-colors"
            :to="footerRoutes[link] ?? '#'"
            >{{ link }}</NuxtLink
          >
          </nav>
        </div>
      </div>
      <div aria-hidden="true" class="mx-auto mt-12 text-center md:mt-14">
        <span class="brand-wordmark text-[18px] text-ember/20">青蛙王子</span>
      </div>
    </section>

    <footer class="border-t border-mist bg-char text-paper px-6 py-6 md:px-12">
      <div
        class="max-w-[1200px] mx-auto flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
      >
        <div
          class="flex w-full items-center justify-between gap-4 text-[11px] leading-none text-paper/55 sm:text-[12px]"
        >
          <p class="whitespace-nowrap">
            Copyright © 2026 青蛙王子童装 FrogPrince All Rights Reserved Power
            By Frog.STARS
          </p>
          <a
            class="whitespace-nowrap text-right hover:text-paper transition-colors"
            href="https://beian.miit.gov.cn"
            rel="noopener noreferrer"
            target="_blank"
            >沪ICP备20007378号-1</a
          >
        </div>
      </div>
    </footer>
  </div>
</template>
