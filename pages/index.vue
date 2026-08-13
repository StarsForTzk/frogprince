<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const defaultSlides = [
  "/static/hero/2.webp",
  "/static/hero/1.webp",
  "/static/hero/3.webp",
  "/static/hero/4.webp",
  "/static/hero/5.webp",
];
const { list: listAssets } = await useWebsiteAssets("home");
const slides = computed(() => {
  const uploaded = listAssets("hero").map(asset => asset.fileUrl);
  return uploaded.length ? uploaded : defaultSlides;
});
const activeSlide = ref(0);
const films = [
  { label: "SPRING 2026", src: "/static/video/spring-trend.mp4", poster: "/static/collection-optimized/spring-main.webp" },
  { label: "SUMMER 2026", src: "/static/video/青蛙26夏季趋势.mp4", poster: "/static/collection-optimized/summer-main.webp" },
  { label: "AUTUMN 2026", src: "/static/video/autumn-trend.mp4", poster: "/static/collection-optimized/autumn-main.webp" },
];
const activeFilmIndex = ref(0);
const activeFilm = computed(() => films[activeFilmIndex.value]);
const filmPlayer = ref<HTMLVideoElement>();
const filmSection = ref<HTMLElement>();
const collectionSection = ref<HTMLElement>();
const filmIsVisible = ref(false);
const collectionIsVisible = ref(false);
const seasonDefinitions = [
  { id: "spring", label: "春", english: "SPRING", title: "轻户外时刻，就此开启", description: "陪孩子在户外奔跑、探索、发现。安全是底线，趣味是答案，让成长不止步，一路加入自然。", color: "#dce6d7", accent: "#426348", focus: "轻户外 / 自然冒险 / 活力防护", images: ["/static/collection-optimized/spring-main.webp", "/static/collection-optimized/spring-detail.webp"] },
  { id: "summer", label: "夏", english: "SUMMER", title: "蝉鸣叫醒盛夏", description: "阳光洒满草地，汗水是夏天给孩子的勋章。把清爽穿在身上，让活力自由释放。", color: "#dce9e9", accent: "#276572", focus: "清爽穿着 / 户外运动 / 自由释放", images: ["/static/collection-optimized/summer-main.webp", "/static/collection-optimized/summer-detail.webp"] },
  { id: "autumn", label: "秋", english: "AUTUMN", title: "小小身影，大大世界", description: "踩过沙沙作响的草地，看秋山一层一层染上暖调。秋天的第一场冒险，从穿上新衣开始。", color: "#e8ded2", accent: "#8a5035", focus: "暖调层次 / 草地漫游 / 秋日新装", images: ["/static/collection-optimized/autumn-main.webp", "/static/collection-optimized/autumn-detail.webp"] },
  { id: "winter", label: "冬", english: "WINTER", title: "冬意渐深，童心炽热", description: "让每一件冬装，都成为孩子拥抱寒冬的铠甲。这个冬天，温暖自在，不负热爱。", color: "#dfe4e3", accent: "#3f5c5d", focus: "温暖防护 / 松弛层搭 / 冬日陪伴", images: ["/static/collection-optimized/winter-main.webp", "/static/collection-optimized/winter-detail.webp"] },
  { id: "new-year", label: "新年", english: "NEW YEAR", title: "年味浓了，童年就亮了", description: "烟花在夜空开出花，穿着新衣、揣着糖，跑向春天的方向。新年的第一场冒险，从穿上红装开始。", color: "#ead9d4", accent: "#a72f26", focus: "新春红装 / 团圆时刻 / 东方童趣", images: ["/static/collection-optimized/new-year-main.webp", "/static/collection-optimized/new-year-detail.webp"] },
];
const seasons = computed(() => seasonDefinitions.map(season => {
  const uploaded = listAssets(season.id).map(asset => asset.fileUrl);
  return { ...season, images: uploaded.length ? uploaded : season.images };
}));
const activeSeasonIndex = ref(0);
const activeCollectionImage = ref(0);
const activeSeason = computed(() => seasons.value[activeSeasonIndex.value]);
const footerGroups = [
  {
    title: "Frog Family",
    links: [
      { label: "公司简介", to: "/company" },
      { label: "品牌诠释", to: "/brand" },
      { label: "成长历程", to: "/company#journey" },
      { label: "品牌荣誉", to: "/brand#honors" },
      { label: "品牌 IP 波克克", to: "/ip" },
      { label: "企业文化", to: "/culture" },
      { label: "联系我们", to: "/#contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "全龄产品", to: "/products" },
      { label: "婴童 BABY", to: "/products#baby" },
      { label: "幼小童 KIDS", to: "/products#kids" },
      { label: "中大童 YOUNG", to: "/products#young" },
      { label: "鞋品与配饰", to: "/products#more" },
    ],
  },
  {
    title: "Frog Service",
    links: [
      { label: "售后服务", to: "/service" },
      { label: "退换货说明", to: "/service#return" },
      { label: "服务热线", to: "/service" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "面料科技", to: "/technology" },
      { label: "品牌行动", to: "/responsibility" },
      { label: "渠道门店", to: "/stores" },
      { label: "商业合作", to: "/cooperation" },
    ],
  },
  {
    title: "E-Shop",
    links: [
      { label: "天猫商城", to: "https://qingwawangzimy.tmall.com/", external: true },
      { label: "小红书", to: "https://www.xiaohongshu.com/user/profile/5e1d19460000000001006b2e", external: true },
      { label: "抖音", to: "https://www.douyin.com/user/MS4wLjABAAAA0mj05YKeKaqxfXQ0b_KawUM9Z2T6AhkSpNiAOKc0E8g", external: true },
    ],
  },
];
let timer: ReturnType<typeof window.setInterval> | undefined;
let collectionTimer: ReturnType<typeof window.setInterval> | undefined;
let animationContext: gsap.Context | undefined;
let filmObserver: IntersectionObserver | undefined;
let collectionObserver: IntersectionObserver | undefined;

function startCollectionRotation() {
  if (collectionTimer) window.clearInterval(collectionTimer);
  collectionTimer = window.setInterval(() => {
    activeSeasonIndex.value = (activeSeasonIndex.value + 1) % seasons.value.length;
    activeCollectionImage.value = 0;
  }, 8000);
}

function preloadNextHero() {
  const nextSlide = slides.value[(activeSlide.value + 1) % slides.value.length];
  if (nextSlide) new Image().src = nextSlide;
}

async function changeFilm(direction = 1) {
  activeFilmIndex.value = (activeFilmIndex.value + direction + films.length) % films.length;
  await nextTick();
  if (filmIsVisible.value) await filmPlayer.value?.play();
}

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
    activeSlide.value = (activeSlide.value + 1) % slides.value.length;
    preloadNextHero();
  }, 6000);
  preloadNextHero();
  filmObserver = new IntersectionObserver(([entry]) => {
    filmIsVisible.value = entry.isIntersecting;
    if (entry.isIntersecting) {
      nextTick(() => {
        filmPlayer.value?.load();
        filmPlayer.value?.play();
      });
    } else {
      filmPlayer.value?.pause();
    }
  }, { threshold: 0.15 });
  collectionObserver = new IntersectionObserver(([entry]) => {
    collectionIsVisible.value = entry.isIntersecting;
    if (entry.isIntersecting) startCollectionRotation();
    else if (collectionTimer) window.clearInterval(collectionTimer);
  }, { threshold: 0.1 });
  if (filmSection.value) filmObserver.observe(filmSection.value);
  if (collectionSection.value) collectionObserver.observe(collectionSection.value);
});

