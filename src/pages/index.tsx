import BasicPage from '@/components/BasicPage';
import cl from '#/Home.module.scss';
import Button from '@/components/UI/Button';

const Index = () => {
  return (
    <BasicPage>
      <section className={cl.homeSection}>
        <div className={cl.container}>
          <div className={cl.leftSideContainer}>
            <h2 className={cl.title}>Watch Your Business Flourish</h2>
            <span className={cl.description}>
              Our design experts are here to help!
            </span>
            <Button className={cl.modalButton}>Let’s chat</Button>
          </div>
        </div>
      </section>
      <div className={cl.line} />
    </BasicPage>
  );
};

export default Index;
