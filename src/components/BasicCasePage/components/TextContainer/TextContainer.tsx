import { HTMLAttributes } from 'react';
import cl from './TextContainer.module.scss';
import classNames from 'classnames';
import { FCWithChildren } from '@/types/FCWithChildren';
import Title from './components/Title';
import Description from './components/Description';

interface ITextContainer extends HTMLAttributes<HTMLDivElement> {
  padding?: boolean;
  afterLine?: boolean;
}

interface ITextContainerChildren {
  Title: typeof Title;
  Description: typeof Description;
}

const TextContainer: FCWithChildren<
  ITextContainer,
  ITextContainerChildren
> = ({ children, className, padding=true, afterLine=true, ...props }) => (
  <div data-padding={padding} data-line={afterLine} className={classNames(cl.textContainer, className)} {...props}>
    {children}
  </div>
);

TextContainer.Description = Description;
TextContainer.Title = Title;

export default TextContainer;
