import { images, ImageType } from './ShowreelImages.const';
import Button from '@/components/UI/Button';
import cl from './ShowreelImages.module.scss';
import { useState } from 'react';
import WindowImage from '@/components/WindowImage';

const ShowreelImages = () => {
  const [activeImage, setActiveImage] = useState<ImageType>(images[0]);

  return (
    <div className={cl.imagesContainer}>
      <WindowImage title={'img'} src={activeImage.src} />
      <div className={cl.rightSideContainer}>
        <h2 className={cl.title}>{activeImage.name}</h2>
        <div className={cl.buttonsContainer}>
          {images.map((image, key) => (
            <Button
              onClick={() => setActiveImage(image)}
              key={key}
              background={activeImage.name === image.name}
            >
              {`${activeImage.name === image.name ? '• ' : ''} ${image.name}`}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowreelImages;
