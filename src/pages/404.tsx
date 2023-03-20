import BasicPage from '@/components/BasicPage';
import cl from '#/NotFound.module.scss';
import Image from 'next/image';
import leftArrowImg from '$/left-arrow.svg';
import rightArrowImg from '$/right-arrow.svg';
import lockImg from '$/lock.svg';
import reloadImg from '$/reload.svg';
import plusImg from '$/plus.svg';
import Button from '@/components/UI/Button';
import { useRouter } from 'next/navigation';

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <BasicPage
      className={cl.notFoundPage}
      footerClassName={cl.footer}
      absoluteHeader={true}
      absoluteFooter={true}
    >
      <div className={cl.container}>
        <div className={cl.headerContainer}>
          <div className={cl.arrowsContainer}>
            <div className={cl.arrowContainer}>
              <Image src={leftArrowImg} alt={''} />
            </div>
            <div className={cl.arrowContainer}>
              <Image src={rightArrowImg} alt={''} />
            </div>
          </div>
          <div className={cl.linkContainer}>
            <Image src={lockImg} alt={''} />
            <span>refleep.com</span>
            <Image src={reloadImg} alt={''} />
          </div>
          <Image src={plusImg} alt={''} />
        </div>
        <div className={cl.notFoundContainer}>
          <h1 className={cl.title}>404</h1>
          <span className={cl.description}>
            The page you&apos;re trying to reach is unavailable, but the website
            is still live and we&apos;re ready to work!
          </span>
          <Button onClick={() => router.push('/')} className={cl.homeButton}>
            Go to main
          </Button>
        </div>
      </div>
    </BasicPage>
  );
};

export default NotFoundPage;
