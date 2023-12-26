import { RepositoryTypes } from "./components/Repository/types";

export const Static: Record<string, Record<string, RepositoryTypes>> = {
  Repositories: {
    Fintel: {
      title: 'Fintel Connect',
      description: 'Affiliate marketing platform to connect merchants and publishers for product promotion.',
      frontend: undefined,
      backend: undefined
    },
    AwesomeGCL: {
      title: 'Awesome GCL',
      description: 'React component library for foundation components. Meat to speed up the process of creating web projects from scratch.',
      frontend: 'https://github.com/jgabrielsantos/awesome-gcl',
      backend: undefined
    },
    Fintrack: {
      title: 'Fintrack',
      description: 'Fullstack project to track bank account balances, transactions and spendings. Build with Plaid API for secure bank authentication and data fetching.',
      frontend: 'https://github.com/jgabrielsantos/fintrack-app',
      backend: 'https://github.com/jgabrielsantos/fintrack-api'
    },
    CCTech: {
      title: 'CCTech',
      description: 'Company website aiming to showcase the company\'s services and projects.',
      frontend: 'https://github.com/nautilusdigital/convergence-site',
      backend: undefined
    }
  }
}
