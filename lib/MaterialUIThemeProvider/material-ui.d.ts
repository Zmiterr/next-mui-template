import '@mui/material/styles/createPalette'

type GradientType = {
  main: string
  block: string
  link: string
  hoverLink: string
  activeLink: string
  inputNormal: string
  inputActive: string
  inputHover: string
  inputError: string
}

type ButtonType = {
  disabledBackground: string
}

type BorderType = {
  lightGray: string
}

type BoxShadowType = {
  button: string
  block: string
}

type AdditionalType = {
  green: string
  purple: string
  pink: string
  gold: string
  teal: string
}

type NeutralsType = {
  white: string
  lightGrey_01: string
  lightGrey_02: string
  lightGrey_03: string
  grey: string
  gray500: string
  darkGrey_02: string
  gray300: string
  black: string
}

type ShadesType = {
  shadesGrey_01: string
  shadesGrey_02: string
  shadesBlack_01: string
  shadesBlack_02: string
}

type GradientBackgroundType = {
  vertical: string
  horizontal: string
}

type BasicType = {
  sky_blue: string
  primary500: string
}

type PlansType = {
  business: string
  vip: string
  launch: string
}
type WarningsType = {
  success: string
  failure: string
}

declare module '@mui/material/styles/createPalette' {
  interface Palette extends MuiPallete {
    [key: string]: never
    additional: AdditionalType
    shades: ShadesType
    gradientBackground: GradientBackgroundType
    basic: BasicType
    plans: PlansType
    warnings: WarningsType
    neutrals: NeutralsType
    boxShadow: BoxShadowType
  }

  interface PaletteOptions extends MuiPaletteOptions {
    additional: AdditionalType
    shades: ShadesType
    gradientBackground: GradientBackgroundType
    basic: BasicType
    plans: PlansType
    warnings: WarningsType
    neutrals: NeutralsType
    boxShadow: BoxShadowType
  }
}
