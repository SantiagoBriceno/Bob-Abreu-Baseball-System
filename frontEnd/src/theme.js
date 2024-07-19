// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  colors: {
    principales: {
      primary: '#010440',
      secondary: '#010326',
      terciary: '#F24405',
      cuaternary: '#F20505',
      quinary: '#0D0D0D',
      sextary: '#F2F2F2'
    },
    text: {
      87: 'rgba(255, 255, 255, 0.87)',
      60: 'rgba(255, 255, 255, 0.6)',
      38: 'rgba(255, 255, 255, 0.38)'
    },
    background: {
      bg: '#121212',
      panel: '#222222',
      border: 'rgba(255,255,255,0.09)'
    },
    primary: {
      100: '#2673DD',
      70: 'rgba(38, 155, 221, 0.7)',
      30: 'rgba(38, 155, 221, 0.3)',
      14: 'rgba(38, 115,221, 0.14)'
    },
    alerts: {
      warning: '#B28400',
      error: 'A82B30',
      success: '#309053',
      jeans: '#5576BE'
    },
    higlight: {
      bk: 'rgba(255,122,69,0.87)',
      ck: 'rgba(255,219,20,0.87)',
      sk: 'rgba(255,94,210,0.87)'
    }
  }
})

export default theme
