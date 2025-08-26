'use client';

import { useEffect, useState } from 'react';

interface HydrationWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function HydrationWrapper({ 
  children, 
  fallback = <div className="animate-pulse bg-gray-200 h-4 w-full rounded"></div> 
}: HydrationWrapperProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}