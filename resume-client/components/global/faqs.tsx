import React from 'react';
import FaqAccordion from './faq-accordion';

const Faqs = () => {
  return (
    <div className='bg-white'>
      <div className='relative mx-auto px-4 pb-16 sm:px-6 lg:max-w-5xl lg:pb-24'>
        <div className='container mx-auto'>
          <div className='pb-12 text-center'>
            <h2 className='to-green-500 -mb-1 bg-gradient-to-r from-gray-600 bg-clip-text pb-1 text-3xl font-bold tracking-tight text-gray-900 text-transparent'>
              Frequently Asked Questions
            </h2>
          </div>
          <FaqAccordion />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
