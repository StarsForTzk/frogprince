const PAGE_KEYS = new Set([
  'home',
  'brand',
  'company',
  'cooperation',
  'culture',
  'ip',
  'products',
  'responsibility',
  'stores',
  'technology',
])

export default defineEventHandler(async (event) => {
  const pageKey = getQuery(event).pageKey

  if (typeof pageKey !== 'string' || !PAGE_KEYS.has(pageKey)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid website asset page key',
    })
  }

  const config = useRuntimeConfig(event)
  const apiBase = String(config.websiteApiBase).replace(/\/$/, '')

  try {
    return await $fetch(`${apiBase}/dailyApi/frog/website-assets`, {
      query: { pageKey },
      timeout: 3000,
    })
  } catch (error) {
    console.error(`[website-assets] Failed to load assets for ${pageKey}`, error)
    throw createError({
      statusCode: 502,
      statusMessage: 'Website asset service is unavailable',
    })
  }
})
