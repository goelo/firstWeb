'use client'

import { useEffect, useRef } from 'react'

type WalkthroughEmbedProps = {
  gameid: string
  width?: number | string
  height?: number | string
  color?: string
  showAds?: boolean
  className?: string
}

/**
 * 通用 Walkthrough 嵌入组件
 * - 通过注入外部脚本并在容器内初始化
 * - props: gameid, width/height, color, showAds
 * 下面以伪外链脚本演示（请替换为真实的 Walkthrough 提供方脚本）
 */
export default function WalkthroughEmbed({
  gameid,
  width = 640,
  height = 360,
  color = '#2563eb',
  showAds = true,
  className = '',
}: WalkthroughEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mounted = true
    // 示例脚本 URL（请替换为真实地址）
    const SDK_URL = 'https://example.com/walkthrough-sdk.js'
    const existing = document.querySelector(`script[src="${SDK_URL}"]`) as HTMLScriptElement | null

    const init = () => {
      if (!mounted || !containerRef.current) return
      // 假设全局对象为 window.WalkthroughSDK
      // @ts-ignore
      const SDK = window.WalkthroughSDK
      if (SDK && typeof SDK.render === 'function') {
        SDK.render({
          container: containerRef.current,
          gameid,
          width,
          height,
          color,
          showAds,
        })
      }
    }

    if (existing) {
      if (existing.getAttribute('data-loaded') === 'true') {
        init()
      } else {
        existing.addEventListener('load', init)
      }
      return () => {
        existing.removeEventListener('load', init)
        mounted = false
      }
    }

    const script = document.createElement('script')
    script.src = SDK_URL
    script.async = true
    script.defer = true
    script.addEventListener('load', () => {
      script.setAttribute('data-loaded', 'true')
      init()
    })
    document.body.appendChild(script)

    return () => {
      mounted = false
      script.removeEventListener('load', init)
    }
  }, [gameid, width, height, color, showAds])

  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  } as React.CSSProperties

  return <div ref={containerRef} className={className} style={style} />
}