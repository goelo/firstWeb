'use client'

import { useEffect, useRef } from 'react'

interface AdSlotProps {
  id: string
  className?: string
  size?: 'banner' | 'rectangle' | 'leaderboard' | 'sidebar'
  placeholder?: string
}

const adSizes = {
  banner: { width: 728, height: 90 },
  rectangle: { width: 300, height: 250 },
  leaderboard: { width: 970, height: 90 },
  sidebar: { width: 300, height: 600 }
}

export default function AdSlot({ 
  id, 
  className = '', 
  size = 'banner',
  placeholder = 'Advertisement'
}: AdSlotProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const { width, height } = adSizes[size]

  useEffect(() => {
    // Initialize ad when component mounts
    if (adRef.current) {
      // This is where you would integrate with your ad network
      // For now, we'll just show a placeholder
      
      // Example for Google AdSense:
      // if (window.adsbygoogle) {
      //   (window.adsbygoogle = window.adsbygoogle || []).push({});
      // }
      
      // Example for GameMonetize ads:
      // if (window.GameMonetizeAds) {
      //   window.GameMonetizeAds.showAd(id);
      // }
      
      console.log(`Ad slot ${id} initialized`)
    }
  }, [id])

  return (
    <div 
      ref={adRef}
      id={id}
      className={`ad-slot ${className}`}
      style={{ 
        width: `${width}px`, 
        height: `${height}px`,
        maxWidth: '100%',
        margin: '0 auto'
      }}
      data-ad-slot={id}
      data-ad-size={size}
    >
      {/* Placeholder content - replace with actual ad code */}
      <div className="flex items-center justify-center h-full text-gray-500 text-sm">
        {placeholder}
      </div>
    </div>
  )
}

// AdSense component for Google Ads
export function AdSenseSlot({ 
  adSlot, 
  adFormat = 'auto',
  fullWidthResponsive = true,
  className = ''
}: {
  adSlot: string
  adFormat?: string
  fullWidthResponsive?: boolean
  className?: string
}) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error('AdSense error:', err)
    }
  }, [])

  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXX" // Replace with your AdSense client ID
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive}
      />
    </div>
  )
}

// GameMonetize ad component
export function GameMonetizeAd({ 
  gameId,
  width = 300,
  height = 250,
  className = ''
}: {
  gameId: string
  width?: number
  height?: number
  className?: string
}) {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // GameMonetize ad initialization
    const script = document.createElement('script')
    script.src = 'https://api.gamemonetize.com/sdk.js'
    script.async = true
    script.onload = () => {
      // @ts-ignore
      if (window.GameMonetize) {
        // @ts-ignore
        window.GameMonetize.showAd({
          containerId: `gm-ad-${gameId}`,
          gameId: gameId,
          width: width,
          height: height
        })
      }
    }
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [gameId, width, height])

  return (
    <div 
      ref={adRef}
      id={`gm-ad-${gameId}`}
      className={`game-monetize-ad ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  )
}

// Preroll ad component for games
export function PrerollAd({ 
  onAdComplete,
  onAdSkipped,
  className = ''
}: {
  onAdComplete: () => void
  onAdSkipped?: () => void
  className?: string
}) {
  const handleSkip = () => {
    if (onAdSkipped) {
      onAdSkipped()
    } else {
      onAdComplete()
    }
  }

  return (
    <div className={`preroll-ad-container ${className}`}>
      <div className="relative w-full h-full bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <div className="mb-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
          </div>
          <p className="mb-4">Advertisement</p>
          <button
            onClick={handleSkip}
            className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
          >
            Skip Ad
          </button>
        </div>
      </div>
    </div>
  )
}
