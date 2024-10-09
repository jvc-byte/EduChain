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
import global_en from '../src/translations/en/global.json'
import global_es from '../src/translations/es/global.json'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

i18next.init({
  interpolation: {escapeValue: false},
  lng: "en",
  resources: {
    en: {
      global: global_en
    },
    es: {
      global: global_es,
    },
  }
})


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <Provider store={store}>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <I18nextProvider i18n={i18next}>
           <App />
          </I18nextProvider>
        </SkeletonTheme>
      </Provider>
    </Providers>
  </StrictMode>,
)
