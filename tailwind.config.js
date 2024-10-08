/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            title: ["Itim", "cursive"],
        },
        screens: {
            xsm: {
                min: "320px",
                max: "479px",
            },
            sm: "640px",
            md: "768px",
            ld: {
                raw: "(orientation : landscape) and (max-width : 800px)",
            },
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            spacing: {
                13: "5.2rem",
            },
        },
    },
    plugins: [],
};
