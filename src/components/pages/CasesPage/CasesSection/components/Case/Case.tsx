import { FC } from 'react';
import cl from './Case.module.scss';
import { ICase } from '@/components/pages/CasesPage/CasesSection/CasesSection.const';
import { useRouter } from 'next/navigation';

const Case: FC<ICase> = ({ image, title, description, link }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(link)}
      style={{ backgroundImage: `url(${image})` }}
      className={cl.caseContainer}
    >
      <div className={cl.contentContainer}>
        <h3 className={cl.title}>{title}</h3>
        <span className={cl.description}>{description}</span>
      </div>
    </div>
  );
};

export default Case;
