import BasicCasePage from '@/components/BasicCasePage';
import Image from 'next/image';
import Head from 'next/head';
import cl from '#/CrispCase.module.scss';
import Project from '@/components/Project';
import { projects } from '@/data/projects';
import Separator from '@/components/Separator';

const immoProject = projects.find((o) => o.title === 'IMMO')!;

const Crisp = () => {
  return (
    <>
      <Head>
        <link rel={'shortcut icon'} href={'/favicon.svg'} />
        <meta
          name={'title'}
          content={
            'Refleep Studio | Crisp — B2P interactions rebuilt | Case Study'
          }
        />
        <meta
          name={'description'}
          content={
            'We accompanied the visuals with a comprehensive native-based module system...'
          }
        />
        <title>
          Refleep Studio | Crisp — B2P interactions rebuilt | Case Study
        </title>
      </Head>
      <BasicCasePage
        image={'https://refleep.netlify.app/crisp_hero-img.png'}
        title={
          'New brand strategy, visual identity and website for the famous Vue.js framework.'
        }
        secondaryTitle={'NuxtJS —'}
      >
        <BasicCasePage.ClientText>
          <p>
            Crisp is on a mission to enhance how companies and customers
            interact. It’s an all-in-one multi-channel messaging service that
            centralizes conversations into one inbox so you can provide the best
            customer service with ease.
          </p>
          <p>
            Built by a small team in Nantes, France in 2015 today it’s used by
            over 200,000 brands from all over the world. With advanced features
            like live translation, personalized messaging, contextual contact
            insights, and guided videos it’s accessible to both large companies,
            and solo business owners.
          </p>
        </BasicCasePage.ClientText>
        <BasicCasePage.ChallengeText
          content={
            'Crisp’s desktop version is considered one of the best messaging apps on the market. Founders Baptiste and Valerian felt that the company was yet to match this accolade on mobile — so Refleep Agency came onboard to help.\n' +
            'As a people-first digital agency we understood Crisp’s position on the market. We needed to make sure that the visuals and messaging experience on their iOS and Android applications resonate with its worldwide user base.\n'
          }
        />
        <BasicCasePage.SolutionText
          content={
            'Our plan to upgrade the existing applications was to create a new' +
            'visual language that represents Crisp as a modern and pioneering' +
            'messaging app. We accompanied the visuals with a comprehensive' +
            'native-based module system.'
          }
        />
        <BasicCasePage.StaticContainer>
          <BasicCasePage.CaseVideo
            src={'https://refleep.netlify.app/crisp_video01.mp4'}
          />
          <div>
            <Image
              src={'https://refleep.netlify.app/crisp_img01.webp'}
              alt={''}
              fill={true}
            />
            <Image
              src={'https://refleep.netlify.app/crisp_img02.webp'}
              alt={''}
              fill={true}
            />
          </div>
          <div>
            <Image
              src={'https://refleep.netlify.app/crisp_img03.webp'}
              alt={''}
              fill={true}
            />
            <Image
              src={'https://refleep.netlify.app/crisp_img04.webp'}
              alt={''}
              fill={true}
            />
          </div>
          <div>
            <Image
              src={'https://refleep.netlify.app/crisp_img05.webp'}
              alt={''}
              fill={true}
            />
            <Image
              src={'https://refleep.netlify.app/crisp_img06.webp'}
              alt={''}
              fill={true}
            />
          </div>
          <BasicCasePage.CaseVideo
            src={'https://refleep.netlify.app/crisp_video02.mp4'}
          />
        </BasicCasePage.StaticContainer>
        <BasicCasePage.TextContainer padding={false} afterLine={false}>
          <BasicCasePage.TextContainer.Title>
            New mobile experience.
          </BasicCasePage.TextContainer.Title>
          <BasicCasePage.TextContainer.Description>
            <p>
              We overhauled the existing mobile app with both native and custom
              solutions to ensure the new version was compatible with both iOS
              and Android platforms. We collaborated heavily with the Crisp team
              to ensure the new design would resonate with its worldwide
              audience. This involved focusing heavily on spacing, typography
              and colour systems for improved user experience which also
              maximised function.
            </p>
            <p>
              To ensure the mobile app experience was intuitive for existing
              users of the desktop app, we implemented the same features in the
              new environment. We achieved this by redesigning and restructuring
              everything from live chat, to real-time video calls, customisable
              chat boxes, to multilingual support and live translation.
            </p>
          </BasicCasePage.TextContainer.Description>
        </BasicCasePage.TextContainer>
        <BasicCasePage.StaticContainer>
          <Image
            src={'https://refleep.netlify.app/crisp_img07.webp'}
            alt={''}
            fill={true}
          />
          <div>
            <Image
              src={'https://refleep.netlify.app/crisp_img08.webp'}
              alt={''}
              fill={true}
            />
            <Image
              src={'https://refleep.netlify.app/crisp_img09.webp'}
              alt={''}
              fill={true}
            />
          </div>
          <div>
            <Image
              src={'https://refleep.netlify.app/crisp_img10.webp'}
              alt={''}
              fill={true}
            />
            <Image
              src={'https://refleep.netlify.app/crisp_img11.webp'}
              alt={''}
              fill={true}
            />
          </div>
          <div>
            <Image
              src={'https://refleep.netlify.app/crisp_img12.webp'}
              alt={''}
              fill={true}
            />
            <Image
              src={'https://refleep.netlify.app/crisp_img13.webp'}
              alt={''}
              fill={true}
            />
          </div>
          <div>
            <Image
              src={'https://refleep.netlify.app/crisp_img14.webp'}
              alt={''}
              fill={true}
            />
            <Image
              src={'https://refleep.netlify.app/crisp_img15.webp'}
              alt={''}
              fill={true}
            />
          </div>
          <Image
            src={'https://refleep.netlify.app/crisp_img16.webp'}
            alt={''}
            fill={true}
          />
        </BasicCasePage.StaticContainer>
        <BasicCasePage.AuthorContainer
          secondaryTitle={'4 — Successful projects completed in 2 years with'}
          description={
            '“We have enjoyed working with Refleep for years now. We’ve worked together on redesigning our complete product offering, including mobile apps, chat widget, helpdesk, and web app. Our collaboration has been effortless as they can provide excellent solutions with minimal direction and feedback, almost like having an internal team, as they have a great understanding of what we’re trying to build here at Crisp.”'
          }
          avatar={'https://refleep.netlify.app/crisp_avatar.webp'}
          authorName={'Baptiste Jamin'}
          authorJobTitle={'— Founder and CEO at Crisp'}
        />
        <BasicCasePage.ResultsText
          content={
            'Using a very agile and collaborative process we successfully delivered the new visual language and mobile experience within 6 weeks of starting the project. We look forward to seeing how our shared vision of the new Crisp messaging platform will help connect companies and customers worldwide.'
          }
        />
        <BasicCasePage.LinksContainer>
          <BasicCasePage.LinksContainer.Link href={'#'}>
            Crisp iOS
          </BasicCasePage.LinksContainer.Link>
          <BasicCasePage.LinksContainer.Link href={'#'}>
            Crisp Android
          </BasicCasePage.LinksContainer.Link>
        </BasicCasePage.LinksContainer>
        <div className={cl.skillsAppliedContainer}>
          <h3 className={cl.skillsAppliedTitle}>Skills applied</h3>
          <ul className={cl.experienceContainer}>
            <h4 className={cl.experienceTitle}>User Experience Design</h4>
            <ul className={cl.experienceList}>
              <li>UI Design</li>
              <li>Design system</li>
              <li>Illustrations</li>
              <li>Animations</li>
            </ul>
          </ul>
        </div>
        <Project className={cl.project} absoluteWidth={true} {...immoProject} />
      </BasicCasePage>
    </>
  );
};

export default Crisp;
