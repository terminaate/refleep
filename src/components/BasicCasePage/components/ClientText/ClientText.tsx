import { FC, ReactNode } from 'react';
import cl from './ClientText.module.scss';
import TextContainer from '../TextContainer';

interface IClientText {
  content?: string;
  children?: ReactNode;
}

const ClientText: FC<IClientText> = ({ content, children }) => (
  <TextContainer className={cl.clientContainer}>
    <TextContainer.Title className={cl.clientTitle}>
      The client
    </TextContainer.Title>
    <TextContainer.Description>{content ?? children}</TextContainer.Description>
  </TextContainer>
);

export default ClientText;
