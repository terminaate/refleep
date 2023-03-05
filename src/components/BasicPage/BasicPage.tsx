import { FC, HTMLAttributes } from 'react';
import cl from './BasicPage.module.scss';
import classNames from 'classnames';
import Header from '@/components/Header';

interface IBasicPage extends HTMLAttributes<HTMLDivElement> {
  header?: boolean;
}

const BasicPage: FC<IBasicPage> = ({
  className,
  children,
  header = true,
  ...props
}) => {
  return (
    <div className={classNames(cl.basicPage, className)} {...props}>
      {header && <Header />}
      {children}
    </div>
  );
};

export default BasicPage;
