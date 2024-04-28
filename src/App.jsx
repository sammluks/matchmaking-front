import { ThemeProvider } from '@emotion/react'
import { CssBaseline, createTheme } from '@mui/material'
import './App.css'
import AppRoutes from './routes'


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppRoutes/>
    </ThemeProvider>
  )
}

export default App
