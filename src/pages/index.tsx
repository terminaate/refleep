import BasicPage from '@/components/BasicPage';
import cl from '#/Home.module.scss';
import Button from '@/components/UI/Button';
import HomeSection from '@/components/pages/HomePage/HomeSection';

const Index = () => {
  return (
    <BasicPage>
      <HomeSection/>
      <div className={cl.line} />
    </BasicPage>
  );
};

export default Index;
