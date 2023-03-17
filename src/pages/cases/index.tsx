import BasicPage from '@/components/BasicPage';
import cl from '#/Cases.module.scss';
import CasesSection from '@/components/pages/CasesPage/CasesSection';
import Head from 'next/head';

const Cases = () => {
  return (
    <>
      <Head>
        <link rel={'shortcut icon'} href={'/favicon.svg'} />
        <meta name={'title'} content={'Refleep Studio | Case Studies'} />
        <meta
          name={'description'}
          content={
            'Dive into our case studies and discover the brands that leave a lasting impression being born...'
          }
        />
        <title>Refleep Studio | Case Studies</title>
      </Head>
      <BasicPage>
        <CasesSection />
      </BasicPage>
    </>
  );
};

export default Cases;
