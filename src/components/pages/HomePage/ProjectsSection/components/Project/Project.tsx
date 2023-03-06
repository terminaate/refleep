import { FC } from 'react';
import cl from "./Project.module.scss";

export interface IProject {
  type: string;
  title: string;
  description: string;
  image: string;
}

const Project: FC<IProject> = ({image, type, title, description}) => {
  return (
    <div className={cl.projectContainer}>
      <div className={cl.projectTitleContainer}>
        <span className={cl.projectType}>{type}</span>
        <h2 className={cl.projectTitle}>{title}</h2>
      </div>
      <img src={image} alt={title} className={cl.projectImage} />
      <pre className={cl.projectDescription}>{description}</pre>
    </div>
  );
};

export default Project;