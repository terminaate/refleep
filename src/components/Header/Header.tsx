import React, { useState } from 'react';
import cl from './Header.module.scss';
import logoImg from '$/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import HeaderBurgerMenu from '@/components/HeaderBurgerMenu';

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <>
      <header className={cl.container}>
        <Image src={logoImg} alt={'logo'} className={cl.logoImage} />
        <button onClick={() => setBurgerMenu(true)} className={cl.menuButton}>
          <span />
          <span />
          <span />
        </button>
        <div className={cl.linksContainer}>
          <Link href={''}>Case studies</Link>
          <a href={'#whatwedo'}>What we do</a>
          <a href={'#whyus'}>Why us</a>
        </div>
      </header>
      <HeaderBurgerMenu visible={burgerMenu} setVisible={setBurgerMenu} />
    </>
  );
};

export default Header;
