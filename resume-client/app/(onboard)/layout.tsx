'use client';
import OnboardNav from '@/components/global/onboard-nav';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import React from 'react';

const Layout = ({ children }: any) => {
  const pathname = usePathname();
  return (
    <div className='bg-gray-50 min-h-screen'>
      <OnboardNav />
      <div
        className={cn(
          'pt-16 px-4 sm:px-6 lg:px-8',
          pathname === '/onboard/generate-resume'
            ? 'max-w-screen-2xl mx-auto'
            : 'max-w-7xl mx-auto'
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
