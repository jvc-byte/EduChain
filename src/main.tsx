import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import './index.css'
import React from 'react'
import { base } from 'viem/chains';
import Providers from './providers.js'
import { Provider } from 'react-redux';
import store from '../store';  // Import the store



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <Provider store={store}>
        <App />
      </Provider>
    </Providers>
  </StrictMode>,
)
