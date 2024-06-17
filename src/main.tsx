import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyles } from "./styles/body"
import { ThemeCtxProvider } from "./context/theme"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeCtxProvider>
      <App />
    </ThemeCtxProvider>
  </React.StrictMode>,
)
