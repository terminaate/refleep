import { FC, ReactNode } from 'react';
import cl from './SolutionText.module.scss';
import TextContainer from '../TextContainer';

interface ISolutionText {
  content?: string;
  children?: ReactNode;
}

const SolutionText: FC<ISolutionText> = ({ content, children }) => (
  <TextContainer className={cl.solutionContainer}>
    <TextContainer.Title className={cl.solutionTitle}>
      The solution
    </TextContainer.Title>
    <TextContainer.Description>{content ?? children}</TextContainer.Description>
  </TextContainer>
);

export default SolutionText;
