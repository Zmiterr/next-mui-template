import { alpha } from '@mui/material'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import React, { ReactElement } from 'react'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    title1_bold?: React.CSSProperties
    title1_medium?: React.CSSProperties
    base1_semibold?: React.CSSProperties
    base1_bold?: React.CSSProperties
    base2?: React.CSSProperties
    body1_medium?: React.CSSProperties
    body1_semibold?: React.CSSProperties
    body2_semibold?: React.CSSProperties
    caption1?: React.CSSProperties
    caption1_medium?: React.CSSProperties
    caption2?: React.CSSProperties
    caption2_medium?: React.CSSProperties
    caption3?: React.CSSProperties
    button1?: React.CSSProperties
    button2?: React.CSSProperties
  }

  interface Theme {
    overrides: Record<string, unknown>
  }

  interface ThemeOptions {
    props: unknown
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    title1_bold?: React.CSSProperties
    title1_medium?: React.CSSProperties
    base1_semibold?: React.CSSProperties
    base1_bold?: React.CSSProperties
    base2?: React.CSSProperties
    body1_medium?: React.CSSProperties
    body1_semibold?: React.CSSProperties
    body2_semibold?: React.CSSProperties
    caption1?: React.CSSProperties
    caption1_medium?: React.CSSProperties
    caption2?: React.CSSProperties
    caption2_medium?: React.CSSProperties
    caption3?: React.CSSProperties
    button1?: React.CSSProperties
    button2?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1: true
    h2: true
    h3: true
    h4: true
    title1_bold: true
    title1_medium: true
    base1_semibold: true
    base1_bold: true
    base2: true
    body1_medium: true
    body1_semibold: true
    body2_semibold: true
    caption1: true
    caption1_medium: true
    caption2: true
    caption2_medium: true
    caption3: true
    button1: true
    button2: true
  }
}

