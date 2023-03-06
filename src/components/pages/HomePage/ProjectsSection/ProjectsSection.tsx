import cl from './ProjectsSection.module.scss';
import Project from './components/Project';
import {
  projects
} from './ProjectsSection.const';

const ProjectsSection = () => {
  return <section className={cl.projectsSection}>
    {projects.map((projectData, key) => (
      <Project {...projectData} key={key}/>
    ))}
  </section>;
};

export default ProjectsSection;