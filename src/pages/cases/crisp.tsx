import BasicCasePage from '@/components/BasicCasePage';
import Image from 'next/image';

const Crisp = () => {
  return (
    <BasicCasePage
      image={'https://refleep.netlify.app/crisp_hero-img.png'}
      title={
        'New brand strategy, visual identity and website for the famous Vue.js framework.'
      }
      secondaryTitle={'NuxtJS —'}
    >
      <BasicCasePage.ClientText
        content={
          'Crisp is on a mission to enhance how companies and customers interact.' +
          'It’s an all-in-one multi-channel messaging service that centralizes' +
          'conversations into one inbox so you can provide the best customer' +
          'service with ease. Built by a small team in Nantes, France in 2015' +
          'today it’s used by over 200,000 brands from all over the world. With' +
          'advanced features like live translation, personalized messaging,' +
          'contextual contact insights, and guided videos it’s accessible to both' +
          'large companies, and solo business owners.'
        }
      />
      <BasicCasePage.ChallengeText
        content={
          'Crisp is on a mission to enhance how companies and customers interact.' +
          'It’s an all-in-one multi-channel messaging service that centralizes' +
          'conversations into one inbox so you can provide the best customer' +
          'service with ease. Built by a small team in Nantes, France in 2015' +
          'today it’s used by over 200,000 brands from all over the world. With' +
          'advanced features like live translation, personalized messaging,' +
          'contextual contact insights, and guided videos it’s accessible to both' +
          'large companies, and solo business owners.'
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
            solutions to ensure the new version was compatible with both iOS and
            Android platforms. We collaborated heavily with the Crisp team to
            ensure the new design would resonate with its worldwide audience.
            This involved focusing heavily on spacing, typography and colour
            systems for improved user experience which also maximised function.
          </p>
          <p>
            To ensure the mobile app experience was intuitive for existing users
            of the desktop app, we implemented the same features in the new
            environment. We achieved this by redesigning and restructuring
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
    </BasicCasePage>
  );
};

export default Crisp;
