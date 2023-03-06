import { ButtonHTMLAttributes, forwardRef, RefObject } from 'react';
import classNames from 'classnames';
import cl from './Button.module.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  background?: boolean;
}

const Button = forwardRef<unknown, IButton>(
  ({ children, className, background = true, ...props }, ref) => {
    return (
      <button
        data-background={background}
        ref={ref as RefObject<HTMLButtonElement>}
        className={classNames(cl.button, className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
