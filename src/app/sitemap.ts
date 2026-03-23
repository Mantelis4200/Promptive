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
      path: '/apie-mus',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/kontaktai',
      priority: 0.9,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/karjera',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/tinklarastis',
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/tinklarastis/ai-chatbots-enhancing-customer-engagement-and-support',
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/tinklarastis/top-7-workflows-every-business-should-automate-2025',
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/tinklarastis/speed-to-lead-why-every-minute-counts-in-sales',
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
    // Hub pages (high priority)
    {
      path: '/ai-auditas',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/ai-agentai-automatizacijos',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/svetainiu-kurimas',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    // Supporting pages
    {
      path: '/ai-auditas/kaina',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/ai-chatbotai',
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/verslo-procesu-automatizavimas',
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/landing-puslapiai',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/el-parduotuviu-kurimas',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/projektai',
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Generate sitemap entries for each page in both languages.
  // Hreflang annotations live exclusively in the HTML <head> (via layout metadata)
  // to avoid "multiple entries" duplication that confuses crawlers.
  pages.forEach((page) => {
    const englishUrl = page.path === '' ? baseUrl : `${baseUrl}${page.path}`
    const lithuanianUrl = page.path === '' ? `${baseUrl}/lt` : `${baseUrl}/lt${page.path}`

    // English version
    sitemap.push({
      url: englishUrl,
      lastModified: new Date('2026-02-18'),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })

    // Lithuanian version
    sitemap.push({
      url: lithuanianUrl,
      lastModified: new Date('2026-02-18'),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })
  })

  return sitemap
}
