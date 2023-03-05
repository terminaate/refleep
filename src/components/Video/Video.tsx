import { FC, useRef, VideoHTMLAttributes } from 'react';
import cl from './Video.module.scss';
import Image from 'next/image';
import fullscreenIcon from '$/fullscreen.svg';

interface IVideo extends VideoHTMLAttributes<HTMLVideoElement> {
  title: string;
  fullscreen?: boolean;
}

const Video: FC<IVideo> = ({
  title,
  fullscreen = true,
  className,
  ...props
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const onFullscreenButtonClick = () => {
    videoRef.current?.requestFullscreen();
  };

  return (
    <div className={cl.videoContainer}>
      <div className={cl.titleContainer}>
        <h2 className={cl.title}>{title}</h2>
      </div>
      <video
        ref={videoRef}
        loop={true}
        controls={false}
        className={cl.video}
        {...props}
      />
      {fullscreen && (
        <button
          onClick={onFullscreenButtonClick}
          className={cl.fullScreenButton}
        >
          <Image src={fullscreenIcon} alt={'fullscreen'} />
        </button>
      )}
    </div>
  );
};

export default Video;
