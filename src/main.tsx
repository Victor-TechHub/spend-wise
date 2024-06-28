import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyles } from "./styles/body"
import { ThemeCtxProvider } from "./context/theme"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyles />
    <ThemeCtxProvider>
      <App />
    </ThemeCtxProvider>
  </>
)
