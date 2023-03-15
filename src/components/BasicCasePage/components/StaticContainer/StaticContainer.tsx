import { FC, HTMLAttributes } from 'react';
import cl from './StaticContainer.module.scss';
import classNames from 'classnames';

type StaticContainerProps = HTMLAttributes<HTMLDivElement>;

const StaticContainer: FC<StaticContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={classNames(cl.imagesContainer, className)} {...props}>
      {children}
    </div>
  );
};

export default StaticContainer;
