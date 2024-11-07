import Banner from '@/components/global/banner';
import Features from '@/components/global/features';
import InterviewSupport from '@/components/global/interview-support';
import ManageSearch from '@/components/global/manage-search';

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <Features />
      <InterviewSupport />
      <ManageSearch />
    </div>
  );
};

export default Home;
