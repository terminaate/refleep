import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import cl from './Title.module.scss';

const Title: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => (
  <h1 className={classNames(cl.title, className)} {...props}>
    {children}
  </h1>
);

export default Title;