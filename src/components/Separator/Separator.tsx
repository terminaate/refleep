import { FC, HTMLAttributes } from 'react';
import cl from './Separator.module.scss';
import classNames from 'classnames';

interface ISeparator extends HTMLAttributes<HTMLDivElement>{
  side?: "right" | "left";
  absolute?: boolean;
}

const Separator: FC<ISeparator> = ({side="right", absolute=true, className}) => {
  return (
    <div data-side={side} data-absolute={absolute} className={classNames(cl.separator, className)}/>
  );
};

export default Separator;