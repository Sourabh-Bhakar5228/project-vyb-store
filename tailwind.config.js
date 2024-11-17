module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      md: { max: "1050px" },
      sm: { max: "550px" },
    },
    extend: {
      colors: {
        amber: {
          200: "var(--amber_200)",
          300: "var(--amber_300)",
          a100: "var(--amber_a100)",
        },
        background: "var(--background)",
        black: {
          900: "var(--black_900)",
          "900_14": "var(--black_900_14)",
          "900_26": "var(--black_900_26)",
          "900_5b": "var(--black_900_5b)",
        },
        blue: {
          50: "var(--blue_50)",
          a100: "var(--blue_a100)",
          a200: "var(--blue_a200)",
          a200_01: "var(--blue_a200_01)",
        },
        blue_gray: {
          100: "var(--blue_gray_100)",
          600: "var(--blue_gray_600)",
          700: "var(--blue_gray_700)",
          800: "var(--blue_gray_800)",
          900: "var(--blue_gray_900)",
          "100_01": "var(--blue_gray_100_01)",
          "600_01": "var(--blue_gray_600_01)",
        },
        deep_orange: {
          200: "var(--deep_orange_200)",
          900: "var(--deep_orange_900)",
        },
        glass: "var(--glass)",
        gray: {
          100: "var(--gray_100)",
          500: "var(--gray_500)",
          800: "var(--gray_800)",
          900: "var(--gray_900)",
          "100_01": "var(--gray_100_01)",
        },
        green: {
          200: "var(--green_200)",
          400: "var(--green_400)",
          "200_01": "var(--green_200_01)",
          "800_3f": "var(--green_800_3f)",
          a400: "var(--green_a400)",
        },
        indigo: {
          100: "var(--indigo_100)",
          400: "var(--indigo_400)",
          a200: "var(--indigo_a200)",
        },
        lime: {
          900: "var(--lime_900)",
        },
        orange: {
          600: "var(--orange_600)",
          800: "var(--orange_800)",
        },
        red: {
          300: "var(--red_300)",
          800: "var(--red_800)",
          "300_01": "var(--red_300_01)",
          a200: "var(--red_a200)",
        },
        secondary_text_alt: "var(--secondary_text_alt)",
        teal: {
          50: "var(--teal_50)",
          900: "var(--teal_900)",
          "900_01": "var(--teal_900_01)",
        },
        white: {
          a700: "var(--white_a700)",
        },
        yellow: {
          200: "var(--yellow_200)",
          700: "var(--yellow_700)",
          a700: "var(--yellow_a700)",
        },
      },
      boxShadow: {
        xs: "0 3.34px 5px 0 #00000026",
        sm: "0 4px 4px 0 #0000005b",
        md: "0 1px 5px 0 #00000026",
        lg: "0 6px 10px 0 #12861e3f",
        xl: "0 1px 2px 0 #00000026",
      },
      fontFamily: {
        urbanist: "Urbanist",
        caveatbrush: "Caveat Brush",
        inter: "Inter",
        nosifercaps: "Nosifer Caps",
        mrbedfort: "Mr Bedfort",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #4794ff, #ff5d5d)",
        gradient1: "linear-gradient(90deg, #547ae4, #ee626c)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
