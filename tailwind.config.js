const colors = require('tailwindcss/colors')
const { spacing } = require('tailwindcss/defaultTheme')

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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700')
              },
              code: { color: theme('colors.blue.400') }
            },
            'h2, h3, h4': {
              'scroll-margin-top': spacing[32],
              marginBottom: '12px',
            },
            thead: {
              borderBottomColor: theme('colors.gray.200')
            },
            code: { color: theme('colors.pink.500') },
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
  ],
};
