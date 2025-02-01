import daisyui from "daisyui";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	plugins: [typography, animate, daisyui],
};
