'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  loading?: 'lazy' | 'eager';
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  fill = false,
  loading = 'lazy',
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Generate blur placeholder for images
  const generateBlurDataURL = (w: number, h: number) => {
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#f3f4f6'; // Gray-100
      ctx.fillRect(0, 0, w, h);
      return canvas.toDataURL();
    }
    return '';
  };

  // Fallback image handling
  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // Set a fallback image or placeholder
      setImgSrc('/images/placeholder.svg');
    }
  };

  // SEO-optimized alt text
  const optimizedAlt = alt || 'Promptive Agency - AI Automation Services';

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {fill ? (
        <Image
          src={imgSrc}
          alt={optimizedAlt}
          fill
          className="object-cover"
          sizes={sizes}
          priority={priority}
          loading={loading}
          quality={quality}
          placeholder={placeholder}
          blurDataURL={blurDataURL || (typeof window !== 'undefined' && width && height ? generateBlurDataURL(width, height) : undefined)}
          onError={handleError}
          {...props}
        />
      ) : (
        <Image
          src={imgSrc}
          alt={optimizedAlt}
          width={width}
          height={height}
          className={className}
          sizes={sizes}
          priority={priority}
          loading={loading}
          quality={quality}
          placeholder={placeholder}
          blurDataURL={blurDataURL || (typeof window !== 'undefined' && width && height ? generateBlurDataURL(width, height) : undefined)}
          onError={handleError}
          {...props}
        />
      )}
      
      {/* Loading skeleton for better UX */}
      {loading === 'lazy' && !priority && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" 
             style={{ display: hasError ? 'none' : 'block' }} />
      )}
    </div>
  );
}

// Utility function to get optimized image props
export const getImageProps = (src: string, alt: string, options?: Partial<OptimizedImageProps>) => ({
  src,
  alt: alt || 'Promptive Agency - AI Automation Services',
  quality: 85,
  loading: 'lazy' as const,
  sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  ...options,
});

// Pre-defined image configurations for different use cases
export const imageConfigs = {
  hero: {
    quality: 90,
    priority: true,
    loading: 'eager' as const,
    sizes: '(max-width: 768px) 100vw, 50vw'
  },
  widget: {
    quality: 85,
    loading: 'lazy' as const,
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
  },
  logo: {
    quality: 95,
    priority: true,
    loading: 'eager' as const,
    sizes: '200px'
  },
  thumbnail: {
    quality: 80,
    loading: 'lazy' as const,
    sizes: '(max-width: 768px) 50vw, 25vw'
  }
};

// Lithuanian-specific alt text generator
export const generateAltText = (baseAlt: string, locale: string = 'en') => {
  const suffixes = {
    en: ' - Promptive AI Automation Agency',
    lt: ' - Promptive AI Automatizavimo Agentūra'
  };
  
  return `${baseAlt}${suffixes[locale as keyof typeof suffixes] || suffixes.en}`;
};