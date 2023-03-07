export interface ISub {
  name: string;
  src: string;
  type: 'image' | 'video';
}

export interface ICategory {
  name: string;
  src: string;
  subs: ISub[];
}

export const categories: ICategory[] = [
  {
    name: 'Brand Strategy',
    src: 'https://refleep.netlify.app/brand_strategy.mp4',
    subs: [
      {
        name: 'Brand Strategy',
        src: 'https://refleep.netlify.app/brand_strategy.jpg',
        type: 'image',
      },
      {
        name: 'Brand Architecture',
        src: 'https://refleep.netlify.app/Brand_Architecture.png',
        type: 'image',
      },
      {
        name: 'Digital Strategy',
        src: 'https://refleep.netlify.app/digital_strategy.png',
        type: 'image',
      },
    ],
  },
  {
    name: 'Digital Design',
    src: 'https://refleep.netlify.app/2068325937.mp4',
    subs: [
      {
        name: 'Webpage Design',
        src: 'https://refleep.netlify.app/Webpage_Design.png',
        type: 'image',
      },
      {
        name: 'Websites',
        src: 'https://refleep.netlify.app/websites.jpg',
        type: 'image',
      },
      {
        name: 'Mobile Apps',
        src: 'https://refleep.netlify.app/mobile_apps.jpg',
        type: 'image',
      },
      {
        name: 'Wireframes',
        src: 'https://refleep.netlify.app/wireframes.jpg',
        type: 'image',
      },
      {
        name: 'Feature Concepts',
        src: 'https://refleep.netlify.app/feature_concept.jpg',
        type: 'image',
      },
      {
        name: 'MVP',
        src: 'https://refleep.netlify.app/MVP.mp4',
        type: 'video',
      },
    ],
  },
  {
    name: 'Branding',
    src: 'https://refleep.netlify.app/branding.mp4',
    subs: [
      {
        name: 'Logos',
        src: 'https://refleep.netlify.app/logo.jpg',
        type: 'image',
      },
      {
        name: 'Icons',
        src: 'https://refleep.netlify.app/icons.jpg',
        type: 'image',
      },
      {
        name: 'Brand Guides',
        src: 'https://refleep.netlify.app/brand_guides.jpg',
        type: 'image',
      },
    ],
  },
  {
    name: 'Presentations',
    src: 'https://refleep.netlify.app/presentations.mp4',
    subs: [
      {
        name: 'Pitch Decks',
        src: 'https://refleep.netlify.app/pitch_decks.jpg',
        type: 'image',
      },
      {
        name: 'Slide Decks',
        src: 'https://refleep.netlify.app/slide_decks.jpg',
        type: 'image',
      },
    ],
  },
  {
    name: 'marketing',
    src: 'https://refleep.netlify.app/marketing.mp4',
    subs: [
      {
        name: 'Digital Ads',
        src: 'https://refleep.netlify.app/digital_ads.jpg',
        type: 'image',
      },
      {
        name: 'Social Media Graphics',
        src: 'https://refleep.netlify.app/social_media_graphics.jpg',
        type: 'image',
      },
      {
        name: 'Email Graphics',
        src: 'https://refleep.netlify.app/Email_graphics.jpg',
        type: 'image',
      },
    ],
  },
  {
    name: 'Identity',
    src: 'https://refleep.netlify.app/identity.mp4',
    subs: [
      {
        name: 'Visual Identity',
        src: 'https://refleep.netlify.app/visual_identity.jpg',
        type: 'image',
      },
      {
        name: 'Verbal Identity',
        src: 'https://refleep.netlify.app/verbal_identity.jpg',
        type: 'image',
      },
      {
        name: 'Motion Identity',
        src: 'https://refleep.netlify.app/motion_identity.mp4',
        type: 'video',
      },
      {
        name: 'Sonic Identity',
        src: 'https://refleep.netlify.app/sonic_identity.mp4',
        type: 'video',
      },
      {
        name: 'Naming',
        src: 'https://refleep.netlify.app/naming.jpg',
        type: 'image',
      },
    ],
  },
];
