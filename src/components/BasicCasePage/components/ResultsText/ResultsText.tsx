import { FC, ReactNode } from 'react';
import cl from './ResultsText.module.scss';
import TextContainer from '../TextContainer';

interface IResultsText {
  content?: string;
  children?: ReactNode;
  margin?: boolean;
}

const ResultsText: FC<IResultsText> = ({
  children,
  content,
  margin = true,
}) => {
  return (
    <TextContainer
      padding={false}
      afterLine={false}
      data-margin={margin}
      className={cl.resultsTextContainer}
    >
      <TextContainer.Title className={cl.resultsTitle}>
        The results
      </TextContainer.Title>
      <TextContainer.Description>
        {content ?? children}
      </TextContainer.Description>
    </TextContainer>
  );
};

export default ResultsText;
