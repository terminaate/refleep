import { cases } from './CasesSection.const';
import Case from './components/Case';
import cl from './CasesSection.module.scss';

const CasesSection = () => {
  return (
    <section className={cl.casesSection}>
      {cases.map((c, key) => (
        <Case {...c} key={key} />
      ))}
    </section>
  );
};

export default CasesSection;
