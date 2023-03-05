import { ButtonHTMLAttributes, forwardRef, RefObject } from 'react';
import classNames from 'classnames';
import cl from './Button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<unknown, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button ref={ref as RefObject<HTMLButtonElement>} className={classNames(cl.button, className)} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
