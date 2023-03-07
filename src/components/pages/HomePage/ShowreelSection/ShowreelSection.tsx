import cl from './ShowreelSection.module.scss';
import Showreel from './components/Showreel';
import ShowreelSub from './components/ShowreelSub';
import { useState } from 'react';
import { categories, ICategory } from './components/Showreel/Showreel.const';

const ShowreelSection = () => {
  const [activeCategory, setActiveCategory] = useState<ICategory>(
    categories[0],
  );

  return (
    <section id={'whatwedo'} className={cl.showreelSection}>
      <Showreel
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ShowreelSub title={activeCategory.name} subs={activeCategory.subs} />
    </section>
  );
};

export default ShowreelSection;