export const theme = createTheme(
  /**
   * @see https://material-ui.com/customization/themes/#theme-configuration-variables
   */
  {
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      h1: {
        fontWeight: 600,
        fontSize: '64px',
        lineHeight: '100%',
        letterSpacing: '-0.03em',
      },
      h2: {
        fontWeight: 600,
        fontSize: '48px',
        lineHeight: '100%',
        letterSpacing: '-0.03em',
      },
      h3: {
        fontWeight: 600,
        fontSize: '40px',
        lineHeight: '120%',
        letterSpacing: '-0.02em',
      },
      h4: {
        fontWeight: 700,
        fontSize: '32px',
        lineHeight: '125%',
        letterSpacing: '-0.03em',
      },
      h5: {
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '133%',
        letterSpacing: '-0.02em',
      },
      title1_bold: {
        fontWeight: 700,
        fontSize: '20px',
        lineHeight: '160%',
        letterSpacing: '-0.02em',
      },
      title1_medium: {
        fontWeight: 500,
        fontSize: '20px',
        lineHeight: '160%',
        letterSpacing: '-0.02em',
      },
      base1_semibold: {
        fontWeight: 600,
        fontSize: '15px',
        lineHeight: '160%',
        letterSpacing: '-0.01em',
      },
      base1_bold: {
        fontWeight: 700,
        fontSize: '15px',
        lineHeight: '160%',
        letterSpacing: '-0.01em',
      },
      base2: {
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '171%',
        letterSpacing: '-0.01em',
      },
      body1_medium: {
        fontWeight: 500,
        fontSize: '15px',
        lineHeight: '160%',
        letterSpacing: '-0.015em',
      },
      body1_semibold: {
        fontWeight: 600,
        fontSize: '15px',
        lineHeight: '160%',
        letterSpacing: '-0.01em',
      },
      body2_semibold: {
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '171%',
        letterSpacing: '-0.01em',
      },
      caption1: {
        fontWeight: 600,
        fontSize: '13px',
        lineHeight: '123%',
        letterSpacing: '-0.01em',
      },
      caption1_medium: {
        fontWeight: 500,
        fontSize: '13px',
        lineHeight: '123%',
        letterSpacing: '-0.01em',
      },
      caption2: {
        fontWeight: 700,
        fontSize: '15px',
        lineHeight: '160%',
        letterSpacing: '-0.01em',
      },
      caption3: {
        fontWeight: 700,
        fontSize: '12px',
        lineHeight: '133%',
        letterSpacing: '-0.01em',
      },
      button1: {
        fontWeight: 700,
        fontSize: '15px',
        lineHeight: '160%',
        letterSpacing: '-0.01em',
      },
      button2: {
        fontWeight: 800,
        fontSize: '13px',
        lineHeight: '185%',
        letterSpacing: '-0.01em',
      },
    },

    palette: {
      primary: {
        light: '#859294',
        dark: '#010D0F',
        main: '#3B4142',
      },

      neutrals: {
        white: '#FFFFFF',
        lightGrey_01: '#FCFCFC',
        lightGrey_02: '#F4F4F4',
        lightGrey_03: '#EFEFEF',
        grey: '#6F767E',
        gray500: '#667085',
        darkGrey_02: '#2E3238',
        gray300: '#D0D5DD',
        black: '#1D1E20',
      },

      additional: {
        green: '#A6FFCF',
        purple: '#E6CFFC',
        pink: '#FFADBD',
        gold: '#F7D580',
        teal: '#88E0D9',
      },
      basic: {
        sky_blue: '#87B6E0',
        primary500: '#FE9767',
      },

      plans: {
        business: '#BDA9E5',
        vip: '#EDA99A',
        launch: '#E6BF87',
      },

      warnings: {
        success: '#A0F5A7',
        failure: '#FF8473',
      },

      shades: {
        shadesGrey_01: '#9A9FA5',
        shadesGrey_02: '#6F767E',
        shadesBlack_01: '#3C4145',
        shadesBlack_02: '#15181A',
      },

      gradientBackground: {
        horizontal:
          'radial-gradient(50% 483.33% at 0% 50%, #232527 0%, rgba(41, 46, 48, 0.1) 100%), radial-gradient(34.18% 330.42% at 100% 50%, #232527 0%, rgba(38, 42, 44, 0.1) 98.96%), #222526',
        vertical:
          'radial-gradient(100% 23.72% at 100% 0%, #242829 0%, rgba(34, 37, 38, 0) 100%), radial-gradient(100% 21.54% at 0% 100%, #272B2D 0%, rgba(45, 48, 51, 0.1) 100%), #222526',
      },

      boxShadow: {
        block: '0px 32px 48px -39px rgba(1, 100, 255, 0.04)',
        button: '0px 8px 12px rgba(84, 235, 195, 0.48)',
      },
    },

    breakpoints: {
      values: {
        xs: 0, //mobile
        sm: 576,
        md: 768, //tablet
        lg: 1366, //cheap laptop
        xl: 1920,
      },
    },

    /**
     * @see https://material-ui.com/customization/globals/#default-props
     */
    props: {
      // Name of the component ⚛️
      MuiButtonBase: {
        // The properties to apply
        disableRipple: true, // No more ripple, on the whole application 💣!
      },

      // Set default elevation to 1 for popovers.
      MuiPopover: {
        elevation: 1,
      },
    },
  },
)

