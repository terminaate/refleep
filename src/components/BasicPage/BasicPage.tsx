import { FC, HTMLAttributes } from 'react';
import cl from './BasicPage.module.scss';
import classNames from 'classnames';

type BasicPageProps = HTMLAttributes<HTMLDivElement>;
const BasicPage: FC<BasicPageProps> = ({className, children, ...props}) => {
  return (
    <div className={classNames(cl.basicPage, className)}>
      {children}
    </div>
  );
};

export default BasicPage;