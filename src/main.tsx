import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import './index.css'
import React from 'react'
import { base } from 'viem/chains';
import Providers from './providers.js'
import { Provider } from 'react-redux';
import store from '../store';  // Import the store
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <Provider store={store}>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
           <App />
        </SkeletonTheme>
      </Provider>
    </Providers>
  </StrictMode>,
)
