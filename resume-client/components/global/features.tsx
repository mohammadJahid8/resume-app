import Image from 'next/image';
import React from 'react';

const Features = () => {
  return (
    <div className='border-b border-gray-200 bg-gradient-to-b from-gray-50 pt-20'>
      <div className='mx-auto px-4 sm:px-6 lg:px-20'>
        <div className='mx-auto flex max-w-7xl flex-col gap-16'>
          <div className='flex flex-col-reverse items-center justify-between gap-8 lg:flex-row'>
            <div className='flex items-center justify-center'>
              <div className='-mb-1.5 max-w-[580px]'>
                <Image
                  src='/unlimited-docs.png'
                  alt='hero'
                  width={530}
                  height={530}
                />
              </div>
            </div>
            <div className='flex flex-col justify-center gap-4 pb-8 lg:w-5/12'>
              <div className='relative mx-auto flex h-[24px] w-[50px] items-center justify-center gap-[9px] rounded-[69px] bg-primary lg:mx-0'>
                <p className='text-center text-sm font-semibold leading-6 text-white'>
                  Free
                </p>
              </div>
              <h2 className='mx-auto -mb-1 max-w-3xl bg-gradient-to-r from-gray-600 to-green-500 bg-clip-text pb-1 text-left text-2xl font-bold tracking-normal text-gray-900 text-transparent sm:text-2xl lg:mx-0'>
                Unlimited Professional Docs
              </h2>
              <div className='flex flex-col'>
                <p className='mt-6 text-xl font-medium leading-8 tracking-tight text-gray-900'>
                  Professional resume
                </p>
                <p className='mt-2 text-base leading-7 text-gray-500'>
                  Upload your existing resume and our AI will rewrite and
                  reformat a professional version of your resume in seconds. You
                  can generate as many resumes as you need.
                </p>
              </div>
              <div className='flex flex-col'>
                <p className='mt-6 text-xl font-medium leading-8 tracking-tight text-gray-900'>
                  Cover letters
                </p>
                <p className='mt-2 text-base leading-7 text-gray-500'>
                  We&apos;ll use your resume and jobs you select to generate as
                  many cover letters as you need in your search.
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-between gap-16 lg:flex-row'>
            <div className='flex flex-col justify-center gap-4 lg:w-5/12'>
              <div className='relative mx-auto flex h-[24px] w-[50px] items-center justify-center gap-[9px] rounded-[69px] bg-primary lg:mx-0'>
                <p className='text-center text-sm font-semibold leading-6 text-white'>
                  Free
                </p>
              </div>
              <h2 className='float-start mx-auto -mb-1 max-w-3xl bg-gradient-to-r from-gray-600 to-green-500 bg-clip-text pb-1 text-left text-2xl font-bold tracking-normal text-gray-900 text-transparent sm:text-2xl lg:mx-0'>
                Unlimited Tailored Docs
              </h2>
              <div className='flex flex-col'>
                <p className='mt-2 text-center leading-7 text-gray-500 lg:text-left'>
                  With a single click you can create a tailored resume and cover
                  letter saving you countless hours in your search while
                  maximizing your chances!
                </p>
              </div>
            </div>
            <div className='flex items-center justify-center pb-8'>
              <div
                className=' visible transform-none opacity-100'
                style={{
                  transition: 'opacity 0.6s ease-out, transform 1.2s ease-out',
                  willChange: 'opacity, visibility',
                }}
              >
                <video
                  className='rounded-xl border border-gray-200 shadow-lg'
                  width={1100}
                  height={1100}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src='https://d8ogcl6x60h28.cloudfront.net/video/product-demo.mp4' />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
