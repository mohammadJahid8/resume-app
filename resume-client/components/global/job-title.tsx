'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';

import { Label } from '@/components/ui/label';
import { useAppContext } from '@/lib/context';

const JobTitle = () => {
  const { formData, setFormData } = useAppContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className='pt-16 flex flex-col'>
      <h1 className='text-3xl font-bold pb-2'>
        What primary job title are you applying for?
      </h1>
      <p className='text-sm text-gray-500'>
        Let&apos;s tailor your new resume based on the jobs you&apos;ll be
        applying for.
      </p>

      <div className='rounded-2xl bg-white p-4 shadow md:p-8 mt-8'>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className=''>
            <Label htmlFor='jobTitle'>Job Title *</Label>
            <Input
              id='title'
              value={formData.title}
              className='w-full'
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>

          <Button
            type='submit'
            className='w-full sm:w-auto'
            href='/onboard/generate-resume'
          >
            Save and Continue
            <ChevronDown className='ml-2 h-4 w-4 rotate-[-90deg]' />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default JobTitle;
