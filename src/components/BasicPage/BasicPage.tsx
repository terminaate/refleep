import { FC, HTMLAttributes } from 'react';
import cl from './BasicPage.module.scss';
import classNames from 'classnames';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface IBasicPage extends HTMLAttributes<HTMLDivElement> {
  header?: boolean;
  footer?: boolean;
}

const BasicPage: FC<IBasicPage> = ({
  className,
  children,
  header = true,
  footer=true,
  ...props
}) => {
  return (
    <div className={classNames(cl.basicPage, className)} {...props}>
      {header && <Header />}
      {children}
      {footer && <Footer/>}
    </div>
  );
};

export default BasicPage;
