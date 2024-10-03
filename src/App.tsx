import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import '@coinbase/onchainkit/styles.css';
import Homepage from './pages/Homepage';
import { ToastDestructive } from './components/TestToast';
import SearchResults from './components/SearchResults';
import LearningPage from './pages/LearningPage';
import MyLessons from './components/MyLessons';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/test' element={<ToastDestructive />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/learningpage" element={<LearningPage />} />
          <Route path="/my-lessons" element={<MyLessons />} />

        </Routes>
      </BrowserRouter>
  )
}

export default App
