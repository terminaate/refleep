import BasicCasePage from '@/components/BasicCasePage';

const Crisp = () => {
  return (
    <BasicCasePage
      image={'https://refleep.netlify.app/crisp_hero-img.png'}
      title={
        'New brand strategy, visual identity and website for the famous Vue.js framework.'
      }
      secondaryTitle={'NuxtJS —'}
    >
      <BasicCasePage.TextContainer>
        <BasicCasePage.TextContainer.Title>
          The client
        </BasicCasePage.TextContainer.Title>
        <BasicCasePage.TextContainer.Description>
          Crisp is on a mission to enhance how companies and customers interact.
          It’s an all-in-one multi-channel messaging service that centralizes
          conversations into one inbox so you can provide the best customer
          service with ease. Built by a small team in Nantes, France in 2015
          today it’s used by over 200,000 brands from all over the world. With
          advanced features like live translation, personalized messaging,
          contextual contact insights, and guided videos it’s accessible to both
          large companies, and solo business owners.
        </BasicCasePage.TextContainer.Description>
      </BasicCasePage.TextContainer>
      <BasicCasePage.ChallengeText
        content={
          'Crisp is on a mission to enhance how companies and customers interact.\n' +
          'It’s an all-in-one multi-channel messaging service that centralizes\n' +
          'conversations into one inbox so you can provide the best customer\n' +
          'service with ease. Built by a small team in Nantes, France in 2015\n' +
          'today it’s used by over 200,000 brands from all over the world. With\n' +
          'advanced features like live translation, personalized messaging,\n' +
          'contextual contact insights, and guided videos it’s accessible to both\n' +
          'large companies, and solo business owners.'
        }
      />
      <BasicCasePage.SolutionText
        content={
          'Our plan to upgrade the existing applications was to create a new\n' +
          'visual language that represents Crisp as a modern and pioneering\n' +
          'messaging app. We accompanied the visuals with a comprehensive\n' +
          'native-based module system.'
        }
      />
      <BasicCasePage.StaticContainer>
        <video
          src={'https://refleep.netlify.app/crisp_video01.mp4'}
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          controls={false}
        />
      </BasicCasePage.StaticContainer>
    </BasicCasePage>
  );
};

export default Crisp;
