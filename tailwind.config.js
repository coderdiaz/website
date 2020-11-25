const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
      darken: '#161e2e',
      notes: '#FEEBC8',
      purple: '#5c45f8',
      alternative: {
        DEFAULT: '#0e7490',
      },
      primary: {
        100: '#F0BDCA',
        200: '#DA9BAB',
        300: '#DA718C',
        400: '#D85072',
        500: '#D4385F',
        600: '#CA2D54',
        700: '#D0244F',
        800: '#CC1543',
        900: '#B02649'
      },
      green: {
        100: '#42FFB1',
        200: '#3FF8AB',
        300: '#37EEA2',
        400: '#33CE8E',
        500: '#2CB67D',
        600: '#29AA75',
        700: '#259869',
        800: '#228A5F',
        900: '#1E7853'
      },
      dark: {
        DEFAULT: '#161e2e',
        100: '#3c465b',
        200: '#2f384b',
        300: '#222a3a',
        400: '#192130',
        500: '#161e2e',
        600: '#101726',
        700: '#0a101e',
        800: '#070d1c',
        900: '#030a1e'
      },
      gray: {
        DEFAULT: '#94A1B2',
        50: '#EFEFEF',
        100: '#E3E4E5',
        200: '#D9DBDE',
        300: '#CED1D4',
        400: '#A8B1BD',
        500: '#94A1B2',
        600: '#798594',
        700: '#5B697A',
        800: '#4D596A',
        900: '#445263'
      },
      blue: {
        DEFAULT: '#05C1E7',
        100: '#99EDFD',
        200: '#66E4FD',
        300: '#33DBFC',
        400: '#00D2FC',
        500: '#05C1E7',
        600: '#0AB2D3'
      },
      yellow: {
        DEFAULT: '#EAB509',
        100: '#FFE79B',
        200: '#FFDB69',
        300: '#FFCF37',
        400: '#FFC405',
        500: '#EAB509',
        600: '#D6A60E'
      },
      red: {
        DEFAULT: '#C93148',
        100: '#FAA8AE',
        200: '#F77D86',
        300: '#F5525E',
        400: '#DB324B',
        500: '#C93148',
        600: '#B93246'
      },
      cyan: {
        50: '#ECFEFF',
        100: '#CFFAFE',
        200: '#A5F3FC',
        300: '#67E8F9',
        400: '#22D3EE',
        500: '#06B6D4',
        600: '#0891B2',
        700: '#0E7490',
        800: '#155E75',
        900: '#164E63',
      },
      neureta: {
        from: '#8256e1',
        to: '#6340b6',
      }
    },
    fontFamily: {
      display: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
      inter: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: '0.5rem',
      sm: '0.75rem',
      base: '0.875rem',
      normal: '1rem',
      lg: '1.125rem',
      xl: '1.5rem',
      '2xl': '1.75rem',
      '2.5xl': '2rem',
      '3xl': '2.25rem',
      '3.5xl': '2.5rem',
      '4xl': '3rem',
      '4.5xl': '3.25rem',
      '5xl': '3.5rem',
      '5.5xl': '3.75rem',
      '6xl': '4rem',
      '6.5xl': '4.25rem',
      '7xl': '4.5rem',
      '7.5xl': '4.75rem',
      '8xl': '5rem',
      '8.5xl': '5.25rem',
      '9xl': '5.5rem',
      '9.5xl': '5.75rem',
      '10xl': '6rem',
      '10.5xl': '6.25rem',
      '11xl': '6.5rem',
      '11.5xl': '6.75rem',
      '12xl': '7rem',
    },
    extend: {
      inset: {
        full: '100%',
      },
      boxShadow: {
        link: 'inset 0 -0.125em 0 0 #fff, inset 0 -0.375em 0 0 rgba(165, 243, 252, 0.4)',
        darkLink: 'inset 0 -0.125em 0 0 #161e2e, inset 0 -0.375em 0 0 rgba(165, 243, 252, 0.2)',
      },
      spacing: {
        16: '4rem',
        18: '4.5rem',
        19: '4.75rem',
        20: '5rem',
        24: '6rem',
        25: '6.25rem',
        26: '6.5rem',
        27: '6.75rem',
        28: '7rem',
        29: '7.25rem',
        30: '7.5rem',
        31: '7.75rem',
        32: '8rem',
        33: '8.25rem',
        34: '8.5rem',
        36: '9rem',
        38: '9.5rem',
        42: '10.5rem',
        50: '12.5rem',
        56: '14rem',
        72: '18rem',
        75: '18.75rem',
        80: '20rem',
        85: '21.5rem',
        87: '22rem',
        88: '22.25rem',
        89: '22.5rem',
        90: '22.75rem',
        91: '23rem',
        92: '23.25rem',
        93: '23.5rem',
        94: '23.75rem',
        95: '24rem',
        96: '24.25rem',
        97: '24.5rem',
        98: '24.75rem',
        99: '25rem',
        100: '25.25rem',
        101: '25.5rem',
        102: '25.75rem',
        112: '29.25rem',
        125: '31.25rem',
        130: '32.5rem',
        150: '37.5rem',
        160: '40rem',
        170: '42.5rem',
        190: '47.5rem',
      },
      textOpacity: {
        80: '.8',
        90: '.9',
      },
      opacity: {
        80: '.8',
        90: '.9',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark']
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase([
        {
          '@font-face': {
            fontFamily: 'IBM Plex Sans',
            fontStyle: 'normal',
            fontWeight: 400,
            fontDisplay: 'swap',
            src: 'url("/fonts/ibm-plex-sans/ibm-plex-sans-v8-latin-regular.eot")',
            src: 'url("/fonts/ibm-plex-sans/ibm-plex-sans-v8-latin-regular.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */ url("/fonts/ibm-plex-sans/ibm-plex-sans-v8-latin-regular.woff2") format("woff2"), /* Super Modern Browsers */ url("/fonts/ibm-plex-sans/ibm-plex-sans-v8-latin-regular.woff") format("woff"), /* Modern Browsers */ url("/fonts/ibm-plex-sans/ibm-plex-sans-v8-latin-regular.ttf") format("truetype"), /* Safari, Android, iOS */ url("/fonts/ibm-plex-sans/ibm-plex-sans-v8-latin-regular.svg#IBMPlexSans") format("svg"); /* Legacy iOS */'
          }
        },
        {
          '@font-face': {
            fontFamily: 'IBM Plex Sans',
            fontStyle: 'normal',
            fontWeight: 600,
            fontDisplay: 'swap',
            src: 'url("/fonts/ibm-plex-sans/ibm-plex-sans-v8-latin-600.eot")',
            src: 'url("/fonts/ibm-plex-sans/ibm-plex-sans-v8-latin-600.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */ url("/fonts/ibm-plex-sans/ibm-plex-sans-v8-latin-600.woff2") format("woff2"), /* Super Modern Browsers */ url("/fonts/ibm-plex-sans/ibm-plex-sans-v8-latin-600.woff") format("woff"), /* Modern Browsers */ url("/fonts/ibm-plex-sans/ibm-plex-sans-v8-latin-600.ttf") format("truetype"), /* Safari, Android, iOS */ url("/fonts/ibm-plex-sans/ibm-plex-sans-v8-latin-600.svg#IBMPlexSans") format("svg"); /* Legacy iOS */'
          }
        },
        {
          '@font-face': {
            fontFamily: 'IBM Plex Sans',
            fontStyle: 'normal',
            fontWeight: 500,
            fontDisplay: 'swap',
            src: 'url("/fonts/ibm-plex-sans/IBMPlexSans-Medium.eot")',
            src: 'url("/fonts/ibm-plex-sans/IBMPlexSans-Medium.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */ url("/fonts/ibm-plex-sans/IBMPlexSans-Medium.woff2") format("woff2"), /* Super Modern Browsers */ url("/fonts/ibm-plex-sans/IBMPlexSans-Medium.woff") format("woff"), /* Modern Browsers */ url("/fonts/ibm-plex-sans/IBMPlexSans-Medium.ttf") format("truetype"), /* Safari, Android, iOS */'
          }
        },
        {
          '@font-face': {
            fontFamily: 'IBM Plex Sans',
            fontStyle: 'normal',
            fontWeight: 700,
            fontDisplay: 'swap',
            src: 'url("/fonts/ibm-plex-sans/ibm-plex-sans-v8-latin-700.eot")',
            src: 'url("/fonts/ibm-plex-sans/ibm-plex-sans-v8-latin-700.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */ url("/fonts/ibm-plex-sans/ibm-plex-sans-v8-latin-700.woff2") format("woff2"), /* Super Modern Browsers */ url("/fonts/ibm-plex-sans/ibm-plex-sans-v8-latin-700.woff") format("woff"), /* Modern Browsers */ url("/fonts/ibm-plex-sans/ibm-plex-sans-v8-latin-700.ttf") format("truetype"), /* Safari, Android, iOS */ url("/fonts/ibm-plex-sans/ibm-plex-sans-v8-latin-700.svg#IBMPlexSans") format("svg"); /* Legacy iOS */'
          }
        },
        {
          '@font-face': {
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
            fontDisplay: 'swap',
            src: 'url("/fonts/inter/Inter-Regular.woff") format("woff")',
          }
        },
        {
          '@font-face': {
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 700,
            fontDisplay: 'swap',
            src: 'url("/fonts/inter/Inter-Bold.woff") format("woff")',
          }
        }
      ])
    },
  ],
};