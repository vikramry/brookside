import type { Config } from "tailwindcss";

const config: Config = {
  darkMode:'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mainbg": "url('/assets/images/mainbg.png')",
      },
      colors: {
        'headerText':'#4E545F',
        'white': '#ffffff',
        'orMain':'#F3A20C',
        'dGrey':'#2E2B4F',
        'purpleMain':'#2E2B4F',
        'paraText':'#333333',
        'brownBorder':"#B28664",
        'lightBlue':'#D2EAF1',
        'bluebg':'#1B5883'
      },
      screens:{
        'sm':{max:"468px"},

      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'roboto': ['"Roboto"', 'sans-serif'],

      },
      borderRadius: {
        'none': '0',
        "99": "99px",
        "10em":"10em",
      },
      width:{
        "36em":"36em",
        "25em":"25em",
        "available":"-webkit-fill-available"
      },
      fontSize:{
        "9em":"9em"
      }

    },
  },
  plugins: [],
};
export default config;