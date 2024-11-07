'use client';
import { useAppContext } from '@/lib/context';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import Loading from '@/components/global/loading';

const Home: React.FC = () => {
  const { user, isLoading } = useAppContext();
  const [document, setDocument] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState<string>('');

  if (isLoading) {
    return <Loading />;
  }

  if (!user?.email) {
    return redirect('/login');
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Document:', document);
    console.log('Job Description:', jobDescription);
    toast.success('Document uploaded successfully', {
      position: 'top-center',
    });
  };

  return (
    <div className='min-h-[calc(100vh-142px)] flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-xl'>
        <h1 className='text-2xl font-semibold mb-6 text-center'>
          Upload Your Document
        </h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <Label htmlFor='document'>Resume/Cover Letter</Label>
            <Input
              id='document'
              type='file'
              accept='.pdf,.doc,.docx'
              onChange={(e) =>
                setDocument(e.target.files ? e.target.files[0] : null)
              }
              className='mt-1 block w-full'
              required
            />
          </div>
          <div>
            <Label htmlFor='jobDescription'>Job Description</Label>
            <Textarea
              id='jobDescription'
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              className='mt-1 block w-full'
              required
            />
          </div>
          <Button type='submit' className='w-full'>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Home;
