import { FC } from 'react';
import cl from './AuthorContainer.module.scss';
import Image from 'next/image';

interface IAuthorContainer {
  avatar: string;
  authorName: string;
  authorJobTitle: string;
  description: string;
  secondaryTitle: string;
}

const AuthorContainer: FC<IAuthorContainer> = ({
  avatar,
  authorName,
  authorJobTitle,
  description,
  secondaryTitle,
}) => {
  return (
    <div className={cl.authorContainer}>
      <h4 className={cl.secondaryTitle}>{secondaryTitle}</h4>
      <span className={cl.description}>{description}</span>
      <div className={cl.avatarContainer}>
        <Image
          className={cl.authorAvatar}
          width={118}
          height={118}
          src={avatar}
          alt={'avatar'}
        />
        <div className={cl.avatarDataContainer}>
          <h4 className={cl.authorName}>{authorName}</h4>
          <h5 className={cl.authorJobTitle}>{authorJobTitle}</h5>
        </div>
      </div>
    </div>
  );
};

export default AuthorContainer;
