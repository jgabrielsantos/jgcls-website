import { imageList } from "@/utils/imageList";

export const Static = {
  TITLE: 'Services',
  SERVICES: [
    {
      ICON: {
        SRC: imageList.WebDevelopmentIcon.src,
        ALT: imageList.WebDevelopmentIcon.alt
      },
      NAME: 'Web Development',
      INTRO: 'With over 3 years of experience as a Full Stack developer, I\'ve navigated a range of scenarios from enhancing small features in company products to resolving critical bugs for clients. My expertise lies in independently managing diverse projects.',
      DESCRIPTION: 'Let\'s bring your web platform idea to life! I specialize in everything from data structure planning to developing each page, ensuring the final website mirrors your exact design specifications, with pixel-perfect accuracy'
    },
    {
      ICON: {
        SRC: imageList.BugAnalysisIcon.src,
        ALT: imageList.BugAnalysisIcon.alt
      },
      NAME: 'Bug Analysis',
      INTRO: 'Numerous systems operate with undetected bugs.',
      DESCRIPTION: 'If you\'re seeking a thorough analysis of your product , my service is tailored for you. I focus on identifying hidden issues to enhance your product\'s performance.'
    },
    {
      ICON: {
        SRC: imageList.TechnicalPlanningIcon.src,
        ALT: imageList.TechnicalPlanningIcon.alt
      },
      NAME: 'Technical Planning',
      INTRO: 'Selecting the right technology for your project can be a daunting task.',
      DESCRIPTION: 'My service caters to those looking to carefully evaluate their project\'s needs and explore the most suitable technical solutions.'
    }
  ]
}
