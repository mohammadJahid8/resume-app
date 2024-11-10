'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const OnboardNav = () => {
  const pathname = usePathname();
  const steps = [
    { name: 'Upload Resume', href: 'upload', key: 'upload' },
    {
      name: 'Confirm Details',
      href: 'confirm?confirmForm=true',
      key: 'confirm',
    },
    {
      name: 'Generate Resume',
      href: 'generate-resume',
      key: 'generate-resume',
    },
  ];

  return (
    <div className='fixed left-0 right-0 top-0 z-40 flex h-16 w-full flex-row items-center justify-between gap-y-4 px-4 py-3 shadow-sm bg-[#064d3b]'>
      <div className='flex flex-1 items-center'>
        <div className='pr-4'>
          <Link className='shrink-0 text-white' href='/'>
            EarnBetter
          </Link>
        </div>
      </div>
      <div className='flex flex-shrink-0 items-center justify-center'>
        <div className='flex gap-x-4 px-8'>
          {steps.map((step, index) => {
            const isActive = pathname.includes(step.key);
            return (
              <div
                key={index}
                className='flex items-center gap-x-1 whitespace-nowrap'
              >
                <Link
                  href={step.href}
                  className={`text-sm gap-x-1.5 flex items-center ${
                    isActive
                      ? 'rounded-full bg-[#065741] px-4 py-1.5 !text-white'
                      : '!text-gray-300'
                  }`}
                >
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-full ${
                      isActive ? 'bg-primary' : ''
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isActive ? 'bg-white' : 'bg-[#5e9f88]'
                      }`}
                    />
                  </span>
                  {step.name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className='flex flex-1 items-center justify-end' />
    </div>
  );
};

export default OnboardNav;
