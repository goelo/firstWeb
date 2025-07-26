// Ad configuration and management utilities

export interface AdConfig {
  id: string
  type: 'banner' | 'rectangle' | 'leaderboard' | 'sidebar' | 'interstitial'
  provider: 'adsense' | 'gamemonetize' | 'gamedistribution' | 'custom'
  size: { width: number; height: number }
  placement: string
  enabled: boolean
  frequency?: number // For interstitial ads
}

export const adConfigs: AdConfig[] = [
  {
    id: 'home-banner',
    type: 'banner',
    provider: 'adsense',
    size: { width: 728, height: 90 },
    placement: 'home-page',
    enabled: true
  },
  {
    id: 'game-sidebar',
    type: 'sidebar',
    provider: 'adsense',
    size: { width: 300, height: 600 },
    placement: 'game-page-sidebar',
    enabled: true
  },
  {
    id: 'game-preroll',
    type: 'interstitial',
    provider: 'gamemonetize',
    size: { width: 800, height: 600 },
    placement: 'game-preroll',
    enabled: true,
    frequency: 3 // Show every 3 game loads
  },
  {
    id: 'article-rectangle',
    type: 'rectangle',
    provider: 'adsense',
    size: { width: 300, height: 250 },
    placement: 'article-content',
    enabled: true
  }
]

// Ad tracking and analytics
export class AdManager {
  private static instance: AdManager
  private adViews: Map<string, number> = new Map()
  private adClicks: Map<string, number> = new Map()
  private gameLoads: number = 0

  static getInstance(): AdManager {
    if (!AdManager.instance) {
      AdManager.instance = new AdManager()
    }
    return AdManager.instance
  }

  // Track ad view
  trackAdView(adId: string): void {
    const currentViews = this.adViews.get(adId) || 0
    this.adViews.set(adId, currentViews + 1)
    
    // Send to analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ad_view', {
        ad_id: adId,
        event_category: 'advertising'
      })
    }
  }

  // Track ad click
  trackAdClick(adId: string): void {
    const currentClicks = this.adClicks.get(adId) || 0
    this.adClicks.set(adId, currentClicks + 1)
    
    // Send to analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ad_click', {
        ad_id: adId,
        event_category: 'advertising'
      })
    }
  }

  // Check if interstitial ad should be shown
  shouldShowInterstitial(adId: string): boolean {
    const config = adConfigs.find(ad => ad.id === adId)
    if (!config || !config.enabled || config.type !== 'interstitial') {
      return false
    }

    this.gameLoads++
    return this.gameLoads % (config.frequency || 1) === 0
  }

  // Get ad statistics
  getAdStats(adId: string): { views: number; clicks: number; ctr: number } {
    const views = this.adViews.get(adId) || 0
    const clicks = this.adClicks.get(adId) || 0
    const ctr = views > 0 ? (clicks / views) * 100 : 0

    return { views, clicks, ctr }
  }

  // Initialize ad blockers detection
  detectAdBlocker(): Promise<boolean> {
    return new Promise((resolve) => {
      const testAd = document.createElement('div')
      testAd.innerHTML = '&nbsp;'
      testAd.className = 'adsbox'
      testAd.style.position = 'absolute'
      testAd.style.left = '-10000px'
      document.body.appendChild(testAd)

      setTimeout(() => {
        const isBlocked = testAd.offsetHeight === 0
        document.body.removeChild(testAd)
        resolve(isBlocked)
      }, 100)
    })
  }
}

// Ad revenue tracking
export interface AdRevenue {
  date: string
  provider: string
  revenue: number
  impressions: number
  clicks: number
  cpm: number
  ctr: number
}

export class RevenueTracker {
  private static instance: RevenueTracker
  private dailyRevenue: AdRevenue[] = []

  static getInstance(): RevenueTracker {
    if (!RevenueTracker.instance) {
      RevenueTracker.instance = new RevenueTracker()
    }
    return RevenueTracker.instance
  }

  // Add revenue data
  addRevenue(data: AdRevenue): void {
    this.dailyRevenue.push(data)
    
    // Store in localStorage for persistence
    localStorage.setItem('ad_revenue', JSON.stringify(this.dailyRevenue))
  }

  // Get total revenue for a date range
  getTotalRevenue(startDate: string, endDate: string): number {
    return this.dailyRevenue
      .filter(r => r.date >= startDate && r.date <= endDate)
      .reduce((total, r) => total + r.revenue, 0)
  }

  // Get revenue by provider
  getRevenueByProvider(provider: string): number {
    return this.dailyRevenue
      .filter(r => r.provider === provider)
      .reduce((total, r) => total + r.revenue, 0)
  }

  // Load revenue data from localStorage
  loadRevenue(): void {
    const stored = localStorage.getItem('ad_revenue')
    if (stored) {
      this.dailyRevenue = JSON.parse(stored)
    }
  }
}

// Utility functions
export const formatRevenue = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(amount)
}

export const calculateCPM = (revenue: number, impressions: number): number => {
  return impressions > 0 ? (revenue / impressions) * 1000 : 0
}

export const calculateCTR = (clicks: number, impressions: number): number => {
  return impressions > 0 ? (clicks / impressions) * 100 : 0
}
