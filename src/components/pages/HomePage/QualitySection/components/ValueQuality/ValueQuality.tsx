import Quality from '../Quality';
import cl from "./ValueQuality.module.scss";

const ValueQuality = () => {
  return (
    <Quality
      className={cl.valueQuality}
      title={'VALUE'}
      description={
        'We check up your business first and then let the design guys do the surgery.'
      }
    />
  );
};

export default ValueQuality;
