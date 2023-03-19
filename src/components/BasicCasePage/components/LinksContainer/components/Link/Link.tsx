import { AnchorHTMLAttributes, FC } from 'react';
import cl from './Link.module.scss';
import classNames from 'classnames';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const Link: FC<LinkProps> = ({ children, className, ...props }) => {
  return (
    <a className={classNames(cl.link, className)} {...props}>
      {children}
    </a>
  );
};

export default Link;