onUnmounted(() => {
  if (timer) window.clearInterval(timer);
  if (collectionTimer) window.clearInterval(collectionTimer);
  filmObserver?.disconnect();
  collectionObserver?.disconnect();
  animationContext?.revert();
});

function selectSeason(index: number) {
  activeSeasonIndex.value = index;
  activeCollectionImage.value = 0;
  if (collectionIsVisible.value) startCollectionRotation();
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
      <Transition name="hero-image" mode="out-in">
        <img :key="slides[activeSlide]" :src="slides[activeSlide]" alt="" class="hero-slide is-active h-full w-full object-cover" decoding="async" fetchpriority="high" />
      </Transition>
      <div class="absolute inset-0 z-[1] bg-gradient-to-b from-black/[0.08] to-black/30" />
      <div
        class="gsap-brand absolute top-6 left-6 md:top-12 md:left-12 z-10 flex items-center text-paper"
      >
        <img src="/static/pic/logo.png" alt="青蛙王子童装" class="h-auto w-[132px] brightness-0 invert md:w-[176px]" />
      </div>
      <div class="gsap-hero absolute bottom-6 left-6 z-10 md:bottom-12 md:left-12">
        <h1
          class="text-display font-light tracking-display-tight uppercase max-w-[1000px]"
        >
          FROG PRINCE
        </h1>
      </div>
      <div
        aria-label="Hero slides"
        class="hero-pagination absolute bottom-6 right-6 z-10 flex gap-2 md:bottom-12 md:right-12"
      >
        <span
          v-for="(_, index) in slides"
          :key="index"
          class="hero-dot w-2 h-2 rounded-full"
          :class="activeSlide === index ? 'bg-paper' : 'bg-paper/45'"
        />
      </div>
    </section>

    <section ref="filmSection" aria-label="Frog Prince visual film" class="relative h-[72vh] min-h-[520px] max-h-[860px] overflow-hidden bg-char text-paper">
      <video :key="activeFilm.src" ref="filmPlayer" class="absolute inset-0 h-full w-full object-cover" muted playsinline preload="none" :poster="activeFilm.poster" @ended="changeFilm(1)">
        <source v-if="filmIsVisible" :src="activeFilm.src" type="video/mp4" />
      </video>
      <div class="absolute inset-0 bg-black/20" />
      <div class="relative z-10 flex h-full flex-col justify-end p-6 md:p-12">
        <span class="mb-3 text-[12px] text-paper/75">Frog Prince — Visual Film / {{ activeFilm.label }}</span>
        <h2 class="max-w-[760px] text-[42px] font-light leading-[0.95] tracking-heading-tight sm:text-[62px]">Designed for<br>everyday wonder.</h2>
      </div>
      <button type="button" class="absolute right-6 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-paper/40 bg-black/20 text-[22px] text-paper transition-colors hover:bg-black/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper md:right-12 md:h-14 md:w-14" aria-label="播放下一支趋势影片" title="下一支影片" @click="changeFilm(1)">→</button>
      <div class="absolute bottom-7 right-6 z-20 flex gap-2 md:bottom-12 md:right-12" aria-label="当前影片">
        <span v-for="(_, index) in films" :key="index" class="h-1.5 w-1.5 rounded-full" :class="activeFilmIndex === index ? 'bg-paper' : 'bg-paper/45'" />
      </div>
    </section>

    <section class="w-full max-w-[1200px] mx-auto px-6 py-20 md:px-8 md:py-32">
      <div class="gsap-fade grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
        <div><span class="mb-3 block text-[12px] text-smoke">01 — The Philosophy</span><img src="/static/pic/slogan2.png" alt="Mom's baby, it's also our baby" class="w-full max-w-[430px]" /><p class="mt-1 text-[13px] text-[#00a876]">妈妈的宝贝，也是我们的宝贝.</p></div>
        <div class="max-w-[630px] space-y-5 text-[15px] leading-[1.85] text-pewter"><p>中国十大童装品牌 —— 青蛙王子童装（FROG PRINCE）创立于1991年。</p><p>2018年获得知名上市服装企业安正时尚集团注资，并将品牌运营中心迁至上海，注册“上海蛙品儿童用品有限公司”，以国际化视野开创未来。</p></div>
      </div>
    </section>

    <section ref="collectionSection" class="w-full max-w-[1200px] mx-auto pb-20 md:px-8 md:pb-32 px-6">
      <div class="gsap-fade flex items-end justify-between border-t border-mist pt-8">
        <div><span class="block text-[12px] text-smoke">02 — The Collection</span><h3 class="mt-3 text-[34px] font-light leading-none">四季童装型录</h3></div>
        <span class="text-[11px] text-smoke">FROG PRINCE / 2026</span>
      </div>
      <div class="gsap-fade mt-8 grid grid-cols-5 border-y border-mist" role="tablist" aria-label="季节系列">
        <button v-for="(season, index) in seasons" :key="season.id" type="button" role="tab" :aria-selected="activeSeasonIndex === index" class="group flex h-[76px] items-center justify-between border-r border-mist px-5 text-left last:border-r-0" :style="activeSeasonIndex === index ? { backgroundColor: season.color, color: season.accent } : undefined" @click="selectSeason(index)"><span><span class="block text-[10px] opacity-55">0{{ index + 1 }}</span><strong class="mt-1 block text-[18px] font-normal">{{ season.label }}</strong></span><span class="text-[11px] opacity-55">{{ season.english }}</span></button>
      </div>
      <div class="gsap-fade grid h-[620px] grid-cols-[minmax(0,1.48fr)_minmax(280px,0.68fr)_240px] overflow-hidden" :style="{ backgroundColor: activeSeason.color }">
        <div class="relative overflow-hidden bg-char"><Transition name="collection-image" mode="out-in"><img :key="activeSeason.id + activeCollectionImage" :src="activeSeason.images[activeCollectionImage]" :alt="`${activeSeason.label}季系列童装`" class="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" /></Transition><div class="absolute inset-0 bg-black/10"/><span class="absolute bottom-7 left-7 text-[11px] text-paper/80">0{{ activeCollectionImage + 1 }} / 0{{ activeSeason.images.length }}</span></div>
        <div class="flex min-w-0 flex-col justify-between border-r border-ink/10 p-9"><div><span class="text-[11px]" :style="{ color: activeSeason.accent }">{{ activeSeason.english }} COLLECTION</span><h4 class="mt-7 text-[38px] font-light leading-[1.12]">{{ activeSeason.title }}</h4><p class="mt-7 text-[14px] leading-[1.9] text-ink/65">{{ activeSeason.description }}</p></div><div><div class="border-t border-ink/15 pt-5"><span class="text-[10px] text-ink/45">SEASON FOCUS</span><p class="mt-3 text-[13px] leading-[1.6]" :style="{ color: activeSeason.accent }">{{ activeSeason.focus }}</p></div><div class="mt-7 flex items-center justify-between"><span class="text-[11px] text-ink/45">LOOK 0{{ activeSeasonIndex + 1 }}</span><div class="flex gap-2"><button type="button" class="flex h-9 w-9 items-center justify-center border border-ink/20 transition-colors hover:bg-paper/60" aria-label="上一张" @click="changeCollectionImage(-1)">←</button><button type="button" class="flex h-9 w-9 items-center justify-center border border-ink/20 transition-colors hover:bg-paper/60" aria-label="下一张" @click="changeCollectionImage(1)">→</button></div></div></div></div>
        <button type="button" class="group relative overflow-hidden bg-char text-left" aria-label="查看下一张系列图片" @click="changeCollectionImage(1)"><img :src="activeSeason.images[(activeCollectionImage + 1) % activeSeason.images.length]" :alt="`${activeSeason.label}季系列下一张`" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" loading="lazy" decoding="async"/><div class="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/55 to-transparent px-5 pb-5 pt-16 text-[11px] text-paper"><span>NEXT LOOK</span><span>→</span></div></button>
      </div>
    </section>

    <section
      id="contact"
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
            <template v-for="link in group.links" :key="link.label">
              <a
                v-if="link.external"
                class="hover:text-ember transition-colors"
                :href="link.to"
                target="_blank"
                rel="noopener noreferrer"
              >{{ link.label }}</a>
              <NuxtLink
                v-else
                class="hover:text-ember transition-colors"
                :to="link.to"
              >{{ link.label }}</NuxtLink>
            </template>
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
