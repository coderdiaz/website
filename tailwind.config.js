const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const { spacing, lineHeight } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './pages/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './layouts/*.{ts,tsx,mdx}',
    './content/**/*.mdx'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        144: '36rem',
      },
      boxShadow: {
        'link': 'inset 0 -0.125em 0 0 #f7ccb5fa, inset 0 -0.375em 0 0 rgb(177 56 111 / 12%)',
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        tiny: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      colors: {
        rose: colors.rose,
        orange: colors.orange,
      },
      animation: {
        blob: 'blob 10s infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '25%': {
            transform: 'translate(20px, -50px) scale(1.1)',
          },
          '50%': {
            transform: 'translate(0, 20px) scale(1)',
          },
          '75%': {
            transform: 'translate(-20px, -15px) scale(0.9)',
          },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            lineHeight: lineHeight[8],
            '.tech-stack p': {
              margin: 0,
            },
            a: {
              color: theme('colors.orange.600'),
              boxShadow: 'inset 0 -0.125em 0 0 #f7ccb5fa, inset 0 -0.375em 0 0 rgb(177 56 111 / 12%)',
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.orange.700')
              },
              code: { color: theme('colors.orange.400') }
            },
            'h2, h3, h4': {
              'scroll-margin-top': spacing[32],
              marginBottom: '12px',
            },
            thead: {
              borderBottomColor: theme('colors.gray.200')
            },
            code: { color: theme('colors.orange.500') },
            pre: { backgroundColor: theme('colors.gray.50') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false
          }
        },
      }),
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function({ addUtilities }) {
      const classes = {
        '.bg-blobs': {
          backgroundImage: 'radial-gradient(#d9d9d9 1px, #FFF 1px)',
          backgroundSize: '20px 20px'
        }
      }

      addUtilities(classes)
    })
  ],
};
