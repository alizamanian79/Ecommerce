import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{

      'red':'red',

      //Home
      'hBack':'#f4f4f4',

      'rmv':'transparent',
      'mainColor':'#232629',


      //Categories
      'ctDesColor':'#606060',
      'brColor':'#4c4c4c94',
      
      //Nav Items Color
      'mBackColor':'#ffffff',
      'nvColor':'#000000',
      'nvHoverColor':'#606060',

    },

    extend: {

      width: (value:any) => {
        const widthValues:any={};
        for (let i = 1; i <= 100; i++) {
          widthValues[i] = `${i}%`;
        }
        return widthValues;
      },

      height: (value:any) => {
        const heightValues:any={};
        for (let i = 1; i <= 100; i++) {
          heightValues[i] = `${i}px`;
        }
        return heightValues;
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
