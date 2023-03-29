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
          
          "primary": "#FFFFFF",
                   
          "secondary": "#152747",
                   
          "accent": "#513448",
                   
          "neutral": "#171618",
                   
          "base-100": "#09090B",
                   
          "info": "#66C6FF",
                   
          "success": "#87D039",
                   
          "warning": "#E2D562",
                   
          "error": "#FF6F6F",
                   },
      },
    ],
  },
  plugins: [
     require("daisyui")
  ],
}

