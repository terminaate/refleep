import { FC, VideoHTMLAttributes } from 'react';
import classNames from 'classnames';
import cl from './CaseVideo.module.scss';

type CaseVideoProps = Omit<
  VideoHTMLAttributes<HTMLVideoElement>,
  'autoPlay' | 'loop' | 'muted' | 'playsInline' | 'controls'
>;

const CaseVideo: FC<CaseVideoProps> = ({ children, className, ...props }) => {
  return (
    <video
      autoPlay={true}
      loop={true}
      muted={true}
      playsInline={true}
      controls={false}
      className={classNames(cl.caseVideo, className)}
      {...props}
    >
      {children}
    </video>
  );
};

export default CaseVideo;
