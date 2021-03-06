// @flow
import type { OptionsType } from '../../../Types'

const theme: OptionsType = {
  title: 'Stardust',
  baseFontSize: '20px',
  baseLineHeight: 1.60,
  googleFonts: [
    {
      name: 'Merriweather',
      styles: ['300', '300i', '400'],
    },
    {
      name: 'Josefin Sans',
      styles: ['400', '600'],
    },
  ],
  headersFontFamily: ['Josefin Sans', 'sans-serif'],
  bodyFontFamily: ['Merriweather', 'serif'],
  headerColor: 'hsla(0, 0%, 0%, 0.9)',
  bodyColor: 'hsla(0, 0%, 0%, 0.8)',
  headerWeight: 600,
  bodyWeight: 300,
  boldWeight: 400,
}

export default theme
