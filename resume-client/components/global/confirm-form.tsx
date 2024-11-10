'use client';
import { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useAppContext } from '@/lib/context';

const ConfirmForm = () => {
  const { formData, setFormData } = useAppContext();
  const [errors, setErrors] = useState<Record<string, string>>({});

  console.log({ formData });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.state) {
      newErrors.state = 'State is required';
    }
    if (!formData.zip) {
      newErrors.zip = 'ZIP Code is required';
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid US phone number';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <div className='pt-16 flex flex-col'>
      <h1 className='text-3xl font-bold pb-2'>
        Hi, Jahid. Does everything look good?
      </h1>
      <p className='text-sm text-gray-500'>
        Double-check each field below to make sure we got your information
        correct.
      </p>

      <div className='flex w-full flex-col items-start rounded-2xl bg-white p-4 shadow md:p-8 mt-8'>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-2'>
              <Label htmlFor='firstName'>First Name *</Label>
              <Input
                id='firstName'
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                required
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='lastName'>Last Name *</Label>
              <Input
                id='lastName'
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                required
              />
            </div>
          </div>

          <div className='space-y-2'>
            <Label htmlFor='phone'>Phone *</Label>
            <div className='relative'>
              <Phone className='absolute left-3 top-2.5 h-5 w-5 text-muted-foreground' />
              <Input
                id='phone'
                className='pl-10'
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
              />
            </div>
            {errors.phone && (
              <p className='text-sm text-destructive'>{errors.phone}</p>
            )}
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-2'>
              <Label htmlFor='city'>City *</Label>
              <Input
                id='city'
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                required
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='state'>State *</Label>
              <Select
                value={formData.state}
                onValueChange={(value) => handleInputChange('state', value)}
              >
                <SelectTrigger id='state'>
                  <SelectValue placeholder='Select state' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='AL'>Alabama</SelectItem>
                  <SelectItem value='AK'>Alaska</SelectItem>
                  <SelectItem value='AZ'>Arizona</SelectItem>
                  {/* Add more states as needed */}
                </SelectContent>
              </Select>
              {errors.state && (
                <p className='text-sm text-destructive'>{errors.state}</p>
              )}
            </div>
          </div>

          <div className='space-y-2'>
            <Label htmlFor='zip'>ZIP Code *</Label>
            <Input
              id='zip'
              value={formData.zip}
              onChange={(e) => handleInputChange('zip', e.target.value)}
              required
            />
            {errors.zip && (
              <p className='text-sm text-destructive'>{errors.zip}</p>
            )}
          </div>

          <div className='flex items-start space-x-2'>
            <Checkbox
              id='smsAlerts'
              checked={formData.smsAlerts}
              onCheckedChange={(checked) =>
                handleInputChange('smsAlerts', Boolean(checked))
              }
            />
            <div className='grid gap-1.5 leading-none'>
              <label
                htmlFor='smsAlerts'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                Sign up for SMS alerts to stay on top of your search
              </label>
              <p className='text-sm text-muted-foreground'>
                By checking this box and pressing Save and Continue, you will
                sign up for text messages. I consent to receive recurring text
                messages relating to job opportunities using automated dialing
                systems, at the number I provided above. Consent is not required
                to apply to jobs. Message and data rates apply.
              </p>
            </div>
          </div>

          <Button
            href='/onboard/confirm?jobTitle=true'
            className='w-full sm:w-auto'
          >
            Save and Continue
            <ChevronDown className='ml-2 h-4 w-4 rotate-[-90deg]' />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmForm;
