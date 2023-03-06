import cl from './ProjectsSection.module.scss';
import Project from './components/Project';
import { projects } from './ProjectsSection.const';
import Separator from '@/components/Separator';
import Button from '@/components/UI/Button';

const ProjectsSection = () => {
  return (
    <section className={cl.projectsSection}>
      {projects.map((projectData, key) => (
        <Project {...projectData} key={key} />
      ))}
      <Button className={cl.casesButton} background={false}>
        See case studies
      </Button>
      <Separator side={'left'} />
    </section>
  );
};

export default ProjectsSection;
