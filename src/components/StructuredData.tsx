'use client';

import { useParams } from 'next/navigation';

interface StructuredDataProps {
  type?: 'organization' | 'service' | 'article' | 'faq' | 'breadcrumb';
  data?: unknown;
  page?: string;
}

export default function StructuredData({ type = 'organization', data, page }: StructuredDataProps) {
  const params = useParams();
  const locale = params?.locale as string || 'en';
  const baseUrl = 'https://promptive.agency';

  const getOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": "Promptive Agency",
    "alternateName": "Promptive",
    "url": baseUrl,
    "logo": `${baseUrl}/images/logo.svg`,
    "image": `${baseUrl}/images/logo.svg`,
    "description": locale === 'lt' 
      ? "Pirmaujanti AI automatizavimo agentūra Lietuvoje. Kuriame AI chatbotus verslui ir automatizuojame verslo procesus."
      : "Leading AI automation agency specializing in AI chatbots for business and business process automation.",
    "legalName": "MB VINI CAPITAL", 
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "Augustas Vinikas"
    },
    "numberOfEmployees": "2-10",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "LT",
      "addressLocality": "Vilnius",
      "addressRegion": "Vilnius County"
    },
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+37061208887",
      "contactType": "customer service",
      "availableLanguage": ["English", "Lithuanian"],
      "areaServed": ["LT", "EU", "US"]
    }],
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning", 
      "Chatbot Development",
      "Business Process Automation",
      "Workflow Automation",
      "Natural Language Processing",
      "Conversational AI"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates", 
        "latitude": 54.6872,
        "longitude": 25.2797
      },
      "geoRadius": "200000"
    },
    "sameAs": [
      "https://linkedin.com/company/promptive-agency",
      "https://twitter.com/promptive_ai",
      "https://facebook.com/promptiveagency"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Automation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'lt' ? "AI Chatbotai Verslui" : "AI Chatbots for Business",
            "description": locale === 'lt' 
              ? "Pažangūs AI chatbotai klientų aptarnavimui ir pardavimams"
              : "Advanced AI chatbots for customer service and sales automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'lt' ? "Verslo Procesų Automatizavimas" : "Business Process Automation",
            "description": locale === 'lt'
              ? "Automatizuojame verslo procesus su AI technologijomis"
              : "Automate business processes with AI technology"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'lt' ? "AI Konsultacijos" : "AI Consultation",
            "description": locale === 'lt'
              ? "Nemokamos AI strategijos konsultacijos verslui"
              : "Free AI strategy consultations for businesses"
          }
        }
      ]
    }
  });

  const getServiceSchema = (serviceName: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/${locale === 'lt' ? `lt/${page}` : page}/#service`,
    "name": serviceName,
    "provider": {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`
    },
    "areaServed": locale === 'lt' ? "Lithuania" : ["Lithuania", "European Union", "United States"],
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `${baseUrl}/${locale === 'lt' ? `lt/${page}` : page}`,
      "serviceSmsNumber": "+37061208887",
      "servicePhone": "+37061208887"
    },
    "category": "AI Automation Services",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "EUR",
      "description": locale === 'lt' ? "Nemokama konsultacija" : "Free consultation available"
    }
  });

  const getChatbotServiceSchema = () => ({
    ...getServiceSchema(locale === 'lt' ? "AI Chatbotai Verslui" : "AI Chatbots for Business"),
    "serviceType": "AI Chatbot Development",
    "description": locale === 'lt'
      ? "Kuriame pažangius AI chatbotus verslui Lietuvoje. Automatizuokite klientų aptarnavimą, pardavimus ir palaikymą su mūsų dirbtinio intelekto pokalbių robotais."
      : "Build intelligent AI chatbots for your business. Automate customer service, sales, and support with our conversational AI solutions.",
    "additionalType": "https://schema.org/TechnologyService",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": locale === 'lt' ? "Chatbot Sprendimai" : "Chatbot Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'lt' ? "Pardavimų Chatbotai" : "Sales Chatbots",
            "category": "Sales Automation"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'lt' ? "E-prekybos Chatbotai" : "E-commerce Chatbots",
            "category": "E-commerce Automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": locale === 'lt' ? "Klientų Aptarnavimo Chatbotai" : "Customer Support Chatbots",
            "category": "Customer Service"
          }
        }
      ]
    }
  });

  const getLocalBusinessSchema = () => ({
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": `${baseUrl}/#localbusiness`,
    "name": "Promptive Agency",
    "alternateName": "Promptive",
    "url": baseUrl,
    "logo": `${baseUrl}/images/logo.svg`,
    "image": `${baseUrl}/images/logo.svg`,
    "description": locale === 'lt' 
      ? "Pirmaujanti AI automatizavimo agentūra Lietuvoje. Kuriame AI chatbotus verslui ir automatizuojame verslo procesus."
      : "Leading AI automation agency specializing in AI chatbots for business and business process automation.",
    "legalName": "MB VINI CAPITAL",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "Augustas Vinikas"
    },
    "numberOfEmployees": "2-10",
    "telephone": "+37061208887",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gedimino pr. 9",
      "addressLocality": "Vilnius",
      "postalCode": "01103",
      "addressCountry": "LT",
      "addressRegion": "Vilnius County"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 54.6872,
      "longitude": 25.2797
    },
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+37061208887",
      "contactType": "customer service",
      "availableLanguage": ["English", "Lithuanian"],
      "areaServed": ["LT", "EU", "US"]
    }],
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning", 
      "Chatbot Development",
      "Business Process Automation",
      "Workflow Automation",
      "Natural Language Processing",
      "Conversational AI"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates", 
        "latitude": 54.6872,
        "longitude": 25.2797
      },
      "geoRadius": "200000"
    },
    "sameAs": [
      "https://linkedin.com/company/promptive-agency",
      "https://twitter.com/promptive_ai",
      "https://facebook.com/promptiveagency"
    ],
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Automation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'lt' ? "AI Chatbotai Verslui" : "AI Chatbots for Business",
            "description": locale === 'lt' 
              ? "Pažangūs AI chatbotai klientų aptarnavimui ir pardavimams"
              : "Advanced AI chatbots for customer service and sales automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'lt' ? "Verslo Procesų Automatizavimas" : "Business Process Automation",
            "description": locale === 'lt'
              ? "Automatizuojame verslo procesus su AI technologijomis"
              : "Automate business processes with AI technology"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'lt' ? "AI Konsultacijos" : "AI Consultation",
            "description": locale === 'lt'
              ? "Nemokamos AI strategijos konsultacijos verslui"
              : "Free AI strategy consultations for businesses"
          }
        }
      ]
    },
    "priceRange": "Free consultation",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer"
  });

  const getFAQSchema = (faqData: Array<{question: string, answer: string}>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  });

  const getBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  });

  const getSchema = () => {
    switch (type) {
      case 'service':
        if (page === 'chatbots') {
          return getChatbotServiceSchema();
        }
        return getServiceSchema((data as {name?: string})?.name || 'AI Service');
      case 'faq':
        return getFAQSchema((data as Array<{question: string, answer: string}>) || []);
      case 'breadcrumb':
        return getBreadcrumbSchema((data as Array<{name: string, url: string}>) || []);
      case 'organization':
      default:
        // Always include organization schema
        const schemas = [getOrganizationSchema()];
        
        // Add local business schema for Lithuanian locale
        if (locale === 'lt') {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          schemas.push(getLocalBusinessSchema() as any);
        }
        
        return schemas;
    }
  };

  const schema = getSchema();
  const schemaArray = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemaArray.map((schemaItem, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaItem, null, 2)
          }}
        />
      ))}
    </>
  );
}