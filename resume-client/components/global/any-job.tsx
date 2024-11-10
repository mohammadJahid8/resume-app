import React from 'react';
import Image from 'next/image';
const AnyJob = () => {
  return (
    <div className='mb-16 border-b border-gray-100 bg-gradient-to-b from-blue-50 lg:pt-16'>
      <div className='mx-auto px-4 sm:px-6 lg:px-20'>
        <div className='mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 pt-16 lg:pt-8'>
          <div className='elative mx-auto flex h-[24px] w-[50px] items-center justify-center gap-[9px] rounded-[69px] bg-green-600 lg:mx-0'>
            <p className='text-center text-sm font-semibold leading-6 text-white'>
              Free
            </p>
          </div>
          <h1 className='mx-auto -mb-1 max-w-3xl bg-gradient-to-r from-gray-600 to-green-500 bg-clip-text text-center text-3xl font-bold tracking-normal text-gray-900 text-transparent sm:text-3xl lg:mx-0'>
            Any job. Anywhere. Bring it here.
          </h1>
          <p className='text-center leading-7 text-gray-500'>
            Find a specific job outside of EarnBetter? You can customize a
            resume and cover letter and access the full suite of EarnBetter AI
            features for any job you like!
          </p>
        </div>
        <div className='mb-8 flex items-center justify-center pt-16'>
          <div>
            <div className='-mb-1.5 max-w-[1114px]'>
              <Image
                src='/external-jobs.png'
                alt='any job'
                width={1114}
                height={1114}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnyJob;
