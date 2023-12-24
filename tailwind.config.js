/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT"
import colors from "tailwindcss/colors"
import defaultTheme from "tailwindcss/defaultTheme"

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "Kanit", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: { ...colors },
      fontFamily: {
        montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        kanit: ['"Kanit"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
export default withMT(config)
