import cl from './ShowreelSection.module.scss';
import ShowreelVideos from './components/ShowreelVideos';
import ShowreelImages from './components/ShowreelImages';

const ShowreelSection = () => {
  return (
    <section className={cl.showreelSection}>
      <ShowreelVideos />
      <ShowreelImages />
    </section>
  );
};

export default ShowreelSection;
