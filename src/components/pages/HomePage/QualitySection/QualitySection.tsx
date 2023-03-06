import cl from './QualitySection.module.scss';
import ValueQuality from './components/ValueQuality';
import RespectQuality from './components/RespectQuality';
import StoryQuality from './components/StoryQuality';
import ExperienceQuality from './components/ExperienceQuality';

const QualitySection = () => {
  return (
    <section className={cl.qualitySection}>
      <h2 className={cl.title}>Why us?</h2>
      <div className={cl.qualitiesContainer}>
        {/*<div className={cl.topQualitiesContainer}>*/}
        <ValueQuality />
        <RespectQuality />
        {/*</div>*/}
        {/*<div className={cl.bottomQualitiesContainer}>*/}
        <StoryQuality />
        <ExperienceQuality />
        {/*</div>*/}
      </div>
    </section>
  );
};

export default QualitySection;
