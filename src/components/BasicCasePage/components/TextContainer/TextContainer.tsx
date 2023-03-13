import { HTMLAttributes } from 'react';
import cl from './TextContainer.module.scss';
import classNames from 'classnames';
import { FCWithChildren } from '@/types/FCWithChildren';
import Title from './components/Title';
import Description from './components/Description';

type TextContainerProps = HTMLAttributes<HTMLDivElement>;

interface ITextContainerChildren {
  Title: typeof Title;
  Description: typeof Description;
}

const TextContainer: FCWithChildren<
  TextContainerProps,
  ITextContainerChildren
> = ({ children, className, ...props }) => (
  <div className={classNames(cl.textContainer, className)} {...props}>
    {children}
  </div>
);

TextContainer.Description = Description;
TextContainer.Title = Title;

export default TextContainer;
