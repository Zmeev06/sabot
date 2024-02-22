const animate = require('tailwindcss-animate');

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	safelist: ['dark'],

	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		transitionDuration: {
			DEFAULT: '0.333s',
		},
		transitionTimingFunction: {
			DEFAULT: 'ease-in-out',
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			screens: {
				'3xl': '1720px',
			},
			fontFamily: {
				base: ['IBM Plex Sans', 'sans-serif'],
			},
			colors: {
				background: {
					DEFAULT: 'rgb(var(--background))',
				},
				foreground: {
					DEFAULT: 'rgb(var(--foreground))',
				},
				base: {
					black: 'rgb(var(--base-black))',
					white: 'rgb(var(--base-white))',
				},
				accent: {
					normal: 'rgb(var(--accent-normal))',
					dark: 'rgb(var(--accent-dark))',
					light: 'rgb(var(--accent-light))',
				},
				brand: {
					normal: 'rgb(var(--brand-normal))',
				},
				fill: {
					light: 'rgb(var(--fill-light))',
					strong: 'rgb(var(--fill-strong))',
					mid: 'rgb(var(--fill-mid))',
					extra: 'rgb(var(--fill-extra))',
				},
				text: {
					primary: 'rgb(var(--text-primary))',
					secondary: 'rgb(var(--text-secondary))',
					tertiary: 'rgb(var(--text-tertiary))',
				},
				bg: {
					global: 'rgb(var(--bg-global))',
					primary: 'rgb(var(--bg-primary))',
					secondary: 'rgb(var(--bg-secondary))',
					tertiary: 'rgb(var(--bg-tertiary))',
					'gray-fill-light': 'rgb(var(--bg-gray-fill-light))',
				},
				border: {
					strong: 'rgb(var(--border-strong))',
					mid: 'rgb(var(--border-mid))',
					heavy: 'rgb(var(--border-heavy))',
				},
				grey: {
					light: 'rgb(var(--grey-light))',
					mid: 'rgb(var(--grey-mid))',
					heavy: 'rgb(var(--grey-heavy))',
					strong: 'rgb(var(--grey-strong))',
					700: 'rgb(var(--grey-700))',
					500: 'rgb(var(--grey-500))',
					400: 'rgb(var(--grey-400))',
					200: 'rgb(var(--grey-200))',
					50: 'rgb(var(--grey-50))',
				},
				error: {
					800: 'rgb(var(--error-800))',
					700: 'rgb(var(--error-700))',
					600: 'rgb(var(--error-600))',
					500: 'rgb(var(--error-500))',
					300: 'rgb(var(--error-300))',
					200: 'rgb(var(--error-200))',
					100: 'rgb(var(--error-100))',
					50: 'rgb(var(--error-50))',
				},
				warning: {
					500: 'rgb(var(--warning-500))',
					50: 'rgb(var(--warning-50))',
				},
				purple: {
					700: 'rgb(var(--purple-700))',
					400: 'rgb(var(--purple-400))',
					200: 'rgb(var(--purple-200))',
					50: 'rgb(var(--purple-50))',
				},
				success: {
					700: 'rgb(var(--success-700))',
					600: 'rgb(var(--success-600))',
					500: 'rgb(var(--success-500))',
					400: 'rgb(var(--success-400))',
					300: 'rgb(var(--success-300))',
					200: 'rgb(var(--success-200))',
					100: 'rgb(var(--success-100))',
					50: 'rgb(var(--success-50))',
				},
				cyan: {
					500: 'rgb(var(--cyan-500))',
					400: 'rgb(var(--cyan-400))',
					300: 'rgb(var(--cyan-300))',
					200: 'rgb(var(--cyan-200))',
					100: 'rgb(var(--cyan-100))',
					50: 'rgb(var(--cyan-50))',
				},
				yellow: {
					400: 'rgb(var(--yellow-400))',
				},
				custom: {
					purple: 'rgb(var(--custom-purple))',
					green: 'rgb(var(--custom-green))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
				'collapsible-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-collapsible-content-height)' },
				},
				'collapsible-up': {
					from: { height: 'var(--radix-collapsible-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'collapsible-down': 'collapsible-down 0.2s ease-in-out',
				'collapsible-up': 'collapsible-up 0.2s ease-in-out',
			},
		},
	},
	plugins: [animate],
};
