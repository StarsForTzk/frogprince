<script setup lang="ts">
import { onMounted, onUnmounted } from "vue"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

useHead({
  title: "售后服务 | 青蛙王子童装",
  meta: [{ name: "description", content: "青蛙王子童装售后服务与退换货规定。" }],
})

const restrictions = [
  "超过规定的时间：自购买之日起，超过7天后不可退货；超过15天后不可换货。",
  "影响2次销售：商品未保持原质原貌、已使用洗涤过、人为破坏、标牌拆卸或保养不当等。",
  "特价商品：所购买的商品低于3折（含3折）以下。",
  "饰品类商品：保暖秋衣、袜子、内衣、内裤、书包、兔子类饰品、帽子、挂饰、围巾、手套、雨伞、文化衫等。",
  "用代金券、现金券、电子券等所赠送的消费券购买的商品，一经售出不予退货，但凭销售小票可回原购买店铺更换同类货品，存在价格差异，需补齐差价。",
]
const otherRules = [
  "如遇到异地顾客要求更换码数时，存在地区性差价（吊牌价）的由客服部、商品部、办事处、加盟商协调处理。",
  "对于顾客无法出示当地原购物小票时，由直营办区域主管、加盟商、客服部对照本制度进行退、换货管理。",
  "当本退、换货制度与专柜所在商场有关退、换货制度有冲突时，根据两制度中有利于顾客的条款处理。当仍无法满足顾客要求时，由客服部协调解决。",
  "所在城市没有青蛙皇子/青蛙小皇子专柜的，由客服部与顾客协商，邮寄回公司进行调换。如更换款式，可换价格不高于原商品，由此产生的邮寄费由顾客承担。",
  "当商品已使用洗涤过，但出现衣服缝制错位、明显破洞、严重掉色或染色、针织类衣服面料跳针、大面积脱线等问题，7天内凭销售小票回原购买店铺可退、换货，同时店铺需报备客服部。",
  "经客服部或办事处确认，确属商品品质问题，在提供退、换货处理的服务时，店铺可向当地办事处申请价值100元（吊牌价）以内的礼品一份赠送给顾客。",
  "其它情况：顾客要求退、换货时，如顾客与店铺的判定有争议，店铺可参照公司《售后货品维修制度（店铺版）》与《客户投诉处理规定及流程（店铺版）》进行快速妥善处理，并报备客服部。",
]
let animationContext: gsap.Context | undefined

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  animationContext = gsap.context(() => {
    gsap.from(".service-nav", { y: -20, opacity: 0, duration: 1, ease: "power2.out" })
    gsap.utils.toArray<HTMLElement>(".service-fade").forEach((element) => {
      gsap.from(element, { scrollTrigger: { trigger: element, start: "top 88%" }, y: 22, opacity: 0, duration: 0.9, ease: "power2.out" })
    })
  })
})
onUnmounted(() => animationContext?.revert())
</script>

