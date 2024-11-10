import React from 'react';
import {
  Carousel,
  CarouselButton,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { testimonialData } from '@/utils/constants';
import TestimonialCard from './testimonial-card';
const Testimonials = () => {
  return (
    <div className='bg-primary py-16'>
      <div className='mx-auto max-w-7xl'>
        <div className='text-center'>
          <h2 className='mb-12 text-3xl font-bold tracking-tight text-white sm:text-3xl lg:mb-16'>
            Trusted by job seekers
          </h2>
        </div>
        <Carousel>
          <CarouselContent>
            {testimonialData.map((data, i) => (
              <CarouselItem key={i} className='lg:basis-1/2 mb-14'>
                <TestimonialCard key={i} data={data} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className='flex gap-2 justify-center'>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
            <CarouselButton direction='prev' />
            <CarouselButton direction='next' />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
