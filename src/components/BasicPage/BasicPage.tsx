import { FC, HTMLAttributes } from 'react';
import cl from './BasicPage.module.scss';
import classNames from 'classnames';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export interface IBasicPage extends HTMLAttributes<HTMLDivElement> {
  header?: boolean;
  footer?: boolean;
  absoluteHeader?: boolean;
  absoluteFooter?: boolean;
  footerClassName?: string;
}

const BasicPage: FC<IBasicPage> = ({
  className,
  children,
  header = true,
  footer = true,
  absoluteHeader = false,
  absoluteFooter = false,
  footerClassName,
  ...props
}) => {
  return (
    <div className={classNames(cl.basicPage, className)} {...props}>
      {header && <Header absolute={absoluteHeader} />}
      {children}
      {footer && (
        <Footer className={footerClassName} absolute={absoluteFooter} />
      )}
    </div>
  );
};

export default BasicPage;
