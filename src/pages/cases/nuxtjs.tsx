import Image from 'next/image';
import BasicCasePage from '@/components/BasicCasePage';

const Nuxtjs = () => {
  return (
    <BasicCasePage title={'asd'} secondaryTitle={'asd'} image={'asd'}>
      <BasicCasePage.StaticContainer>
        <div>
          <Image
            src={'https://refleep.netlify.app/nuxtjs_img2.webp'}
            alt={''}
            fill={true}
          />
          <Image
            src={'https://refleep.netlify.app/nuxtjs_img3.webp'}
            alt={''}
            fill={true}
          />
        </div>
        <div>
          <Image
            src={'https://refleep.netlify.app/nuxtjs_img4.webp'}
            alt={''}
            fill={true}
          />
          <Image
            src={'https://refleep.netlify.app/nuxtjs_img5.webp'}
            alt={''}
            fill={true}
          />
        </div>
        <Image
          src={'https://refleep.netlify.app/nuxtjs_img6.webp'}
          alt={''}
          fill={true}
        />
        <div>
          <Image
            src={'https://refleep.netlify.app/nuxtjs_img7.webp'}
            alt={''}
            fill={true}
          />
          <Image
            src={'https://refleep.netlify.app/nuxtjs_img8.webp'}
            alt={''}
            fill={true}
          />
        </div>
        <div>
          <Image
            src={'https://refleep.netlify.app/nuxtjs_img9.webp'}
            alt={''}
            fill={true}
          />
          <Image
            src={'https://refleep.netlify.app/nuxtjs_img10.webp'}
            alt={''}
            fill={true}
          />
        </div>
        <Image
          src={'https://refleep.netlify.app/nuxtjs_img11.webp'}
          alt={''}
          fill={true}
        />
      </BasicCasePage.StaticContainer>
      <BasicCasePage.TextContainer>
        <BasicCasePage.TextContainer.Title>
          Brand strategy.
        </BasicCasePage.TextContainer.Title>
        <BasicCasePage.TextContainer.Description>
          <p>
            We defined a new brand strategy that references the Pyrenees
            mountains through a nature-inspired color palette and graphic
            elements referencing hiking maps.
          </p>
          <br />
          <p>
            This way, we emphasize the inquisitive nature of the development
            community and guide people on how to use NuxtJS to build their next
            application.
          </p>
        </BasicCasePage.TextContainer.Description>
      </BasicCasePage.TextContainer>
    </BasicCasePage>
  );
};

export default Nuxtjs;
