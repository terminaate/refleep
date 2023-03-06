import cl from './StoryQuality.module.scss';
import Quality from '../Quality';

const StoryQuality = () => {
  return (
    <Quality
      className={cl.storyQuality}
      containerClassName={cl.container}
      titleClassName={cl.title}
      descriptionClassName={cl.description}
      title={'Story'}
      description={
        "Behind every business there's a person. Behind every person there's a story. We’ll tell your story to the world."
      }
    />
  );
};

export default StoryQuality;
