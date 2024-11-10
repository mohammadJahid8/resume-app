import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

const faqItems = [
  {
    question: 'What services does your agency offer?',
    answer:
      'We offer a wide range of services including website design, custom web development, e-commerce solutions, CMS development, SEO optimization, and website maintenance.',
  },
  {
    question: 'How much does a website cost?',
    answer:
      'The cost of a website varies depending on the complexity, features, and specific requirements. We offer customized quotes based on your needs.',
  },
  {
    question: 'What is your web development process?',
    answer:
      'Our process includes requirement analysis, design, development, testing, and deployment. We work closely with clients at every stage to ensure the final product meets their expectations.',
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'The timeline for building a website depends on the scope and complexity of the project. A typical website can take anywhere from 4 to 12 weeks to complete.',
  },
  {
    question: 'Do you provide support?',
    answer:
      'Yes, we offer ongoing support and maintenance services to ensure your website remains up-to-date, secure, and functioning optimally.',
  },
  {
    question: 'Can you help with website redesign or updates?',
    answer:
      'Absolutely! We can help with redesigning your existing website or making updates to improve its functionality, aesthetics, or performance.',
  },
];

const FaqAccordion = () => {
  return (
    <div className='flex-1 w-full'>
      <Accordion
        type='single'
        collapsible
        className='w-full flex flex-col gap-4'
      >
        {faqItems.map((item, i) => (
          <AccordionItem key={i} value={`${i + 1}`} className='border-none'>
            <AccordionTrigger
              className={cn(
                'text-base sm:text-xl bg-[#eff3f2] border border-[#dde6e3] px-5 py-3 sm:py-3.5 rounded-md'
              )}
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent className='text-[15px] sm:text-[17px] text-muted-foreground bg-accent p-5 rounded-md leading-[28px] mt-2 bg-[#eff3f2]'>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
