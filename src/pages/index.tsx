import BasicPage from '@/components/BasicPage';
import cl from '#/Home.module.scss';
import Button from '@/components/UI/Button';
import HomeSection from '@/components/pages/HomePage/HomeSection';
import ProjectsSection from '@/components/pages/HomePage/ProjectsSection';

const Index = () => {
  return (
    <BasicPage>
      <HomeSection />
      <ProjectsSection/>
    </BasicPage>
  );
};

export default Index;
