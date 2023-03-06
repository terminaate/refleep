import cl from './VideosSection.module.scss';
import Video from '@/components/Video';
import Image from 'next/image';
import logoImg from '$/logo.svg';
import Button from '@/components/UI/Button';
import {
  IVideo,
  videos,
} from '@/components/pages/HomePage/VideosSection/VideosSection.const';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const VideosSection = () => {
  const [activeVideo, setActiveVideo] = useState<IVideo>(videos[0]);

  return (
    <section className={cl.videosSection}>
      <div className={cl.videoContainer}>
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
        <Video title={'Showreel'} src={activeVideo.video} />
      </div>
    </section>
  );
};

export default VideosSection;
