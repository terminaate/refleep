import cl from './ProjectsSection.module.scss';
import Project from '@/components/Project';
import { projects } from '@/data/projects';
import Separator from '@/components/Separator';
import Button from '@/components/UI/Button';

const threeProjects = projects.slice(0, 3);

const ProjectsSection = () => {
  return (
    <section className={cl.projectsSection}>
      {threeProjects.map((projectData, key) => (
        <>
          <Project {...projectData} key={key} />
          {key !== projects.length - 1 && (
            <Separator key={key} absolute={false} />
          )}
        </>
      ))}
      <Button className={cl.casesButton} background={false}>
        See case studies
      </Button>
      <Separator className={cl.separator} side={'left'} />
    </section>
  );
};

export default ProjectsSection;
