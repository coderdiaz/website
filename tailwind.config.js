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
        116: '29rem',
        120: '30rem',
        144: '36rem',
      },
      boxShadow: {
        'link': 'inset 0 -0.125em 0 0 #EA580C45, inset 0 -0.375em 0 0 rgb(177 56 111 / 12%)',
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
        cyan: colors.cyan,
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
      zIndex: {
        '-1': '-1',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            lineHeight: lineHeight[8],
            '.tech-stack p': { margin: 0 },
            a: {
              backgroundClip: 'text',
              backgroundImage: 'linear-gradient(to top right, #E11D48, #EA580C)',
              color: 'transparent',
              boxShadow: 'inset 0 -0.125em 0 0 #EA580C45, inset 0 -0.375em 0 0 rgb(177 56 111 / 12%)',
              textDecoration: 'none',
              code: { color: theme('colors.rose.400') }
            },
            'a[href*="//"]:after': {
              content: '""',
              color: '#E11D48',
              display: 'inline-block',
              verticalAlign: 'middle',
              width: '16px',
              height: '16px',
              transform: 'translateY(-1px) scale(1.2)',
              backgroundColor: 'currentcolor',
              '-webkit-mask': `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.6928 18.3072C5.30227 17.9167 5.30227 17.2835 5.69279 16.893L15.9857 6.6001L9.5999 6.6001C9.04762 6.6001 8.5999 6.15238 8.5999 5.6001C8.5999 5.04781 9.04762 4.6001 9.59991 4.6001L18.3999 4.6001C18.6651 4.6001 18.9195 4.70545 19.107 4.89299C19.2945 5.08053 19.3999 5.33488 19.3999 5.6001L19.3999 14.4001C19.3999 14.9524 18.9522 15.4001 18.3999 15.4001C17.8476 15.4001 17.3999 14.9524 17.3999 14.4001L17.3999 8.01432L7.10701 18.3072C6.71649 18.6977 6.08332 18.6977 5.6928 18.3072Z' fill='currentColor'/%3E%3C/svg%3E%0A") no-repeat`
            },
            'h2, h3, h4': {
              'scroll-margin-top': spacing[32],
              marginBottom: '12px',
            },
            thead: {
              borderBottomColor: theme('colors.gray.200')
            },
            code: {
              color: '#cd4045',
              background: 'rgba(255, 116, 116, 0.075)',
              padding: '3px 6px',
              borderRadius: '2px'
            },
            'code::before, code::after': { display: 'none', content: '""' },
            pre: { padding: '24px 28px' },
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
          backgroundImage: 'radial-gradient(#dbdbdb 1px, #FFF 1px)',
          backgroundSize: '20px 20px'
        },
        '.rough-annotation': {
          zIndex: '-1',
        },
      }

      addUtilities(classes)
    })
  ],
};
