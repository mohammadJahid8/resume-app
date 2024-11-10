import React from 'react';

const Resources = () => {
  return (
    <div className='relative bg-gray-50 px-4 pb-20 pt-16 sm:px-6 lg:pb-28 lg:pt-24'>
      <div className='relative mx-auto max-w-7xl'>
        <div className='flex flex-col items-center md:flex-row md:justify-between lg:mb-16'>
          <h2 className='mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl md:mb-0'>
            Recently published resources
          </h2>
          <a
            className='flex items-center text-base font-semibold text-green-600 hover:text-green-700'
            href='/resources/'
          >
            View All Resources
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='ml-2 h-5 w-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
              />
            </svg>
          </a>
        </div>
        <div className='mx-auto mt-12 grid max-w-lg gap-4 sm:gap-6 lg:max-w-none lg:grid-cols-3'>
          <a
            className='block h-full min-h-[280px] overflow-hidden rounded-xl border border-gray-200 text-green-50 hover:opacity-90'
            style={{
              backgroundImage:
                'url(https://eb-app-prod-media.s3.amazonaws.com/blog/hero/Demysify_AI_-_Lori_Graphic.jpg)',
              backgroundSize: 'cover',
            }}
            href='/blog/demystifying-ai-in-the-job-search-and-hiring-process-transcript-of-live-event/'
          >
            <div className='h-full w-full rounded-xl bg-gray-800 bg-opacity-60 p-5'>
              <div className='flex h-full flex-1 flex-col justify-end'>
                <div className='flex flex-wrap gap-2'>
                  <div className='line-clamp-1 w-fit rounded-xl bg-green-100 px-2 py-0.5 text-sm text-green-600'>
                    Job Search Tips
                  </div>
                </div>
                <div className='my-3 font-serif text-3xl'>
                  Demystifying AI in the Job Search and Hiring Process -
                  Transcript of Live Event
                </div>
                <div>
                  <u>Learn More</u>
                </div>
              </div>
            </div>
          </a>
          <a
            className='block h-full min-h-[280px] overflow-hidden rounded-xl border border-gray-200 text-green-50 hover:opacity-90'
            style={{
              backgroundImage:
                'url(https://eb-app-prod-media.s3.amazonaws.com/blog/hero/Tech_Recruiter_-_Bruce_Graphic.jpg)',
              backgroundSize: 'cover',
            }}
            href='/blog/behind-the-scenes-with-a-tech-recruiter-transcript-of-live-event/'
          >
            <div className='h-full w-full rounded-xl bg-gray-800 bg-opacity-60 p-5'>
              <div className='flex h-full flex-1 flex-col justify-end'>
                <div className='flex flex-wrap gap-2'>
                  <div className='line-clamp-1 w-fit rounded-xl bg-green-100 px-2 py-0.5 text-sm text-green-600'>
                    Job Search Tips
                  </div>
                </div>
                <div className='my-3 font-serif text-3xl'>
                  Behind the Scenes with a Tech Recruiter - Transcript of Live
                  Event
                </div>
                <div>
                  <u>Learn More</u>
                </div>
              </div>
            </div>
          </a>
          <a
            className='block h-full min-h-[280px] overflow-hidden rounded-xl border border-gray-200 text-green-50 hover:opacity-90'
            style={{
              backgroundImage:
                'url(https://eb-app-prod-media.s3.amazonaws.com/blog/hero/Krysta_-_Job_Search_Success.jpg)',
              backgroundSize: 'cover',
            }}
            href='/blog/success-story-how-krysta-landed-her-new-job/'
          >
            <div className='h-full w-full rounded-xl bg-gray-800 bg-opacity-60 p-5'>
              <div className='flex h-full flex-1 flex-col justify-end'>
                <div className='flex flex-wrap gap-2'>
                  <div className='line-clamp-1 w-fit rounded-xl bg-green-100 px-2 py-0.5 text-sm text-green-600'>
                    Job Search Tips
                  </div>
                </div>
                <div className='my-3 font-serif text-3xl'>
                  Success Story - How Krysta Landed her New Job
                </div>
                <div>
                  <u>Learn More</u>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resources;
