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
        100: '#202532',
        80: '#50545E',
        60: '#838791',
        40: '#BEC0C5',
        10: '#D9DADD',
        5: '#EAEAEB',
        0: '#F2F2F3',
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
          100: '#A64F21',
          50: '#E86825',
          5: '#FFE1BE',
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
