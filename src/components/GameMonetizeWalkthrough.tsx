'use client'

import { useEffect, useRef } from 'react'

type Props = {
  gameid: string
  width?: string | number
  height?: string | number
  color?: string
  getAds?: boolean | 'true' | 'false'
  className?: string
  containerId?: string
}

/**
 * GameMonetize 官方视频 Walkthrough 集成组件
 * 按用户提供的集成代码封装，默认容器 id 为 "gamemonetize-video"
 * - 脚本地址：https://api.gamemonetize.com/video.js
 * - 全局配置：window.VIDEO_OPTIONS
 */
export default function GameMonetizeWalkthrough({
  gameid,
  width = '100%',
  height = 480,
  color = process.env.NEXT_PUBLIC_WALKTHROUGH_DEFAULT_COLOR || '#3f007e',
  getAds = process.env.NEXT_PUBLIC_WALKTHROUGH_SHOW_ADS === 'true',
  className = '',
  containerId = 'gamemonetize-video',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 1) 注入全局配置
    // 该 SDK 读取 window.VIDEO_OPTIONS 来初始化
    // 将宽高统一为字符串（SDK 示例使用字符串）
    const widthStr = typeof width === 'number' ? `${width}px` : width
    const heightStr = typeof height === 'number' ? `${height}px` : height

    ;(window as any).VIDEO_OPTIONS = {
      gameid,
      width: widthStr,
      height: heightStr,
      color,
      getAds: String(getAds) === 'true' ? 'true' : 'false',
    }

    // 2) 注入脚本（若未存在）
    const SDK_ID = 'gamemonetize-video-api'
    const SDK_SRC = 'https://api.gamemonetize.com/video.js'

    const ensureScript = () =>
      new Promise<void>((resolve) => {
        const existing = document.getElementById(SDK_ID) as HTMLScriptElement | null
        if (existing) {
          if ((existing as any).dataset.loaded === 'true') {
            resolve()
          } else {
            existing.addEventListener('load', () => resolve(), { once: true })
          }
          return
        }
        const firstScript = document.getElementsByTagName('script')[0]
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.id = SDK_ID
        script.src = SDK_SRC
        script.async = true
        script.addEventListener('load', () => {
          ;(script as any).dataset.loaded = 'true'
          resolve()
        })
        if (firstScript && firstScript.parentNode) {
          firstScript.parentNode.insertBefore(script, firstScript)
        } else {
          document.head.appendChild(script)
        }
      })

    ensureScript().then(() => {
      // SDK 加载完成后，容器中将会被 SDK 使用
      // 这里不需要手动渲染，SDK 内部会根据 window.VIDEO_OPTIONS 和容器 id 执行初始化
    })

    // 清理：不移除脚本，避免重复下载
    return () => {
      // 若需要在卸载时重置，可清理全局配置
      // delete (window as any).VIDEO_OPTIONS
    }
  }, [gameid, width, height, color, getAds])

  return <div id={containerId} ref={ref} className={className} />
}