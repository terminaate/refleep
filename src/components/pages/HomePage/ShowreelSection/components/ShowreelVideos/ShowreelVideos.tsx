import { FC, useState } from 'react';
import cl from './ShowreelVideos.module.scss';
import Image from 'next/image';
import logoImg from '$/logo.svg';
import { IVideo, videos } from './ShowreelVideos.const';
import Button from '@/components/UI/Button';
import Video from '@/components/Video';
const ShowreelVideos = () => {
  const [activeVideo, setActiveVideo] = useState<IVideo>(videos[0]);

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
          {videos.map((video, key) => (
            <Button
              onClick={() => setActiveVideo(video)}
              key={key}
              background={activeVideo.name === video.name}
            >
              {`${activeVideo.name === video.name ? '• ' : ''} ${video.name}`}
            </Button>
          ))}
        </div>
      </div>
      <Video title={'Showreel'} src={activeVideo.src} />
    </div>
  );
};

export default ShowreelVideos;
