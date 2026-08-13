export interface WebsiteAsset {
  id: string
  pageKey: string
  slotKey: string
  title?: string
  description?: string
  mediaType: 'image' | 'video'
  contentType?: string
  fileUrl: string
  width?: number
  height?: number
  sortOrder: number
}

interface WebsiteAssetResponse {
  code: number
  message: string
  data: WebsiteAsset[]
}

export async function useWebsiteAssets(pageKey: string) {
  const { data, error } = await useFetch<WebsiteAssetResponse>('/api/website-assets', {
    key: `website-assets-${pageKey}`,
    query: { pageKey },
    lazy: true,
    server: false,
  })

  const assets = computed(() => data.value?.code === 200 && Array.isArray(data.value.data) ? data.value.data : [])

  function list(slotKey: string) {
    return assets.value.filter(asset => asset.slotKey === slotKey)
  }

  function url(slotKey: string, fallback: string, index = 0) {
    return list(slotKey)[index]?.fileUrl || fallback
  }

  return { assets, error, list, url }
}
