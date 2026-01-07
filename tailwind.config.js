const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Golos Text", "sans-serif"],
			},
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
			},
			colors: {
				primary: {
					50: "#D3F8D3",
					100: "#BEF5BD",
					200: "#A8F1A7",
					300: "#7CEB7A",
					400: "#51E44E",
					500: "#25DD22",
					600: "#1EB11B",
					700: "#168514",
					800: "#0F580E",
					900: "#072C07",
					950: "#041603",
				},
			},
		},
	},
	plugins: [],
});