theme.components = {
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        title1_bold: 'p',
        title1_medium: 'p',
        base1_semibold: 'p',
        base1_bold: 'p',
        base2: 'p',
        body1_medium: 'p',
        body1_semibold: 'p',
        body2_semibold: 'p',
        caption1: 'p',
        caption1_medium: 'p',
        caption2: 'p',
        caption2_medium: 'p',
        caption3: 'p',
        button1: 'p',
        button2: 'p',
      },
    },

    variants: [
      {
        props: { variant: 'base2' },
        style: {
          [theme.breakpoints.down('md')]: {
            fontSize: 'inherit',
          },
        },
      },
    ],

    styleOverrides: {
      h1: {
        [theme.breakpoints.down('md')]: {
          fontSize: 'inherit',
        },
      },

      h2: {
        [theme.breakpoints.down('md')]: {
          fontSize: 'inherit',
        },
      },

      h3: {
        [theme.breakpoints.down('md')]: {
          fontSize: 'inherit',
        },
      },
      h4: {
        [theme.breakpoints.down('md')]: {
          fontSize: 'inherit',
        },
      },
      h5: {
        [theme.breakpoints.down('md')]: {
          fontSize: 'inherit',
        },
      },
    },
  },

  MuiTextField: {
    styleOverrides: {
      root: {
        width: '100%',
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        color: theme.palette.neutrals.grey,
        height: '40px',
        width: 'fit-content',
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        position: 'relative',
        width: '100%',
        height: '44px',
        marginTop: 0,
        border: '1px solid #D0D5DD',
        outline: 'none',
        borderRadius: '8px',
        background: theme.palette.neutrals.white,
        '& fieldset': { border: 'none' },

        transition: 'all 0.5s',

        '&&': {
          margin: 0,
        },
        '&:hover': {
          borderColor: theme.palette.basic.primary500,
        },
        '&::before': {
          display: 'none',
        },
        '&::after': {
          display: 'none',
        },
        fieldset: { border: 'none' },

        '&.Mui-focused': {
          borderColor: theme.palette.basic.primary500,
          '& fieldset': { border: 'none' },
        },

        '&.Mui-disabled': {},

        '&.Mui-error': {
          color: theme.palette.warnings.failure,
          '&:not(.Mui-focused)': {
            background: alpha(theme.palette.warnings.failure, 0.15),

            '& fieldset': {
              border: `2px solid ${theme.palette.warnings.failure}`,
              borderColor: theme.palette.warnings.failure,
            },
          },
        },
      },
      input: {
        padding: '10px 14px',
        outline: 'none',
        color: theme.palette.neutrals.gray500,
        // caretColor: theme.palette.basic.sky_blue,
        borderRadius: '8px',
        '& fieldset': { border: 'none' },

        '&.Mui-focused': {
          borderColor: theme.palette.basic.primary500,
          '& fieldset': { border: 'none' },
        },

        '&.Mui-disabled': {
          color: theme.palette.primary.light,
          WebkitTextFillColor: 'unset',
        },

        '&::placeholder': {
          opacity: 1,
          color: theme.palette.shades.shadesBlack_01,
        },
        '&:-webkit-autofill': {
          WebkitTextFillColor: theme.palette.neutrals.gray500,
          WebkitBoxShadow: `0 0 0 50px ${theme.palette.common.white} inset`,
        },
        '&:-internal-autofill-selected': {
          WebkitBoxShadow: `0 0 0 50px ${theme.palette.common.white} inset`,
        },
        '&:-internal-autofill-previewed': {
          WebkitBoxShadow: `0 0 0 50px ${theme.palette.common.white} inset`,
        },
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        display: 'none',
      },
      asterisk: {
        display: 'none',
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        margin: 0,
        padding: '8px 0 0 16px',
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '100%',
        '&.Mui-error': {
          color: theme.palette.warnings.failure,
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        marginTop: '12px',
        padding: '6px 0',
        borderRadius: '7px',
        backgroundColor: theme.palette.neutrals.white,
        color: theme.palette.neutrals.grey,

        '& fieldset': { border: 'none' },

        '& li.Mui-selected': {
          backgroundColor: 'inherit',
          color: theme.palette.neutrals.gray500,
          '&:hover ': {
            backgroundColor: theme.palette.common.white,
          },
        },
        '& li:hover ': {
          color: theme.palette.neutrals.gray500,
          backgroundColor: theme.palette.neutrals.darkGrey_02,
        },
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      icon: {
        top: 'calc( 50% - 0.1em )',
        right: '17px',
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        gap: '12px',
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        width: '24px',
        height: '24px',
        borderRadius: '6px',
        borderColor: theme.palette.shades.shadesBlack_01,
        color: theme.palette.shades.shadesBlack_01,
        '&.Mui-checked': {
          color: theme.palette.basic.sky_blue,
          '& .MuiSvgIcon-root': {
            zIndex: 1,
          },
          '& ::after': {
            content: '""',
            display: 'block',
            position: 'relative',
            height: '13px',
            width: '14px',
            top: '6px',
            left: '5px',
            background: theme.palette.neutrals.white,
          },
        },
      },
    },
  },
}

type Props = {
  children: ReactElement
}

export default function ThemeProvider(props: Props) {
  const { children } = props

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}
