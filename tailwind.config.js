/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container:{
		center: true,
		padding: "1px",
	},
	screens: {
		sm: "640px",
		md: "768px",
		lg: "960px",
		xl: "1000px",
	},
	fontFamily: {
		primary: "var(--font-jetbrainsMono)",
	},
  	extend: {
		colors: {
			primary: "#1c1c22",
			accent: {
				default: "#00ff99",
				hover: "#00e187"
			}
		},

		keyframes: {
			"accordion-down": {
				from: {height: "0"},
				to: {height: "var(--radix-accordion-content-height)"},
			},
			"accordion-up": {
				from: {height: "var(--radix-accordion-content-height)"},
				to: {height: "0"},
			}
		},
		animation:{
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out"
		},
		textShadow: {
			'outline': '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
		  }
  	}
  },
  plugins: [require("tailwindcss-animate", "tailwind-textshadow")],
};
