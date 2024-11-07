import Image from 'next/image';
import React from 'react';

const InterviewSupport = () => {
  return (
    <div className='border-b border-gray-200 bg-gradient-to-b from-purple-50 lg:pt-16'>
      <div className='mx-auto px-4 sm:px-6 lg:px-20'>
        <div className='mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 pt-16 lg:pt-4'>
          <div className='elative mx-auto flex h-[24px] w-[50px] items-center justify-center gap-[9px] rounded-[69px] bg-green-600 lg:mx-0'>
            <p className='text-center text-sm font-semibold leading-6 text-white'>
              Free
            </p>
          </div>
          <h1 className='mx-auto -mb-1 max-w-3xl bg-gradient-to-r from-gray-600 to-green-500 bg-clip-text text-center text-2xl font-bold tracking-normal text-gray-900 text-transparent lg:mx-0 lg:text-3xl'>
            State of the art interview support
          </h1>
          <p className='text-center text-base leading-7 text-gray-500'>
            Practice for an upcoming interview with unlimited AI mock interviews
            or get an interview cheat sheet for any job in seconds for free.
          </p>
        </div>
        <div className='mb-8 flex items-center justify-center pt-16'>
          <div>
            <div className='-mb-1.5 max-w-[1154px]'>
              <Image
                src='/mock-interview.png'
                alt='hero'
                width={1154}
                height={632}
              />
            </div>
          </div>
        </div>
        <div className='mx-auto flex max-w-7xl flex-col gap-16 pt-8'>
          <div className='flex flex-col-reverse items-center justify-between gap-16 lg:flex-row'>
            <div className='flex flex-col justify-center gap-4 pb-20 lg:w-5/12'>
              <div className='elative mx-auto flex h-[24px] w-[50px] items-center justify-center gap-[9px] rounded-[69px] bg-green-600 lg:mx-0'>
                <p className='text-center text-sm font-semibold leading-6 text-white'>
                  Free
                </p>
              </div>
              <h2 className='mx-auto -mb-1 max-w-3xl bg-gradient-to-r from-gray-600 to-green-500 bg-clip-text pb-1 text-left text-2xl font-bold tracking-normal text-gray-900 text-transparent sm:text-2xl lg:mx-0'>
                Interview Cheat Sheet
              </h2>
              <p className='text-center lg:text-left'>
                A cheat sheet to to give you confidence heading into any
                interview:
              </p>
              <div className='flex flex-col'>
                <p className='mt-6 font-bold leading-8 text-green-600'>
                  Company summary
                </p>
                <p className='text-base leading-7 text-gray-500'>
                  We&apos;ll pull public information about the company to save
                  you valuable research time and to make sure you know the
                  basics of their business.
                </p>
              </div>
              <div className='flex flex-col'>
                <p className='mt-2 font-bold leading-8 text-green-600'>
                  Common questions for each role
                </p>
                <p className='text-base leading-7 text-gray-500'>
                  Our cheat sheets highlight 5 of the most common interview
                  questions and suggestions for how you might consider answering
                  that question, tailored to this specific company and your
                  experience.
                </p>
              </div>
              <div className='flex flex-col'>
                <p className='mt-2 font-bold leading-8 text-green-600'>
                  Sample answers using AI
                </p>
                <p className='text-base leading-7 text-gray-500'>
                  Whether it is a remote interview or in-person, we&apos;ll have
                  the top tips for you to keep in mind to make sure you
                  don&apos;t sweat the small stuff, and as a bonus we&apos;ll
                  throw in some example questions to ask your interviewer at the
                  end of your interview!
                </p>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <div>
                <div className='-mb-1.5 max-w-[600px]'>
                  <Image
                    src='/interview-guide.png'
                    alt='hero'
                    width={600}
                    height={600}
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

export default InterviewSupport;