<template>
  <main class="bg-paper text-ink font-sans tracking-body-loose antialiased">
    <header class="border-b border-mist px-6 py-6 md:px-12 md:py-8">
      <div class="service-nav mx-auto flex max-w-[1200px] items-center justify-between gap-6">
        <NuxtLink class="inline-flex" to="/"><img alt="青蛙王子童装" class="h-auto w-[132px] md:w-[176px]" src="/static/pic/logo.png"></NuxtLink>
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-[13px] text-pewter transition-colors hover:text-ember"><span aria-hidden="true">←</span> 返回首页</NuxtLink>
      </div>
    </header>

    <section class="mx-auto w-full max-w-[1200px] px-6 py-16 md:px-8 md:py-24">
      <div class="service-fade grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
        <div><span class="mb-3 block text-[12px] text-smoke">Frog Service — Customer Care</span><h1 class="text-[58px] font-light leading-[0.9] tracking-heading-tight md:text-[88px]">售后<br>服务</h1></div>
        <div class="border-l-2 border-ember pl-6 md:pl-8"><p class="text-[15px] leading-[1.7] text-pewter">如果您对产品有任何问题，欢迎拨打消费者 7×24 小时服务热线：</p><a href="tel:4000418883" class="mt-4 block text-[34px] font-light tracking-heading-tight transition-colors hover:text-ember md:text-[46px]">400-041-8883</a></div>
      </div>
      <nav aria-label="售后服务目录" class="service-fade mt-16 flex flex-wrap gap-x-7 gap-y-3 border-t border-mist pt-5 text-[13px] text-pewter md:mt-24"><a href="#return" class="transition-colors hover:text-ember">01 / 7天无理由退货</a><a href="#exchange" class="transition-colors hover:text-ember">02 / 15天无理由换货</a><a href="#excluded" class="transition-colors hover:text-ember">03 / 不支持情形</a><a href="#rules" class="transition-colors hover:text-ember">04 / 其它规定</a></nav>
    </section>

    <section id="return" class="border-y border-mist bg-mist/40"><div class="service-fade mx-auto grid max-w-[1200px] gap-10 px-6 py-16 md:px-8 md:py-24 lg:grid-cols-[260px_1fr] lg:gap-20"><div><span class="block text-[12px] text-smoke">01 — Return</span><h2 class="mt-3 text-[34px] font-light tracking-heading-tight">7天无理由<br>退货</h2></div><div class="max-w-[700px] text-[15px] leading-[1.8]"><p>商品自售出之日起7天内，在不影响2次销售的前提下，可提供“7天无理由退货”服务。</p><p class="mt-7 font-medium">退货时，店铺应收回赠送顾客的礼品、礼券、VIP卡返利等，以及取消相应的积分。如无法退回所赠的相关礼品，需扣除所赠相关礼品的价格后，再按消费者购买时的付款方式予以退货退款处理。</p><div class="mt-10 border-t border-ink/15 pt-6"><h3 class="text-[18px]">退货的条件</h3><p class="mt-3 text-pewter">商品需保持原质原貌、吊牌标识齐全、不脏、不残、不影响2次销售，7天内顾客凭销售小票可回原购买店铺进行退货。</p></div></div></div></section>

    <section id="exchange" class="mx-auto w-full max-w-[1200px] px-6 py-16 md:px-8 md:py-24"><div class="service-fade grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-20"><div><span class="block text-[12px] text-smoke">02 — Exchange</span><h2 class="mt-3 text-[34px] font-light tracking-heading-tight">15天无理由<br>换货</h2></div><div class="grid gap-12 md:grid-cols-2"><div class="border-t border-mist pt-6"><h3 class="text-[20px] font-normal">换款</h3><p class="mt-5 text-[15px] leading-[1.8] text-pewter">商品自售出之日起15天内，在不影响2次销售的前提下，可提供“15天无理由换货”服务。</p><p class="mt-5 text-[13px] leading-[1.7]">商品需保持原质原貌、吊牌标识齐全、不脏、不残、不影响2次销售，15天内顾客凭销售小票可回原购买店铺更换款式，存在价格差异，需补齐差价。</p></div><div class="border-t border-mist pt-6"><h3 class="text-[20px] font-normal">换码 / 颜色</h3><p class="mt-5 text-[15px] leading-[1.8] text-pewter">商品自售出之日起15天内，在不影响2次销售的前提下，可提供“15天无理由换码/颜色”服务。在所需当地（城市）码数没有的情况下，可由公司客服部与大区支持部及商品部协商调货。</p><p class="mt-5 text-[13px] leading-[1.7]">商品需保持原质原貌、吊牌标识齐全、不脏、不残、不影响2次销售，15天内顾客凭销售小票可在全国青蛙皇子/青蛙小皇子专柜更换对应码数与颜色。</p></div></div></div></section>

    <section id="excluded" class="bg-char text-paper"><div class="service-fade mx-auto max-w-[1200px] px-6 py-16 md:px-8 md:py-24"><span class="block text-[12px] text-paper/50">03 — Exclusions</span><div class="mt-3 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20"><h2 class="text-[38px] font-light leading-[1.05] tracking-heading-tight md:text-[52px]">以下情况，<br>不支持退换货服务。</h2><ol class="border-t border-paper/20"><li v-for="(item, index) in restrictions" :key="item" class="grid grid-cols-[30px_1fr] gap-4 border-b border-paper/20 py-5 text-[14px] leading-[1.7] text-paper/75"><span class="text-paper/40">{{ index + 1 }}</span><span>{{ item }}</span></li></ol></div></div></section>

    <section id="rules" class="mx-auto w-full max-w-[1200px] px-6 py-16 md:px-8 md:py-24"><div class="service-fade grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-20"><div><span class="block text-[12px] text-smoke">04 — Other Rules</span><h2 class="mt-3 text-[34px] font-light tracking-heading-tight">其它规定<br>说明</h2></div><ol class="border-t border-mist"><li v-for="(rule, index) in otherRules" :key="rule" class="grid grid-cols-[30px_1fr] gap-4 border-b border-mist py-5 text-[14px] leading-[1.75] text-pewter"><span class="text-smoke">{{ index + 1 }}</span><span>{{ rule }}</span></li></ol></div></section>

    <section class="border-t border-mist bg-mist/50 px-6 py-12 md:px-8 md:py-16"><div class="service-fade mx-auto flex max-w-[1200px] flex-col gap-4 text-[14px] leading-[1.7] text-pewter md:flex-row md:items-start md:justify-between"><p>本规定适用于全国青蛙王子童装实体店铺。</p><p class="md:text-right">可凭原购物小票至全国青蛙王子童装店铺直接进行更换。</p></div></section>

    <footer class="border-t border-mist bg-char px-6 py-6 text-paper md:px-12"><div class="mx-auto flex max-w-[1200px] items-center justify-between gap-4 text-[11px] leading-none text-paper/55 sm:text-[12px]"><p class="whitespace-nowrap">Copyright © 2026 青蛙王子童装 FrogPrince All Rights Reserved</p><a class="whitespace-nowrap transition-colors hover:text-paper" href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">沪ICP备20007378号-1</a></div></footer>
  </main>
</template>

<style scoped>
@media (max-width: 640px) { main { overflow-x: hidden; } }
</style>
