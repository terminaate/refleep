import BasicPage from '@/components/BasicPage';
import cl from '#/Home.module.scss';
import Button from '@/components/UI/Button';
import HomeSection from '@/components/pages/HomePage/HomeSection';
import ProjectsSection from '@/components/pages/HomePage/ProjectsSection';
import ShowreelSection from '@/components/pages/HomePage/ShowreelSection';

const Index = () => {
  return (
    <BasicPage>
      <HomeSection />
      <ProjectsSection />
      <ShowreelSection />
    </BasicPage>
  );
};

export default Index;
