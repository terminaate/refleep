import { FC } from 'react';
import cl from './ChallengeText.module.scss';
import TextContainer from '../TextContainer';

interface IChallengeText {
  content: string;
}

const ChallengeText: FC<IChallengeText> = ({ content }) => (
  <TextContainer className={cl.challengeContainer}>
    <TextContainer.Title className={cl.challengeTitle}>
      The challenge
    </TextContainer.Title>
    <TextContainer.Description>{content}</TextContainer.Description>
  </TextContainer>
);

export default ChallengeText;
