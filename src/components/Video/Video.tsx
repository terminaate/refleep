import { FC, useEffect, VideoHTMLAttributes } from 'react';
import cl from './Video.module.scss';
import Image from 'next/image';
import fullscreenIcon from '$/fullscreen.svg';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import classNames from 'classnames';

interface IVideo extends VideoHTMLAttributes<HTMLVideoElement> {
  title: string;
  fullscreen?: boolean;
  containerClassName?: string;
}

const Video: FC<IVideo> = ({
  title,
  fullscreen = true,
  containerClassName,
  className,
  src,
  ...props
}) => {
  const videoRef = useIntersectionObserver<HTMLVideoElement>((isVisible) => {
    if (isVisible) {
      videoRef.current?.play().catch(console.log);
    } else {
      videoRef.current?.pause();
    }
  });

  const onFullscreenButtonClick = async () => {
    await videoRef.current!.requestFullscreen();
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      videoRef.current!.muted = !document.fullscreenElement;
    };

    videoRef.current?.addEventListener('fullscreenchange', onFullscreenChange);

    return () => {
      videoRef.current?.removeEventListener(
        'fullscreenchange',
        onFullscreenChange,
      );
    };
  }, []);

  const onCanPlay = () => {
    videoRef.current?.play().catch(console.log);
  };

  return (
    <div className={classNames(cl.videoContainer, containerClassName)}>
      <div className={cl.titleContainer}>
        <h2 className={cl.title}>{title}</h2>
      </div>
      <video
        src={src}
        ref={videoRef}
        muted={true}
        loop={true}
        playsInline={true}
        controls={false}
        className={classNames(cl.video, className)}
        onCanPlay={onCanPlay}
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
