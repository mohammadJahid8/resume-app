import Image from 'next/image';
import React from 'react';

const ManageSearch = () => {
  return (
    <div className='border-b border-gray-200 bg-gradient-to-b from-gray-50 relative z-10'>
      <div className='mx-auto px-4 sm:px-6 lg:px-20'>
        <div className='mx-auto flex max-w-7xl flex-col gap-16'>
          <div className='flex flex-col-reverse items-center justify-between gap-6 pb-12 pt-12 lg:flex-row-reverse'>
            <div className='flex flex-col justify-center gap-4 pb-5 lg:w-5/12'>
              <div className='elative mx-auto flex h-[24px] w-[50px] items-center justify-center gap-[9px] rounded-[69px] bg-green-600 lg:mx-0'>
                <p className='text-center text-sm font-semibold leading-6 text-white'>
                  Free
                </p>
              </div>
              <h1 className='mx-auto -mb-1 max-w-3xl bg-gradient-to-r from-gray-600 to-green-500 bg-clip-text text-left text-3xl font-bold tracking-normal text-gray-900 text-transparent sm:text-3xl lg:mx-0'>
                Manage Your Search
              </h1>
              <p className='sm:text-md text-center text-base text-gray-700 lg:text-left'>
                The key to a stress free job search? Staying organized. Our AI
                tracker helps you visualize your search, recommends actions to
                take at each step, and is your all-in-one Job Search management
                platform.
              </p>
            </div>
            <div className='flex flex-col items-start lg:w-6/12'>
              <div>
                <div className='-mb-1.5 max-w-[676px]'>
                  <Image
                    src='/job-tracker.png'
                    alt='hero'
                    width={676}
                    height={676}
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

export default ManageSearch;
