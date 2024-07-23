/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				xs: '430px'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			colors: {
				Black: '#000',
				White: '#fff',
				Orange: 'hsl(25, 100%, 58%)',
				Pale_orange: 'hsl(25, 100%, 94%)',
				Yellowish_orange: 'hsl(38, 100%, 50%)',
				Grayish_blue: ' hsl(220, 25%, 80%)',
				Very_dark_blue: 'hsl(220, 15%, 15%)',
				Dark_grayish_blue: 'hsl(220, 10%, 40%)',
				Light_grayish_blue: 'hsl(223, 64%, 90%)',
				Very_light_grayish_blue: 'hsl(223, 64%, 98%)'
			},
			keyframes: {
				ripple: {
					from: { transform: 'scale(0)', opacity: '.25' },
					to: { transform: 'scale(3)', opacity: '0' }
				},
				slide: {
					from: { transform: 'translateX(-100%)' },
					to: { transform: 'translateX(100%)' }
				}
			},
			animation: {
				ripple: 'ripple 1s linear forwards',
				spin: 'spin 1s ease-out infinite',
				slide: 'slide 1.5s linear infinite'
			}
		}
	},
	plugins: []
};
