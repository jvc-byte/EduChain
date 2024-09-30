import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import './index.css'
import React from 'react'
import { base } from 'viem/chains';
import Providers from './providers.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
    <App />
    </Providers>
  </StrictMode>,
)
