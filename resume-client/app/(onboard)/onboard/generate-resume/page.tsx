'use client';

import { useCallback, useState } from 'react';
import { ChevronDown, ChevronUp, Download, Eye, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import ResumeViewer from '@/components/global/resume-viewer';
import dynamic from 'next/dynamic';

const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);
import { useAppContext } from '@/lib/context';
import { Textarea } from '@/components/ui/textarea';
import { PDFDownloadLink, PDFDownloadLinkProps } from '@react-pdf/renderer';

export default function GenerateResume() {
  const { formData, setFormData } = useAppContext();

  const [openSections, setOpenSections] = useState({
    header: true,
    summary: false,
    experience: false,
    education: false,
    certifications: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev],
    }));
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-6'>
      {/* Left Panel - Form Sections */}
      <div className='space-y-4 h-[calc(100vh-128px)] overflow-auto'>
        <CollapsibleSection
          title='Header'
          section='header'
          openSections={openSections}
          toggleSection={toggleSection}
        >
          <HeaderSection
            formData={formData}
            setFormData={setFormData}
            openSections={openSections}
            toggleSection={toggleSection}
          />
        </CollapsibleSection>

        <CollapsibleSection
          title='Summary'
          section='summary'
          openSections={openSections}
          toggleSection={toggleSection}
          // rightElement={
          //   <Button variant='ghost' size='sm'>
          //     <Eye className='h-4 w-4 mr-2' />
          //     Visible
          //   </Button>
          // }
        >
          <SummarySection
            formData={formData}
            setFormData={setFormData}
            openSections={openSections}
            toggleSection={toggleSection}
          />
        </CollapsibleSection>

        <CollapsibleSection
          title='Skills'
          section='skills'
          openSections={openSections}
          toggleSection={toggleSection}
          // rightElement={
          //   <Button variant='ghost' size='sm'>
          //     <Plus className='h-4 w-4 mr-2' />
          //     Add Certification
          //   </Button>
          // }
        >
          <SkillsSection
            formData={formData}
            setFormData={setFormData}
            openSections={openSections}
            toggleSection={toggleSection}
          />
        </CollapsibleSection>

        <CollapsibleSection
          title='Work Experience'
          section='experience'
          openSections={openSections}
          toggleSection={toggleSection}
          // rightElement={
          //   <Button variant='ghost' size='sm'>
          //     <Plus className='h-4 w-4 mr-2' />
          //     Add Work Experience
          //   </Button>
          // }
        >
          <WorkExperienceSection
            formData={formData}
            setFormData={setFormData}
            openSections={openSections}
            toggleSection={toggleSection}
          />
        </CollapsibleSection>

        <CollapsibleSection
          title='Education'
          section='education'
          openSections={openSections}
          toggleSection={toggleSection}
          // rightElement={
          //   <Button variant='ghost' size='sm'>
          //     <Plus className='h-4 w-4 mr-2' />
          //     Add Education
          //   </Button>
          // }
        >
          <EducationSection
            formData={formData}
            setFormData={setFormData}
            openSections={openSections}
            toggleSection={toggleSection}
          />
        </CollapsibleSection>
      </div>

      {/* Right Panel - Preview */}
      <div className='h-full'>
        <PDFDownloadLink
          document={<ResumeViewer formData={formData} />}
          fileName='resume.pdf'
        >
          <div className='flex justify-end mb-2'>
            <Button variant='outline' size='sm'>
              <Download className='h-4 w-4 mr-2' /> Download
            </Button>
          </div>
        </PDFDownloadLink>
        <ResumePreview formData={formData} />
      </div>
    </div>
  );
}

