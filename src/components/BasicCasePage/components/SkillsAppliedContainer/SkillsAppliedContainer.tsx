import { FC, HTMLAttributes } from 'react';
import cl from './SkillsAppliedContainer.module.scss';
import classNames from 'classnames';

interface ICategory {
  title: string;
  list: string[];
}

interface ISkillsAppliedContainer extends HTMLAttributes<HTMLDivElement> {
  categories: ICategory[];
}

const SkillsAppliedContainer: FC<ISkillsAppliedContainer> = ({className, categories=[{title: "Branding", list: ["Visual strategy", "Brand guidelines"]}]}) => {

  return (
    <div className={classNames(cl.skillsAppliedContainer, className)}>
      <h3 className={cl.title}>Skills Applied</h3>
      <div className={cl.skillsListsContainer}>
        {/*{categories.map()}*/}
      </div>
      {/*{children}*/}
    </div>
  );
};

export default SkillsAppliedContainer;