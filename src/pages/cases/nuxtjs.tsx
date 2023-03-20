import Image from 'next/image';
import BasicCasePage from '@/components/BasicCasePage';
import { projects } from '@/data/projects';
import Project from '@/components/Project';
import cl from "#/NuxtjsCase.module.scss";

const crispProject = projects.find((o) => (o.title = 'CRISP'))!;

const Nuxtjs = () => {
  return (
    <BasicCasePage
      title={
        'New brand strategy, visual identity and website for the famous Vue.js framework.'
      }
      secondaryTitle={'NuxtJS —'}
      image={'https://refleep.netlify.app/nuxtjs-hero-desktop2.webp'}
    >
      <BasicCasePage.ClientText
        content={
          'NuxtJS is the company behind the Nuxt.js framework that helps developers build server-rendered Vue.js applications with ease. '
        }
      />
      <BasicCasePage.ChallengeText>
        <p>
          With a $2M seed round and the ever-growing community, it was time for
          NuxtJS to evolve and adapt. With so much attention on their framework,
          the brand had never before had the chance to apply the same care to
          their brand and website’s user experience.
        </p>
        <br />
        <p>
          The project’s main goal was to create a strong new identity without
          losing touch with the existing community and building a comprehensive
          experience for their website users. The primary purpose of the website
          is to increase the adoption and contribution of the NuxtJS framework.
        </p>
      </BasicCasePage.ChallengeText>
      <BasicCasePage.SolutionText>
        <p>
          To offer more depth and context to the NuxtJS identity, we defined a
          new brand strategy that references the Pyrenees mountains (since both
          NuxtJS founders hail from there) across all marketing materials,
          including illustrations, badges, and other graphical elements.
        </p>
        <br />
        <p>
          We conducted a holistic UX research process that informed gaps in
          marketing messaging and services which helped us identify
          opportunities and create insights on structuring the new website.
        </p>
        <br />
        <p>
          We’ve designed a completely new website that successfully expands upon
          what the NuxtJS team built for the past years and maintains the
          connection with its ever-growing community.
        </p>
        <br />
        <p>
          To wrap it all up, we’ve designed a basic design system covering all
          the main modules, components, and guidelines to help the NuxtJS team
          develop and launch the new website.
        </p>
      </BasicCasePage.SolutionText>
      <BasicCasePage.StaticContainer>
        <BasicCasePage.CaseVideo
          src={'https://refleep.netlify.app/nuxtjs0.mp4'}
        />
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
      <BasicCasePage.TextContainer afterLine={false} padding={false}>
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
      <BasicCasePage.StaticContainer>
        <Image
          fill={true}
          src={'https://refleep.netlify.app/nuxtjs_img12.webp'}
          alt={''}
        />
        <div>
          <Image
            src={'https://refleep.netlify.app/nuxtjs_img13.webp'}
            alt={''}
            fill={true}
          />
          <Image
            src={'https://refleep.netlify.app/nuxtjs_img14.webp'}
            alt={''}
            fill={true}
          />
        </div>
        <Image
          fill={true}
          src={'https://refleep.netlify.app/nuxtjs_img15.webp'}
          alt={''}
        />
        <Image
          fill={true}
          src={'https://refleep.netlify.app/nuxtjs_img16.webp.png'}
          alt={''}
        />
        <Image
          fill={true}
          src={'https://refleep.netlify.app/nuxtjs_img17.webp'}
          alt={''}
        />
        <Image
          fill={true}
          src={'https://refleep.netlify.app/nuxtjs_img18.webp'}
          alt={''}
        />
        <Image
          fill={true}
          src={'https://refleep.netlify.app/nuxtjs_img19.webp'}
          alt={''}
        />
      </BasicCasePage.StaticContainer>
      <BasicCasePage.TextContainer afterLine={false} padding={false}>
        <BasicCasePage.TextContainer.Title>
          UX research.
        </BasicCasePage.TextContainer.Title>
        <BasicCasePage.TextContainer.Description>
          <p>
            Based on the competitive benchmark, data analysis, and user
            activity, we concluded that users come to the website to understand
            the framework as a viable option for their project. We knew that our
            primary focus was to give users a simple way to access resources,
            docs, and installation guides.
          </p>
          <br />
          <p>
            As a secondary focus, we needed to instill a sense of community and
            trust in the product. We did that by “boasting” with clients,
            partners, mentions, testimonials, and additional social proofing.
            Creating a sense of a live, dynamic, and communal website was
            integral to attracting, growing, and educating the NuxtJS user base.
          </p>
        </BasicCasePage.TextContainer.Description>
      </BasicCasePage.TextContainer>
      <BasicCasePage.StaticContainer>
        <div>
          <Image
            src={'https://refleep.netlify.app/nuxtjs_img20.webp'}
            alt={''}
            fill={true}
          />
          <Image
            src={'https://refleep.netlify.app/nuxtjs_img21.webp'}
            alt={''}
            fill={true}
          />
        </div>
        <Image
          fill={true}
          src={'https://refleep.netlify.app/nuxtjs_img22.webp'}
          alt={''}
        />
        <Image
          fill={true}
          src={'https://refleep.netlify.app/nuxtjs_img23.webp'}
          alt={''}
        />
      </BasicCasePage.StaticContainer>
      <BasicCasePage.TextContainer afterLine={false} padding={false}>
        <BasicCasePage.TextContainer.Title>
          New website.
        </BasicCasePage.TextContainer.Title>
        <BasicCasePage.TextContainer.Description>
          <p>
            We’ve designed a completely new website that successfully expands
            upon what the NuxtJS team built for the past years and maintains the
            connection with its ever-growing community, including developers,
            students, freelancers, agencies, and companies.
          </p>
          <br />
          <p>
            The website includes comprehensive features like a learning center,
            resources, NuxtJS framework benefits, integrations, themes, project
            libraries, and a complete community segment with members, workshops,
            and profile management.
          </p>
        </BasicCasePage.TextContainer.Description>
      </BasicCasePage.TextContainer>
      <BasicCasePage.StaticContainer>
        <BasicCasePage.CaseVideo
          src={'https://refleep.netlify.app/nuxtjs1.mp4'}
        />
        <Image
          fill={true}
          src={'https://refleep.netlify.app/nuxtjs_img24.webp'}
          alt={''}
        />
        <Image
          fill={true}
          src={'https://refleep.netlify.app/nuxtjs_img25.webp'}
          alt={''}
        />
        <div>
          <Image
            src={'https://refleep.netlify.app/nuxtjs_img26.webp'}
            alt={''}
            fill={true}
          />
          <Image
            src={'https://refleep.netlify.app/nuxtjs_img27.webp'}
            alt={''}
            fill={true}
          />
        </div>
        <div>
          <Image
            src={'https://refleep.netlify.app/nuxtjs_img28.webp'}
            alt={''}
            fill={true}
          />
          <Image
            src={'https://refleep.netlify.app/nuxtjs_img29.webp'}
            alt={''}
            fill={true}
          />
        </div>
        <Image
          src={'https://refleep.netlify.app/nuxtjs_img30.webp'}
          alt={''}
          fill={true}
        />
        <BasicCasePage.CaseVideo
          src={'https://refleep.netlify.app/nuxtjs2.mp4'}
        />
        <div>
          <Image
            src={'https://refleep.netlify.app/nuxtjs_img31.png'}
            alt={''}
            fill={true}
          />
          <Image
            src={'https://refleep.netlify.app/nuxtjs_img32.png'}
            alt={''}
            fill={true}
          />
        </div>
        <Image
          src={'https://refleep.netlify.app/nuxtjs_img33.png'}
          alt={''}
          fill={true}
        />
        <Image
          src={'https://refleep.netlify.app/nuxtjs_img34.png'}
          alt={''}
          fill={true}
        />
      </BasicCasePage.StaticContainer>
      <BasicCasePage.ResultsText margin={false}>
        <p>
          We successfully designed and delivered the new brand and website with
          supporting documentation, including visual identity guidelines, UX
          research, and a web design system for ease of use and implementation.
        </p>
        <br />
        <p>
          The Nuxt team decided to take their brand in a different direction and
          launched a revised brand and website environment almost 18 months
          after our initial engagement. Nevertheless, we’re incredibly proud of
          our work and wish all the best to Alex and Sébastien in their journey.
        </p>
      </BasicCasePage.ResultsText>
      <BasicCasePage.SkillsAppliedContainer/>
      <Project className={cl.project} absoluteWidth={true} {...crispProject} />
    </BasicCasePage>
  );
};

export default Nuxtjs;
