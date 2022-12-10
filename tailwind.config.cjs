/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				whiteTheme: "hsl(0, 0%, 98%)",
				grayTheme: "hsl(0, 0%, 41%)",
				blackTheme: "hsl(0, 0%, 8%)",
			},
		},
	},
	plugins: [],
};
