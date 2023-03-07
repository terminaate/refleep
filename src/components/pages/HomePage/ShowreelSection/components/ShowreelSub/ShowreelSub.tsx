import Button from '@/components/UI/Button';
import cl from './ShowreelSub.module.scss';
import { FC, useEffect, useState } from 'react';
import WindowImage from '@/components/WindowImage';
import { ISub } from '../Showreel/Showreel.const';
import Video from '@/components/Video';

interface IShowreelSub {
  subs: ISub[];
  title: string;
}

const ShowreelSub: FC<IShowreelSub> = ({ subs, title }) => {
  const [activeSub, setActiveSub] = useState<ISub>(subs[0]);

  useEffect(() => {
    setActiveSub(subs[0]);
  }, [subs]);

  return (
    <div className={cl.subsContainer}>
      {activeSub.type === 'video' ? (
        <Video fullscreen={false} title={'video'} src={activeSub.src} />
      ) : (
        <WindowImage title={'img'} src={activeSub.src} />
      )}
      <div className={cl.rightSideContainer}>
        <h2 className={cl.title}>{title}</h2>
        <div className={cl.buttonsContainer}>
          {subs.map((sub, key) => (
            <Button
              onClick={() => setActiveSub(sub)}
              key={key}
              background={activeSub.name === sub.name}
            >
              {`${activeSub.name === sub.name ? '• ' : ''} ${sub.name}`}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowreelSub;
