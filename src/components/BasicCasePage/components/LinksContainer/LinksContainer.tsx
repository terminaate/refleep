import { FC, PropsWithChildren } from 'react';
import cl from './LinksContainer.module.scss';
import { FCWithChildren } from '@/types/FCWithChildren';
import Link from './components/Link';

interface ILinksContainerChildren {
  Link: typeof Link;
}

const LinksContainer: FCWithChildren<
  PropsWithChildren,
  ILinksContainerChildren
> = ({ children }) => {
  return <div className={cl.linksContainer}>{children}</div>;
};

LinksContainer.Link = Link;

export default LinksContainer;
