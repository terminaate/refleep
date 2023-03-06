import Quality from '../Quality';
import cl from './ExperienceQuality.module.scss';

const ExperienceQuality = () => {
  return (
    <Quality
      className={cl.experienceQuality}
      containerClassName={cl.container}
      titleClassName={cl.title}
      descriptionClassName={cl.description}
      title={'Experience'}
      description={
        <>
          <span>Refleep</span>
          is dozens of projects, meaningful awards, and a decade worth of
          experience.
        </>
      }
    />
  );
};

export default ExperienceQuality;
