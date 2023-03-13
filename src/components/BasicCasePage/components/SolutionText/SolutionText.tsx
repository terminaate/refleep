import { FC } from 'react';
import cl from './SolutionText.module.scss';
import TextContainer from '../TextContainer';

interface ISolutionText {
content: string;
}

const SolutionText: FC<ISolutionText> = ({ content }) => (
  <TextContainer className={cl.solutionContainer}>
    <TextContainer.Title className={cl.solutionTitle}>
      The solution
    </TextContainer.Title>
    <TextContainer.Description>{content}</TextContainer.Description>
  </TextContainer>
);

export default SolutionText;
