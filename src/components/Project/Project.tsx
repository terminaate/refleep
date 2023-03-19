import { FC, HTMLAttributes } from 'react';
import cl from './Project.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import classNames from 'classnames';

export interface IProject extends HTMLAttributes<HTMLDivElement> {
  type: string;
  title: string;
  description: string;
  image: string;
  href: string;
  absoluteWidth?: boolean;
}

const Project: FC<IProject> = ({
  image,
  type,
  title,
  description,
  href,
  absoluteWidth = false,
  className,
  ...props
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(href)}
      data-absolute-width={absoluteWidth}
      className={classNames(cl.projectContainer, className)}
      {...props}
    >
      <div className={cl.projectTitleContainer}>
        <span className={cl.projectType}>{type}</span>
        <h2 className={cl.projectTitle}>{title}</h2>
      </div>
      <Image fill={true} src={image} alt={title} className={cl.projectImage} />
      <pre className={cl.projectDescription}>{description}</pre>
    </div>
  );
};

export default Project;
