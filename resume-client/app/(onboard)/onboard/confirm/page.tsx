'use client';
import ConfirmForm from '@/components/global/confirm-form';
import JobTitle from '@/components/global/job-title';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const OnboardConfirm = () => {
  const searchParams = useSearchParams();
  const confirmForm = Boolean(searchParams.get('confirmForm'));
  const jobTitle = Boolean(searchParams.get('jobTitle'));

  return (
    <div>
      {confirmForm && <ConfirmForm />}
      {jobTitle && <JobTitle />}
    </div>
  );
};

export default OnboardConfirm;
