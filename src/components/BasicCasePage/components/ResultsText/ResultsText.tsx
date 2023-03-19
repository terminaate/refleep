import { FC, ReactNode } from 'react';
import cl from './ResultsText.module.scss';
import TextContainer from "../TextContainer";

interface IResultsText {
  content?: string;
  children?: ReactNode;
}

const ResultsText: FC<IResultsText> = ({children, content}) => {
  return (
    <TextContainer padding={false} afterLine={false} className={cl.resultsTextContainer}>
      <TextContainer.Title className={cl.resultsTitle}>The results</TextContainer.Title>
      <TextContainer.Description>{content ?? children}</TextContainer.Description>
    </TextContainer>
  );
};

export default ResultsText;