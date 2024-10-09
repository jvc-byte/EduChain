import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import '@coinbase/onchainkit/styles.css';
import Homepage from './pages/Homepage';
import { ToastDestructive } from './components/TestToast';
import SearchResults from './components/SearchResults';
import LearningPage from './pages/LearningPage';
import MyLessons from './components/MyLessons';
import Glossary from "./components/Glossary";
import ClassRoom from './components/ClassRoom';
import QuizPage from './components/QuizPage';
import LessonCompleted from './components/LessonCompleted';
import MintCertificate from './components/MintCertificate';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/test' element={<ToastDestructive />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/learningpage" element={<LearningPage />} />
          <Route path="/my-lessons" element={<MyLessons />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/course/:id" element={<ClassRoom />} />
          <Route path="/quiz/:id" element={<QuizPage />} />
          <Route path="/my-lessons" element={<LessonCompleted />} />
          <Route path="/mintcertificate/:id" element={<MintCertificate />} />


        </Routes>
      </BrowserRouter>
  )
}

export default App
