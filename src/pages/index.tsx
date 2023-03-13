import BasicPage from '@/components/BasicPage';
import HomeSection from '@/components/pages/HomePage/HomeSection';
import ProjectsSection from '@/components/pages/HomePage/ProjectsSection';
import ShowreelSection from '@/components/pages/HomePage/ShowreelSection';
import QualitySection from '@/components/pages/HomePage/QualitySection';
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <link rel={'shortcut icon'} href={'/favicon.svg'} />
        <meta
          name={'title'}
          content={'Refleep Studio | Design for Business, Revolutionized'}
        />
        <meta
          name={'description'}
          content={
            'Making the best ideas astonishing while transforming your vision into reality with branding, identity, web design,...'
          }
        />
        <title>Refleep Studio | Design for Business, Revolutionized</title>
      </Head>
      <BasicPage>
        <HomeSection />
        <ProjectsSection />
        <ShowreelSection />
        <QualitySection />
      </BasicPage>
    </>
  );
};

export default Index;
