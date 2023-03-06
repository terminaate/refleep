import cl from './QualitySection.module.scss';
import ValueQuality from './components/ValueQuality';
import RespectQuality
  from './components/RespectQuality';

const QualitySection = () => {
  return (
    <section className={cl.qualitySection}>
      <h2 className={cl.title}>Why us?</h2>
      <div className={cl.qualitiesContainer}>
        <div className={cl.topQualitiesContainer}>
          <ValueQuality />
          <RespectQuality/>
        </div>
        <div className={cl.bottomQualitiesContainer}></div>
      </div>
    </section>
  );
};

export default QualitySection;
