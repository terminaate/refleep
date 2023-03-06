import cl from './RespectQuality.module.scss';
import Quality from '@/components/pages/HomePage/QualitySection/components/Quality';

const RespectQuality = () => {
  return (
    <Quality
      className={cl.respectQuality}
      containerClassName={cl.container}
      titleClassName={cl.title}
      descriptionClassName={cl.description}
      title={'RESPECT'}
      description={
        'Your time is valuable so is ours. We deliver reliably, on time.'
      }
    />
  );
};

export default RespectQuality;
