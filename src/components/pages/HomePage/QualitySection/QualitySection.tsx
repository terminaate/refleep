import cl from './QualitySection.module.scss';
import ValueQuality from './components/ValueQuality';
import RespectQuality from './components/RespectQuality';
import StoryQuality from './components/StoryQuality';
import ExperienceQuality from './components/ExperienceQuality';
import Button from '@/components/UI/Button';
import Separator from '@/components/Separator';
import useMediaQuery from '@/hooks/useMediaQuery';

const QualitySection = () => {
  const isMobile = useMediaQuery("(max-width: 800px)")

  return (
    <section id={'whyus'} className={cl.qualitySection}>
      <h2 className={cl.title}>Why us?</h2>
      <div className={cl.qualitiesContainer}>
        <ValueQuality />
        {isMobile && <Separator absolute={false} />}
        <RespectQuality />
        {isMobile && <Separator absolute={false} />}
        <StoryQuality />
        {isMobile && <Separator absolute={false} />}
        <ExperienceQuality />
      </div>
      <Button className={cl.startProjectButton}>Start a project</Button>
    </section>
  );
};

export default QualitySection;
