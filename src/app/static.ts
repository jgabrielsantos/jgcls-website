import { imageList } from "@/utils/imageList";

export const Static = {
  TITLE: 'Hello There!',
  PARAGRAPHS: [
    'I\'m a Full Stack Developer with a passion for crafting seamless and efficient web applications. Specializing in Next.js, React, TypeScript, Node.js, Express, Prisma, PostgreSQL, and MongoDB, I blend modern front-end techniques with robust back-end solutions to create dynamic and responsive websites.',
    'Whether it\'s developing a brand-new site from scratch or optimizing an existing application, my goal is to deliver high-quality, efficient, and scalable solutions that meet and exceed your expectations.'
  ],
  SERVICES: {
    TITLE: 'Services',
    LIST: [
      {
        ICON: {
          SRC: imageList.WebDevelopmentIcon.src,
          ALT: imageList.WebDevelopmentIcon.alt
        },
        NAME: 'Web Development'
      },
      {
        ICON: {
          SRC: imageList.TechnicalPlanningIcon.src,
          ALT: imageList.TechnicalPlanningIcon.alt
        },
        NAME: 'Technical Planning'
      },
      {
        ICON: {
          SRC: imageList.BugAnalysisIcon.src,
          ALT: imageList.BugAnalysisIcon.alt
        },
        NAME: 'Bug Analysis'
      },
    ]
  },
  FEATURED_PROJECTS: {
    TITLE: 'Featured Projects',
    LIST: [
      {
        TITLE: 'Awesome-GCL',
        LINK: 'https://www.npmjs.com/package/awesome-gcl'
      },
      {
        TITLE: 'Fintel Connect',
        LINK: 'https://app.fintelconnect.com/'
      },
      {
        TITLE: 'cctech.io',
        LINK: 'https://cctech.io/'
      },
      {
        TITLE: 'giantleap.ai',
        LINK: 'https://www.giantleap.ai/'
      }
    ]
  },
  ONGOING_PROJECT: {
    TITLE: 'FinTrack',
    TECH: [
      'TypeScript',
      'Next.js',
      'Jest',
      'Tailwind',
      'Plaid',
      'Chart.js',
      'Express',
      'PostgreSQL',
      'Prisma',
      'AWS Cognito',
      'AWS RDS'
    ],
    INTRO: 'Managing my finances was a difficult task for me growing up because I could never keep track of the activities between my bank accounts. With that in mind, I\'m building a web platform to visualize all the important data that I need on my daily basis from my main bank institutions.',
    DESCRIPTION: 'This is possible through the Plaid APIs which guarantees me a stable and secure connection with the banks. Using Link, Balance and Transactions, I\'m able to see all that information from as many banks as I want in just one place, solving my issue of closing and opening as many bank apps as needed just to check my current scenario of investments and daily usage.'
  }
}
