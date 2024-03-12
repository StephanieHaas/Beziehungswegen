const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        `./src/pages/**/*.{js,jsx,ts,tsx}`,
        `./src/templates/**/*.{js,jsx,ts,tsx}`,
        `./src/components/**/*.{js,jsx,ts,tsx}`,
    ],
    theme: {
        colors: {
            primary: {
                50: "#fbf4fa",
                100: "#f9eaf7",
                200: "#f5d5ef",
                300: "#eeb3e2",
                400: "#e284cc",
                500: "#d55fb6",
                600: "#c2409a",
                700: "#b53389",
                800: "#8a2a69",
                900: "#742759",
                950: "#461133",
            },
            gray: colors.gray,
        },
        extend: {
            fontFamily: {
                autography: ['"Autography"', ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                slideIn: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
            animation: {
                slideIn: "slideIn 1s cubic-bezier(0.4, 0, 0.2, 1)",
            },
        },
    },
    plugins: [],
};
