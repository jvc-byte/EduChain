import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import '@coinbase/onchainkit/styles.css';
import Homepage from './pages/Homepage';
import { ToastDestructive } from './components/TestToast';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/test' element={<ToastDestructive />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
