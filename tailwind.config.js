const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const { spacing, lineHeight, fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './layouts/*.{ts,tsx,mdx}',
    './content/**/*.mdx'
  ],
  theme: {
    extend: {
      spacing: {
        116: '29rem',
        120: '30rem',
        144: '36rem',
      },
      boxShadow: {
        link: 'inset 0 -0.125em 0 0 #E11D4845, inset 0 -0.375em 0 0 rgb(177 56 111 / 12%)',
      },
      fontFamily: {
        sans: ['Inter var', ...fontFamily.sans],
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
      zIndex: {
        '-1': '-1',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            lineHeight: lineHeight[7],
            '.tech-stack p': { margin: 0 },
            a: {
              display: 'inline',
              backgroundClip: 'text',
              backgroundImage: 'linear-gradient(to top right, #E11D48, #EA580C)',
              color: 'transparent',
              boxShadow: 'inset 0 -0.125em 0 0 #E11D4850, inset 0 -0.375em 0 0 rgb(177 56 111 / 6%)',
              textDecoration: 'none',
              code: { color: theme('colors.rose.400') },
            },
            'a:hover': {
              boxShadow: 'inset 0 -0.125em 0 0 #E11D4880, inset 0 -0.375em 0 0 rgb(177 56 111 / 10%) !important',
            },
            ':where(a[href*="//"]):not(:where([class~="not-prose"] *))::after': {
              content: '"↗"',
              color: '#EA580C',
              display: 'inline-flex',
              width: '16px',
              height: '16px',
              verticalAlign: 'middle',
              transform: 'translateY(-7px) translateX(3px) scale(1.1)',
              backgroundColor: 'inherit',
            },
            'h2, h3, h4': {
              fontWeight: 600,
              'scroll-margin-top': spacing[32],
              marginBottom: '12px',
            },
            thead: {
              borderBottomColor: theme('colors.gray.200')
            },
            code: {
              color: '#cd4045',
              background: 'rgba(255, 116, 116, 0.075)',
              padding: '4px 8px',
              borderRadius: '2px'
            },
            'code::before': { display: 'none', content: '""' },
            'code::after': { display: 'none', content: '""' },
            pre: {
              padding: '24px 28px',
              background: theme('colors.gray.50')
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
            blockquote: {
              margin: '0 -24px',
              padding: '2px 20px',
              color: theme('colors.amber.900'),
              borderColor: theme('colors.yellow.500'),
              background: '#fbf9f0',
            }
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
        html: {
          fontFeatureSettings: `"cv02","cv03","cv04","cv11"`,
        },
        '.bg-blobs': {
          backgroundImage: 'radial-gradient(#f1f1f1 1px, #FFF 1px)',
          backgroundSize: '20px 20px'
        },
        '.rough-annotation': {
          zIndex: '-1',
        },
      }

      addUtilities(classes)
    }),
    function({ addBase }) {
      addBase([
        {
          '@font-face': {
            fontFamily: `Inter var`,
            fontWeight: `100 900`,
            fontDisplay: `swap`,
            fontStyle: `normal`,
            fontNamedInstance: `Regular`,
            src: `url("/fonts/Inter-roman-latin.var.woff2?v=3.19") format("woff2")`,
          }
        }
      ])
    },
  ],
};
