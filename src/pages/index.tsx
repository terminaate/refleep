import BasicPage from '@/components/BasicPage';
import HomeSection from '@/components/pages/HomePage/HomeSection';
import ProjectsSection from '@/components/pages/HomePage/ProjectsSection';
import ShowreelSection from '@/components/pages/HomePage/ShowreelSection';
import QualitySection from '@/components/pages/HomePage/QualitySection';

const Index = () => {
  return (
    <BasicPage>
      <HomeSection />
      <ProjectsSection />
      <ShowreelSection />
      <QualitySection />
    </BasicPage>
  );
};

export default Index;
