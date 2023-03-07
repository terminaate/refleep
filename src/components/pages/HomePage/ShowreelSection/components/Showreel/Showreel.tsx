import { Dispatch, FC, SetStateAction } from 'react';
import cl from './Showreel.module.scss';
import Image from 'next/image';
import logoImg from '$/logo.svg';
import { categories, ICategory } from './Showreel.const';
import Button from '@/components/UI/Button';
import Video from '@/components/Video';

interface IShowreel {
  activeCategory: ICategory;
  setActiveCategory: Dispatch<SetStateAction<ICategory>>;
}

const Showreel: FC<IShowreel> = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className={cl.videosContainer}>
      <div className={cl.leftSideContainer}>
        <h2 className={cl.title}>
          <Image
            className={cl.logo}
            src={logoImg}
            height={73}
            alt={'Refleep'}
          />
          <span>is your go-to creative partner for</span>
        </h2>
        <div className={cl.buttonsContainer}>
          {categories.map((category, key) => (
            <Button
              onClick={() => setActiveCategory(category)}
              key={key}
              background={activeCategory.name === category.name}
            >
              {`${activeCategory.name === category.name ? '• ' : ''} ${
                category.name
              }`}
            </Button>
          ))}
        </div>
      </div>
      <Video fullscreen={false} title={'Showreel'} src={activeCategory.src} />
    </div>
  );
};

export default Showreel;
