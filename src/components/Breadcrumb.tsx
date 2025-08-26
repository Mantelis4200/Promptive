'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import StructuredData from './StructuredData';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  currentPage: string;
}

export default function Breadcrumb({ items = [], currentPage }: BreadcrumbProps) {
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('breadcrumb');
  const locale = useLocale();
  const baseUrl = locale === 'lt' ? '/lt' : '/en';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li className="flex items-center">
                <span className="text-gray-600">Loading...</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    );
  }

  // Generate default breadcrumb items if none provided
  const defaultItems: BreadcrumbItem[] = [
    { name: t('home'), url: baseUrl || '/' },
    { name: t('services'), url: `${baseUrl}/services` },
  ];

  const breadcrumbItems = items.length > 0 ? items : defaultItems;
  
  // Add current page as final item
  const allItems = [
    ...breadcrumbItems,
    { name: currentPage, url: '' }
  ];

  // Prepare structured data for breadcrumbs
  const structuredDataItems = allItems
    .filter(item => item.url) // Exclude current page (empty url)
    .map(item => ({
      name: item.name,
      url: `https://promptive.agency${item.url}`
    }));

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <StructuredData type="breadcrumb" data={structuredDataItems} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            {allItems.map((item, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <svg 
                    className="w-4 h-4 text-gray-400 mx-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
                {item.url ? (
                  <a
                    href={item.url}
                    className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
                  >
                    {item.name}
                  </a>
                ) : (
                  <span className="text-gray-900 font-semibold" aria-current="page">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}