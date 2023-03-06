import { FC, useEffect, VideoHTMLAttributes } from 'react';
import cl from './Video.module.scss';
import Image from 'next/image';
import fullscreenIcon from '$/fullscreen.svg';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

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
  const videoRef = useIntersectionObserver<HTMLVideoElement>(
    (isVisible) => {
      if (isVisible) {
        void videoRef.current!.play();
      } else {
        videoRef.current!.pause();
      }
    },
  );

  const onFullscreenButtonClick = async () => {
    await videoRef.current!.requestFullscreen();
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      videoRef.current!.muted = !document.fullscreenElement;
    };

    videoRef.current!.addEventListener('fullscreenchange', onFullscreenChange);

    return () => {
      videoRef.current!.removeEventListener(
        'fullscreenchange',
        onFullscreenChange,
      );
    };
  }, []);

  return (
    <div className={cl.videoContainer}>
      <div className={cl.titleContainer}>
        <h2 className={cl.title}>{title}</h2>
      </div>
      <video
        ref={videoRef}
        muted={true}
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
