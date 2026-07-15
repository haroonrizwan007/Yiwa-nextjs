import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary':      '#C0392B',
        'brand-primary-dark': '#A93226',
        'brand-light':        '#E74C3C',
        'brand-muted':        'rgba(192,57,43,0.10)',
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18':  '4.5rem',
        '22':  '5.5rem',
        '88':  '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'card':   '0 2px 8px rgba(0,0,0,0.06)',
        'hover':  '0 8px 30px rgba(0,0,0,0.12)',
        'red':    '0 4px 20px rgba(192,57,43,0.35)',
        'red-lg': '0 8px 40px rgba(192,57,43,0.25)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'marquee':    'marquee 30s linear infinite',
        'marquee-2':  'marquee2 30s linear infinite',
        'float':      'float 3s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
        'fade-up':    'fadeUp 0.6s ease forwards',
        'spin-slow':  'spin 8s linear infinite',
        'shimmer':    'shimmer 2s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%':   { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        pulseRing: {
          '0%':   { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'grid-pattern': `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C0392B' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        'dot-pattern':  `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C0392B' fill-opacity='0.04'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}

export default config
