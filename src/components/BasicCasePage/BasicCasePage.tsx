import BasicPage, { IBasicPage } from '@/components/BasicPage';
import cl from './BasicCasePage.module.scss';
import { FCWithChildren } from '@/types/FCWithChildren';
import TextContainer from './components/TextContainer';
import ChallengeText from './components/ChallengeText';
import SolutionText from './components/SolutionText';
import StaticContainer from './components/StaticContainer';
import CaseVideo from './components/CaseVideo';
import ClientText from './components/ClientText';

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
  StaticContainer: typeof StaticContainer;
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
BasicCasePage.StaticContainer = StaticContainer;
BasicCasePage.CaseVideo = CaseVideo;

export default BasicCasePage;
