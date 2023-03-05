import React from 'react';
import cl from './Header.module.scss';
import logoImg from '$/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={cl.container}>
      <Image src={logoImg} alt={'logo'} className={cl.logoImage} />
      <div className={cl.linksContainer}>
        <Link href={''}>Case studies</Link>
        <Link href={''}>What we do</Link>
        <Link href={''}>Why us</Link>
      </div>
    </header>
  );
};

export default Header;
