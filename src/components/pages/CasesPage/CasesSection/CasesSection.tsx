import { cases } from '@/components/pages/CasesPage/CasesSection/CasesSection.const';
import Case from '@/components/pages/CasesPage/CasesSection/components/Case';

const CasesSection = () => {
  return (
    <>
      {cases.map((c, key) => (
        <Case {...c} key={key} />
      ))}
    </>
  );
};

export default CasesSection;
