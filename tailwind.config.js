/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        current: "currentColor",
        secondary: "#ffd700",
        blue: '#0A2365',
        'blue-900': 'rgb(30 58 138)',
        'blue-800': 'rgb(30 64 175)',
        "light-text": "#000",
        "light-bg": "#EDEDED",
        'light': '#f5f5f5',
        "dark-text": "#ffffff",
        "dark-bg": "#303030",
        'danger': 'rgb(220 38 38)',
        'warning': 'rgb(251 146 60)',
        'white': '#ffffff'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xs': '300px',
        'xs-75': '375px',
        'sm-4': '400px',
        'xl-2k':'2560px',
        'xl-1k':'1440px',
     }
    },
  },
  plugins: [
    
  ],
}