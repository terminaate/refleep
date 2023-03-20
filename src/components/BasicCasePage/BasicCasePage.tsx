import BasicPage, { IBasicPage } from '@/components/BasicPage';
import cl from './BasicCasePage.module.scss';
import { FCWithChildren } from '@/types/FCWithChildren';
import TextContainer from './components/TextContainer';
import ChallengeText from './components/ChallengeText';
import SolutionText from './components/SolutionText';
import StaticContainer from './components/StaticContainer';
import CaseVideo from './components/CaseVideo';
import ClientText from './components/ClientText';
import AuthorContainer from './components/AuthorContainer';
import ResultsText from './components/ResultsText';
import LinksContainer from './components/LinksContainer';
import SkillsAppliedContainer from './components/SkillsAppliedContainer';

interface IBasicCasePage extends Omit<IBasicPage, 'absoluteHeader'> {
  image: string;
  title: string;
  secondaryTitle: string;
}

interface IBasicCasePageChildren {
  TextContainer: typeof TextContainer;
  ChallengeText: typeof ChallengeText;
  SolutionText: typeof SolutionText;
  ClientText: typeof ClientText;
  ResultsText: typeof ResultsText;
  StaticContainer: typeof StaticContainer;
  AuthorContainer: typeof AuthorContainer;
  LinksContainer: typeof LinksContainer;
  SkillsAppliedContainer: typeof SkillsAppliedContainer;
  CaseVideo: typeof CaseVideo;
}

const BasicCasePage: FCWithChildren<IBasicCasePage, IBasicCasePageChildren> = ({
  children,
  image,
  secondaryTitle,
  title,
  ...props
}) => (
  <BasicPage className={cl.casePage} absoluteHeader={true} {...props}>
    <header className={cl.caseHeader}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={title} className={cl.headerImage} />
      <div className={cl.headerContent}>
        <h3 className={cl.secondaryTitle}>{secondaryTitle}</h3>
        <h1 className={cl.title}>{title}</h1>
      </div>
    </header>
    <div className={cl.container}>{children}</div>
  </BasicPage>
);

BasicCasePage.TextContainer = TextContainer;
BasicCasePage.SolutionText = SolutionText;
BasicCasePage.ChallengeText = ChallengeText;
BasicCasePage.ClientText = ClientText;
BasicCasePage.ResultsText = ResultsText;
BasicCasePage.StaticContainer = StaticContainer;
BasicCasePage.AuthorContainer = AuthorContainer;
BasicCasePage.LinksContainer = LinksContainer;
BasicCasePage.SkillsAppliedContainer = SkillsAppliedContainer;
BasicCasePage.CaseVideo = CaseVideo;

export default BasicCasePage;
