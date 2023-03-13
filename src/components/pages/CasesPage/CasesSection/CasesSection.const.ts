export interface ICase {
  image: string;
  title: string;
  description: string;
  link: string;
}

export const cases: ICase[] = [
  {
    title: 'CRISP',
    description:
      'Designing a new mobile experience for the all-in-one messaging platform',
    link: '/cases/crisp',
    image: 'https://refleep.netlify.app/div-4.png',
  },
  {
    title: 'IMMO',
    description:
      'Improving customer experience for next-gen real estate platform.',
    link: '/cases/immo',
    image: 'https://refleep.netlify.app/div.png',
  },
  {
    title: 'NUXTJS',
    description:
      'New brand strategy, visual identity and website for the famous Vue.js framework.',
    link: '/cases/nuxtjs',
    image: 'https://refleep.netlify.app/div-1.png',
  },
  {
    title: 'WONDE',
    description:
      'Transforming the global EdTech industry with a new brand strategy and website.',
    link: '/cases/wonde',
    image: 'https://refleep.netlify.app/div-2.png',
  },
  {
    title: 'GLOFOX',
    description:
      'Creating a dynamic and scalable design language to help power the future of fitness with Glofox.',
    link: '/cases/glofox',
    image: 'https://refleep.netlify.app/div-3.png',
  },
];
