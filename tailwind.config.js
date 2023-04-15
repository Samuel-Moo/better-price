/** @type {import('tailwindcss').Config} */
module.exports = {
  theme:{
    extend:{
      width:{
        '128':'32rem'
      }
    }
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#ffbaf5",
        
"secondary": "#d8d51a",
        
"accent": "#a1f4d0",
        
"neutral": "#27222B",
        
"base-100": "#2B2E64",
        
"info": "#A9D3EF",
        
"success": "#2EB885",
        
"warning": "#8E700B",
        
"error": "#EF6288",
        },
      },
    ],
  },
  plugins: [
     require("daisyui")
  ],
}

