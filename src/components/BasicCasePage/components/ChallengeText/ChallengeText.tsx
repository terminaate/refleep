import { FC, ReactNode } from 'react';
import cl from './ChallengeText.module.scss';
import TextContainer from '../TextContainer';

interface IChallengeText {
  content?: string;
  children?: ReactNode;
}

const ChallengeText: FC<IChallengeText> = ({ content, children }) => (
  <TextContainer className={cl.challengeContainer}>
    <TextContainer.Title className={cl.challengeTitle}>
      The challenge
    </TextContainer.Title>
    <TextContainer.Description>{content ?? children}</TextContainer.Description>
  </TextContainer>
);

export default ChallengeText;
