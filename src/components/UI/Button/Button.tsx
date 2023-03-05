import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';
import cl from './Button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={classNames(cl.button, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
