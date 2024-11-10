import AnyJob from '@/components/global/any-job';
import Banner from '@/components/global/banner';
import Faqs from '@/components/global/faqs';
import Features from '@/components/global/features';
import InterviewSupport from '@/components/global/interview-support';
import ManageSearch from '@/components/global/manage-search';
import Resources from '@/components/global/resources';
import Testimonials from '@/components/global/testimonials';

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <Features />
      <InterviewSupport />
      <ManageSearch />
      <AnyJob />
      <Faqs />
      <Testimonials />
      <Resources />
    </div>
  );
};

export default Home;
