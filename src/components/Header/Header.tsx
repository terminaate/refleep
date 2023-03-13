import React, { FC, useState } from 'react';
import cl from './Header.module.scss';
import logoImg from '$/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import HeaderBurgerMenu from '@/components/HeaderBurgerMenu';

interface IHeader {
  absolute: boolean;
}

const Header: FC<IHeader> = ({ absolute = false }) => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <>
      <header data-absolute={absolute} className={cl.headerContainer}>
        <Link className={cl.homeLink} href="/">
          <Image src={logoImg} alt={'logo'} className={cl.logoImage} />
        </Link>
        <button onClick={() => setBurgerMenu(true)} className={cl.menuButton}>
          <span />
          <span />
          <span />
        </button>
        <nav className={cl.linksContainer}>
          <Link href={'/cases'}>Case studies</Link>
          <Link href={'/#whatwedo'}>What we do</Link>
          <Link href={'/#whyus'}>Why us</Link>
        </nav>
      </header>
      <HeaderBurgerMenu visible={burgerMenu} setVisible={setBurgerMenu} />
    </>
  );
};

export default Header;
