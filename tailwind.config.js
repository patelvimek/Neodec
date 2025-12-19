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
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
			},
			colors: {
				primary: {
					50: "#eef4ff",
					100: "#dfeaff",
					200: "#c6d6ff",
					300: "#a3bcfe",
					400: "#7f96fa",
					500: "#6071f4",
					600: "#434ae8",
					700: "#3538cd",
					800: "#2e32a5",
					900: "#2c3183",
					950: "#1a1c4c",
				},
			},
		},
	},
	plugins: [],
});
