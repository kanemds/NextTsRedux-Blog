import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  useTheme,
} from '@mui/material'
import type { AppProps } from 'next/app'
import { useEffect, useMemo, useState } from 'react'
import Header from '../components/Header'
import '../styles/globals.css'
import {
  getStoredTheme,
  getThemeOptions,
  setStoredTheme,
} from '../utilities/uitheme'

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<PaletteMode>('dark')

  useEffect(() => {
    const sotredTheme = getStoredTheme()
    if (sotredTheme) {
      setMode(sotredTheme)
    }
  }, [])

  // update them when it changed
  const theme = useMemo(() => createTheme(getThemeOptions(mode)), [mode])

  const customTheme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        mode={mode}
        onChange={() => {
          const newMode: PaletteMode = mode === 'dark' ? 'light' : 'dark'
          setMode(newMode)
          setStoredTheme(newMode)
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