const CollapsibleSection = ({
  title,
  section,
  children,
  rightElement,
  openSections,
  toggleSection,
}: any) => (
  <Collapsible
    open={openSections[section as keyof typeof openSections]}
    onOpenChange={() => toggleSection(section)}
    className='border mb-4 bg-white shadow-sm rounded-lg'
  >
    <CollapsibleTrigger asChild>
      <div className='flex items-center justify-between w-full p-4 text-left cursor-pointer'>
        <span className='text-xl font-semibold'>{title}</span>
        <div className='flex items-center'>
          {rightElement}
          {openSections[section as keyof typeof openSections] ? (
            <ChevronUp className='h-5 w-5 ml-2' />
          ) : (
            <ChevronDown className='h-5 w-5 ml-2' />
          )}
        </div>
      </div>
    </CollapsibleTrigger>
    <CollapsibleContent className='p-4 pt-0 border-t'>
      {children}
    </CollapsibleContent>
  </Collapsible>
);

const HeaderSection = ({ formData, setFormData }: any) => (
  <div className='space-y-4 p-2'>
    <div className='grid grid-cols-2 gap-4'>
      <div className='space-y-2'>
        <Label htmlFor='firstName'>First Name *</Label>
        <Input
          id='firstName'
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          required
        />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='lastName'>Last Name *</Label>
        <Input
          id='lastName'
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          required
        />
      </div>
    </div>
    <div className='grid grid-cols-2 gap-4'>
      <div className='space-y-2'>
        <Label htmlFor='email'>Email</Label>
        <Input
          id='email'
          type='email'
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='title'>Title</Label>
        <Input
          id='title'
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>
    </div>
    <div className='space-y-2'>
      <Label htmlFor='phone'>Phone</Label>
      <Input
        id='phone'
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
    </div>
    <div className='grid grid-cols-2 gap-4'>
      <div className='space-y-2'>
        <Label htmlFor='city'>City</Label>
        <Input
          id='city'
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='state'>State</Label>
        <Select
          value={formData.state}
          onValueChange={(value) => setFormData({ ...formData, state: value })}
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
      </div>
    </div>
    <div className='space-y-2'>
      <Label htmlFor='zip'>Zip</Label>
      <Input
        id='zip'
        value={formData.zip}
        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
        placeholder=''
      />
    </div>
  </div>
);

const SummarySection = ({ formData, setFormData }: any) => (
  <div className='space-y-2 p-2'>
    <Label htmlFor='summary'>Professional Summary</Label>
    <Textarea
      id='summary'
      className='w-full h-32 p-2 border rounded-md'
      value={formData.summary}
      onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
      placeholder='Write your professional summary...'
    />
  </div>
);

const WorkExperienceSection = ({ formData, setFormData }: any) => (
  <div className='space-y-2 p-2'>
    <Label htmlFor='workExperience'>Work Experience</Label>
    <Textarea
      id='workExperience'
      className='w-full h-32 p-2 border rounded-md'
      value={formData.workExperience}
      onChange={(e) =>
        setFormData({ ...formData, workExperience: e.target.value })
      }
      placeholder='Write your work experience...'
    />
  </div>
);

const EducationSection = ({ formData, setFormData }: any) => (
  <div className='space-y-2 p-2'>
    <Label htmlFor='education'>Education</Label>
    <Textarea
      id='education'
      className='w-full h-32 p-2 border rounded-md'
      value={formData.education}
      onChange={(e) => setFormData({ ...formData, education: e.target.value })}
      placeholder='Write your education...'
    />
  </div>
);

const SkillsSection = ({ formData, setFormData }: any) => (
  <div className='space-y-2 p-2'>
    <Label htmlFor='skills'>Skills</Label>
    <Textarea
      id='skills'
      className='w-full h-32 p-2 border rounded-md'
      value={formData.skills}
      onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
      placeholder='Write your skills...'
    />
  </div>
);

const ResumePreview = ({ formData }: any) => (
  <div className='border rounded-lg bg-white max-h-[calc(100vh-180px)] h-full overflow-auto'>
    <PDFViewer className='w-full h-full' showToolbar={false}>
      <ResumeViewer formData={formData} />
    </PDFViewer>
  </div>
);
