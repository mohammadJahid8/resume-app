import React from 'react';

import { Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Button } from '../ui/button';

interface Testimonial {
  title: string;
  description: string;
  img: string;
  name: string;
  position: string;
  rating: number;
}

const TestimonialCard = ({ data }: { data: Testimonial }) => {
  const getInitials = (name: string) => {
    const nameParts = name.split(' ');
    const firstInitial = nameParts[0]?.charAt(0).toUpperCase() || '';
    const lastInitial =
      nameParts[nameParts.length - 1]?.charAt(0).toUpperCase() || '';
    return `${firstInitial}${lastInitial}`;
  };

  return (
    <Card
      className='w-full min-h-[300px] cursor-grab bg-transparent border border-gray-400'
      style={{
        userSelect: 'none',
      }}
    >
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-5'>
        <Quote className='h-8 w-8 text-[#5ea184] rotate-180 fill-[#5ea184]' />
      </CardHeader>
      <CardContent>
        <h2 className={cn('text-2xl font-medium mb-2 text-white')}>
          {data.title}
        </h2>
        <p className='text-muted-foreground overflow-hidden text-white'>
          <span className='line-clamp-2'>{data.description}</span>
        </p>
      </CardContent>
      <CardFooter className='flex sm:flex-row flex-col gap-4 items-start sm:justify-between sm:items-center pb-6'>
        <div className=''>
          <p className={cn('font-medium text-xl text-white')}>- {data.name}</p>
          <p className='text-sm text-gray-300 font-medium pt-1'>
            {data.position}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
