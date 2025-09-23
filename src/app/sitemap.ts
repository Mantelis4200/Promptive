import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://promptive.agency'

  // Define pages structure for both languages
  const pages = [
    {
      path: '',
      priority: 1.0,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/about',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/contact',
      priority: 0.9,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/careers',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/blog',
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/blog/ai-chatbots-enhancing-customer-engagement-and-support',
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/blog/top-7-workflows-every-business-should-automate-2025',
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/services/chatbots',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/services/workflows',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/services/ai-consultation',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/services/custom-ai-models',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/services/marketing',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/services/ad-creatives',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Generate sitemap entries for each page in both languages
  pages.forEach((page) => {
    const englishUrl = page.path === '' ? baseUrl : `${baseUrl}${page.path}`
    const lithuanianUrl = page.path === '' ? `${baseUrl}/lt` : `${baseUrl}/lt${page.path}`

    // Consistent hreflang configuration
    const alternates = {
      languages: {
        en: englishUrl,
        lt: lithuanianUrl,
        'x-default': englishUrl,
      },
    }

    // English version
    sitemap.push({
      url: englishUrl,
      lastModified: new Date('2024-12-25'),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates,
    })

    // Lithuanian version
    sitemap.push({
      url: lithuanianUrl,
      lastModified: new Date('2024-12-25'),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates,
    })
  })

  return sitemap
}