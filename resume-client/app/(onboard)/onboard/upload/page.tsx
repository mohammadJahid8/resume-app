'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppContext } from '@/lib/context';
import api from '@/utils/axiosInstance';
import { ImagePlus, Loader2, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';

const OnboardUpload = () => {
  const { setFormData } = useAppContext();
  const [loading, setLoading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0] || null;
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        setLoading(true);

        const response = await api.post('/users/upload-resume', formData);
        const data = response?.data?.data;

        setFormData((prev: any) => ({
          ...prev,
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          phone: data.phone || '',
          city: data.city || data.location || data.address || '',
          state: data.state || data.country || '',
          zip: data.zip || '',
          email: data.email || '',
          title: data.title || '',
          smsAlerts: data.smsAlerts || false,
        }));
        router.push('/onboard/confirm?confirmForm=true');
      } catch (error) {
        console.error('Error uploading PDF:', error);
      } finally {
        setLoading(false);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
    }
  };

  const handleSkip = () => {
    router.push('/onboard/confirm?confirmForm=true');
  };

  return (
    <div className='text-center pt-16 flex flex-col items-center'>
      {loading && (
        <div className='fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50'>
          <Loader2 className='h-10 w-10 animate-spin text-white' />
        </div>
      )}
      <h1 className='text-3xl font-bold pb-2'>Upload your existing resume</h1>
      <p className='text-sm text-gray-500'>
        Regardless of what shape it&apos;s in, we&apos;ll take it to the next
        level!
      </p>

      <div className='flex w-full max-w-5xl flex-col items-start rounded-2xl bg-white p-4 shadow md:p-8 mt-8'>
        <div className='h-auto w-full'>
          <div className='grid grid-cols-1 gap-x-4 gap-y-6'>
            <div
              className='border-dashed border-gray-200 flex cursor-pointer justify-center rounded-xl border-2 px-6 py-6 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-700 hover:border-green-700'
              role='button'
              tabIndex={0}
              onClick={() => fileInputRef.current?.click()}
            >
              <div className='flex flex-col space-y-1 text-center'>
                <ImagePlus className='mx-auto h-12 w-12 text-gray-400' />
                <div className='flex flex-col text-sm text-gray-400'>
                  <label
                    htmlFor='file-upload'
                    className='pointer-events-none rounded-md font-medium text-primary'
                  >
                    Upload a file
                  </label>
                  <Input
                    id='file-upload'
                    name='file-upload'
                    accept='.pdf,.doc,.docx,.txt'
                    type='file'
                    className='z-1 absolute h-0.5 w-0.5 opacity-0'
                    // onChange={handleFileChange}
                    ref={fileInputRef} // Attach the ref here
                  />
                  <p className='pl-1'>or drag and drop PDF</p>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-4 flex flex-row justify-start md:mt-8'>
            <Button
              variant='special'
              href='/onboard/confirm?confirmForm=true'
              className='flex flex-row items-center cursor-pointer'
            >
              <div className='flex flex-row pb-0 pt-0 text-sm font-medium text-primary'>
                <X className='h-5 w-5 flex-shrink-0 text-primary' />
              </div>
              <span
                className='ml-1 text-sm font-semibold text-primary hover:text-green-700'
                onClick={handleSkip}
              >
                I don&apos;t have a resume
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardUpload;
