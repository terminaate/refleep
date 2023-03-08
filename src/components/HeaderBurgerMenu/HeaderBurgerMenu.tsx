import { Dispatch, FC, SetStateAction } from 'react';
import cl from './HeaderBurgerMenu.module.scss';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import downArrowIcon from '$/down-arrow.svg';
import darkLogoImg from '$/dark-logo.svg';
import useQuerySelector from '@/hooks/useQuerySelector';
import Button from '@/components/UI/Button';
import telegramIcon from '$/telegram.svg';
import whatsappIcon from '$/whatsapp.svg';
import instagramIcon from '$/instagram.svg';

interface IHeaderBurgerMenu {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const HeaderBurgerMenu: FC<IHeaderBurgerMenu> = ({ visible, setVisible }) => {
  const [mounted, modalsNode] = useQuerySelector('#modals');
  const closeMenu = () => {
    setVisible(false);
  };

  return mounted && modalsNode
    ? createPortal(
        <div data-visible={visible} className={cl.screen}>
          <div onClick={closeMenu} className={cl.container}>
            <Image className={cl.logo} src={darkLogoImg} alt={'refleep'} />
            <div className={cl.linksContainer}>
              <a href="">CASE STUDIES</a>
              <a href="#whatwedo">What we do</a>
              <a href="#whyus">WHY US</a>
            </div>
            <Button className={cl.requestDesignButton}>
              Request a design...
            </Button>
            <div className={cl.socialLinksContainer}>
              <a href="">
                <Image src={telegramIcon} alt={'telegram'} />
              </a>
              <a href="">
                <Image src={whatsappIcon} alt={'whatsapp'} />
              </a>
              <a href="">
                <Image src={instagramIcon} alt={'instagram'} />
              </a>
            </div>
          </div>
          <button onClick={closeMenu} className={cl.closeButton}>
            <Image src={downArrowIcon} alt={'close'} />
          </button>
        </div>,
        modalsNode,
      )
    : null;
};

export default HeaderBurgerMenu;
