<script setup lang="ts">
useHead({
  title: "全龄产品 | 青蛙王子童装",
  meta: [{ name: "description", content: "青蛙王子覆盖0至14岁儿童，提供婴童、幼小童、中大童及鞋品、家居与配饰等多品类产品。" }],
})
const {url: assetUrl} = await useWebsiteAssets('products')

const ranges = computed(() => [
  { id: "baby", age: "0–3 YEARS", name: "婴童", english: "BABY", image: "/static/pic/1.png", text: "采用天然、环保、舒适的面辅料，关注低龄儿童的活动需要与贴身体验，给予成长初期更细致的呵护。" },
  { id: "kids", age: "3–7 YEARS", name: "幼小童", english: "KIDS", image: "/static/pic/2.png", text: "强调产品品质与儿童美学陪伴，让舒适廓形适应探索、游戏与日常出行，释放孩子爱玩的天性。" },
  { id: "young", age: "7–14 YEARS", name: "中大童", english: "YOUNG", image: "/static/pic/3.png", text: "以潮范、时尚、多元的设计回应校园、户外与社交场景，鼓励孩子阳光、自信地表达自己的风格。" },
].map(range => ({...range, image: assetUrl(range.id, range.image)})))

const categories = ["T恤", "卫衣", "衬衫", "毛衫", "外套", "裤装", "裙装", "套装", "羽绒服", "鞋品", "家居", "配饰"]
const priceRanges = [
  { name: "T恤 / 卫衣", price: "49–298元" },
  { name: "衬衫 / 毛衫", price: "89–298元" },
  { name: "外套 / 裤裙", price: "99–568元" },
  { name: "套装 / 羽绒服", price: "189–1298元" },
]
</script>

<template>
  <main class="bg-paper font-sans text-ink antialiased">
    <NuxtLink aria-label="返回首页" class="fixed right-5 top-5 z-50 flex items-center gap-3 rounded-badge bg-char px-4 py-3 text-paper md:right-8 md:top-8" to="/">
      <span class="text-[12px] font-medium">HOME</span><span aria-hidden="true">←</span>
    </NuxtLink>

    <section class="products-hero relative flex h-[82vh] min-h-[620px] max-h-[900px] flex-col justify-between overflow-hidden p-6 text-paper md:p-12">
      <div class="absolute inset-0 bg-cover bg-center" :style="{backgroundImage: `url('${assetUrl('hero', '/static/pic/4.png')}')`}" />
      <NuxtLink class="relative z-10 inline-flex w-fit" to="/"><img alt="青蛙王子童装" class="h-auto w-[132px] brightness-0 invert md:w-[176px]" src="/static/pic/logo.png"></NuxtLink>
      <div class="relative z-10"><p class="mb-4 text-[12px] text-paper/75">Products — 0 to 14 Years</p><h1 class="text-[54px] font-light uppercase leading-[0.88] sm:text-[82px] lg:text-[116px]">Made For<br>Every Age</h1></div>
    </section>

    <section class="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-32">
      <span class="text-[12px] text-smoke">01 — One-stop Wardrobe</span>
      <div class="mt-4 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <h2 class="text-[42px] font-light leading-[1.08] sm:text-heading-lg">全岁段，多品类，<br>陪伴成长每一程。</h2>
        <p class="max-w-[450px] text-[15px] leading-[1.8] text-pewter">青蛙王子围绕儿童多元生活方式构建产品体系，从出生后的贴身呵护，到校园、户外与社交场景，为0至14岁孩子提供完整的穿着选择。</p>
      </div>
    </section>

    <section class="border-t border-mist">
      <article v-for="(range, index) in ranges" :id="range.id" :key="range.id" class="scroll-mt-0 border-b border-mist">
        <div class="mx-auto grid min-h-[620px] max-w-[1440px] lg:grid-cols-2">
          <div class="min-h-[420px] bg-cover bg-center" :class="{ 'lg:order-2': index % 2 === 1 }" :style="{ backgroundImage: `url('${range.image}')` }" />
          <div class="flex flex-col justify-center px-6 py-16 md:px-16 lg:px-20">
            <span class="text-[12px] text-smoke">0{{ index + 2 }} — {{ range.age }}</span>
            <h2 class="mt-5 text-[52px] font-light leading-none md:text-[72px]">{{ range.name }}</h2>
            <p class="mt-2 text-[15px] tracking-[0.18em] text-ember">{{ range.english }}</p>
            <p class="mt-10 max-w-[500px] text-[15px] leading-[1.8] text-pewter">{{ range.text }}</p>
          </div>
        </div>
      </article>
    </section>

    <section id="more" class="mx-auto max-w-[1200px] scroll-mt-8 px-6 py-20 md:px-8 md:py-32">
      <span class="text-[12px] text-smoke">05 — More Than Clothing</span>
      <div class="mt-4 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 class="text-[42px] font-light leading-[1.08] sm:text-heading-lg">不止童装，<br>也是成长生活。</h2>
        <div class="grid grid-cols-2 border-t border-mist sm:grid-cols-3">
          <div v-for="(category, index) in categories" :key="category" class="flex min-h-[120px] flex-col justify-between border-b border-mist p-4 sm:border-l sm:p-5">
            <span class="text-[10px] text-smoke">{{ String(index + 1).padStart(2, '0') }}</span><strong class="text-[18px] font-normal">{{ category }}</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="border-t border-mist bg-mist/40"><div class="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28"><span class="text-[12px] text-smoke">06 — Product Value</span><div class="mt-4 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><h2 class="text-[42px] font-light leading-[1.08] sm:text-heading-lg">高质感，<br>也有好价格。</h2><div class="grid border-t border-ink/15 sm:grid-cols-2"> <div v-for="item in priceRanges" :key="item.name" class="flex items-end justify-between border-b border-ink/15 py-6 sm:border-l sm:px-5"><span class="text-[14px] text-pewter">{{ item.name }}</span><strong class="text-[18px] font-normal">{{ item.price }}</strong></div></div></div></div></section>

    <footer class="bg-char px-6 py-6 text-paper"><div class="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-3 text-[11px] text-paper/55"><p>Copyright © 2026 青蛙王子童装 FrogPrince</p><NuxtLink class="hover:text-paper" to="/">返回首页</NuxtLink></div></footer>
  </main>
</template>

<style scoped>
.products-hero { isolation: isolate; background: #222; }
.products-hero::after { position: absolute; inset: 0; z-index: 0; background: linear-gradient(180deg, rgb(0 0 0 / 8%), rgb(0 0 0 / 52%)); content: ''; }
</style>
