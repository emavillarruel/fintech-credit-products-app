import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mp: {
          blue: '#3483FA',
          yellow: '#FFE600',
          green: '#00A650',
          orange: '#FF6600',
          lightBlue: '#4285F4',
          gray: {
            50: '#F7F7F7',
            100: '#E6E6E6',
            200: '#CCCCCC',
            300: '#999999',
            400: '#666666',
            500: '#333333',
            600: '#2D2D2D',
            700: '#1A1A1A',
            800: '#0D1117',
            900: '#000000',
          }
        },
        credito: {
          success: '#00A650',
          warning: '#FF6600',
          danger: '#FF3333',
          info: '#3483FA',
          lc: '#4285F4',
          pl: '#00A650',
          bnpl: '#FF6600',
        }
      },
      fontFamily: {
        sans: ['Proximanova', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'mp': '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        'mp-lg': '0 8px 16px 0 rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-gentle': 'pulse 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
export default config
