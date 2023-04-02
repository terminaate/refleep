import cl from './HomeSection.module.scss';
import Button from '@/components/UI/Button';
import Video from '@/components/Video';
import Image from 'next/image';
import awwwardsLogo from '$/awwwards.svg';
import reddotLogo from '$/reddot.svg';
import theWebbyAwardsLogo from '$/the-webby-awards.svg';
import fwaLogo from '$/fwa.svg';
import scrollImg from '$/scroll.svg';
import Separator from '@/components/Separator';
import useMediaQuery from '@/hooks/useMediaQuery';
import penIcon from '$/pen.svg';

const HomeSection = () => {
  const isMobile = useMediaQuery('(max-width: 800px)');

  return (
    <section className={cl.homeSection}>
      <div className={cl.container}>
        {isMobile && (
          <div className={cl.awardsContainer}>
            <Image src={awwwardsLogo} alt={'awwwards'} />
            <Image src={reddotLogo} alt={'reddot'} />
            <Image src={theWebbyAwardsLogo} alt={'the webby awards'} />
            <Image src={fwaLogo} alt={'fwa'} />
          </div>
        )}
        <div className={cl.leftSideContainer}>
          <h2 className={cl.title}>Watch Your Business Flourish</h2>
          <span className={cl.description}>
            Our design experts are here to help!
          </span>
          <Button
            onClick={() => window.location.replace('#footer')}
            className={cl.modalButton}
          >
            Let’s chat
          </Button>
        </div>
        <div className={cl.rightSideContainer}>
          <Video
            title={'Showreel'}
            autoPlay={true}
            src={'https://refleep.netlify.app/2068325937.mp4'}
          />
          <div className={cl.awardsContainer}>
            <Image src={awwwardsLogo} alt={'awwwards'} />
            <Image src={reddotLogo} alt={'reddot'} />
            <Image src={theWebbyAwardsLogo} alt={'the webby awards'} />
            <Image src={fwaLogo} alt={'fwa'} />
          </div>
        </div>
      </div>
      <Image src={scrollImg} alt={'scroll'} className={cl.scrollIcon} />
      <Button
        onClick={() => window.location.replace("#footer")}
        className={cl.requestDesignButton}
      >
        {isMobile ? (
          <Image src={penIcon} alt={'request design image'} />
        ) : (
          'Request a design...'
        )}
      </Button>
      <Separator />
    </section>
  );
};

export default HomeSection;
