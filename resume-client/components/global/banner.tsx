import React from 'react';
import { Button } from '../ui/button';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className='border-b border-gray-200 bg-gradient-to-b from-gray-50'>
      <div className="mx-auto bg-[url('/hero-pattern.png')] bg-[length:1440px_604px] bg-top">
        <div className='relative mx-auto grid max-w-7xl grid-cols-1 overflow-hidden px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:py-20'>
          <div className='col-span-1 mt-4 flex flex-col lg:ml-12 lg:mt-0 lg:max-w-2xl'>
            <div className='w-full lg:pb-8 lg:text-left'>
              <div className='mx-auto mb-10 flex max-w-fit flex-row text-xs font-medium lg:mx-0 lg:mb-12 lg:w-auto lg:py-1 lg:text-sm' />
              <h1 className='-mb-1 bg-gradient-to-r from-[#313131] to-[#47856e] bg-clip-text pb-1 text-center text-3xl font-bold tracking-normal text-transparent sm:text-4xl md:text-[2.2rem] md:leading-tight lg:text-left'>
                Accelerate your job search with the best AI copilot. Always
                free.
              </h1>
              <p className='mx-auto mt-2 text-center text-base text-gray-500 sm:mt-6 sm:text-lg md:text-lg lg:text-left'>
                From your resume through your interviews, we&apos;ve got you
                covered. Upload your current resume to get started. 100% free.
              </p>
            </div>
            <div className='self-center lg:self-auto'>
              <div className='relative mx-auto mt-6'>
                <div className=' absolute top-0 w-full'>
                  <div className='sm:col-span-2'>
                    <div className='lg:justify-start justify-center md:flex md:space-x-6'>
                      <Button className='mt-3 inline-flex w-full items-center justify-center whitespace-nowrap rounded-lg border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm md:mt-0 md:w-auto'>
                        Take me to my account
                        <ArrowRightIcon className='w-4 h-4 ml-2' />
                      </Button>
                    </div>
                  </div>
                  <p className='lg:text-left mt-4 text-center text-xs text-gray-300 lg:mb-16'>
                    If you have not yet created an account,{/* */}{' '}
                    <button
                      type='button'
                      className='cursor-pointer text-green-600'
                    >
                      Click here to register
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='-mt-36 flex justify-center lg:relative lg:mt-0'>
            <div className='lg:-right-26 relative -bottom-40 pl-8 lg:-bottom-0 lg:my-auto lg:pl-24'>
              <div
                className=' visible transform-none opacity-100'
                style={{
                  transition: 'opacity 0.6s ease-out, transform 1.2s ease-out',
                  willChange: 'opacity, visibility',
                }}
              >
                <div className='-mb-1.5 max-w-[530px]'>
                  <Image
                    src='/home-hero2.png'
                    alt='hero'
                    width={530}
                    height={530}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
