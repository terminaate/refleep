import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import cl from './Description.module.scss';

const Description: FC<HTMLAttributes<HTMLSpanElement>> = ({
  children,
  className,
  ...props
}) => (
  <span className={classNames(cl.description, className)} {...props}>
    {children}
  </span>
);

export default Description;