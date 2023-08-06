/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['dist/*html'],
	darkMode: 'class',
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1020px',
			xl: '1440px',
		},
		extend: {
			fontFamily: {
				sans: ['Hanken Grotesk', 'sans-serif'],
			},
			colors: {
				primary: {
					lightRed: 'hsl(0, 100%, 67%)',
					orangeyYellow: 'hsl(39, 100%, 56%)',
					greenTeal: 'hsl(166, 100%, 37%)',
					cobaltBlue: 'hsl(234, 85%, 45%)',
				},
				neutral: {
					white: 'hsl(0, 0%, 100%)',
					paleBlue: 'hsl(221, 100%, 96%)',
					lightLavender: 'hsl(241, 100%, 89%)',
					darkGrayBlue: 'hsl(224, 30%, 27%)',
				},
				gradient: {
					lightSlateBlue: 'hsl(252, 100%, 67%)',
					lightRoyalBlue: 'hsl(241, 81%, 54%)',
					violetBlue: 'hsla(254, 72%, 46%, 1)',
					persianBlue: 'hsla(241, 72%, 46%, 0)',
				},
			},
			borderRadius: {
				'4xl': '2rem',
			}
		},
	},
	plugins: [],
};
