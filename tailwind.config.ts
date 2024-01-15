import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: {
        100: '#FFFFFF',
        72: '#FFFFFFB8',
        40: '#FFFFFF66',
      },
      grayscale: {
        800: '#1A1A1A',
        700: '#3B3B3B',
        600: '#656565',
        500: '#757575',
        400: '#A1A1A1',
        300: '#CDCDCD',
        200: '#E6E6E6',
        100: '#F1F1F1'
      },
      primary: {
        100: '#2648A4',
        50: '#2C5DE5',
        20: '#91ADFA',
        10: '#BFD0FD',
        5: '#D7E1FE',
        0: '#EEF3FF',
      },
      support: {
        success: {
          100: '#086343',
          50: '#008556',
          5: '#D6F3E2',
        },
        warning: {
          100: '#D7A900',
          50: '#FDDE68',
          5: '#FEF3CA',
        },
        alert: {
          100: '#9F1B1F',
          50: '#DE1C22',
          5: '#FFD6D7',
        },
      }
    },
    screens: {
      tablet: '640px',
      desktop: '1024px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
