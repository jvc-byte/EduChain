import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { completeCourse } from '../../features/Learning/courseSlice';
import ClassHeader from './ClassHeader';
import Footer from './Footer';

const QuizPage = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { questions } = state;
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const dispatch = useDispatch();

  const handleAnswerChange = (questionIndex, answer) => {
    setSelectedAnswers(prev => ({ ...prev, [questionIndex]: answer }));
  };

  const handleSubmitQuiz = () => {
    let allCorrect = true;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] !== q.correctAnswer) {
        allCorrect = false;
      }
    });

    if (allCorrect) {
      dispatch(completeCourse({ courseId: id })); // Mark course as complete
      alert('You passed the quiz! The course is now complete.');
      navigate('/my-lessons');
    } else {
      alert('Some answers are incorrect. Please learn the course again.');
      navigate(`/course/${id}`);
    }
  };

  return (
    <div className="bg-color h-full min-h-screen flex flex-col text-white">
      <ClassHeader />
      {questions.map((q, index) => (
        <div key={index} className='flex-grow ml-12 lg:ml-32 md:ml-32 py-5 space-x-4 gap-5'>
          <div className="flex gap-2">
            <h1 className=''>({index + 1})</h1>
            <h1>{q.question}</h1>
          </div>
          <div className="mx-2">
            {q.options.map((option) => (
              <div className="space-x-2 flex gap-x-4 py-2">
                 <label key={option} className='px-2'>
                 <input
                   type="radio"
                   name={`question-${index}`}
                   value={option}
                   className='h-3.5 space-x-3 w-3.5 text-3xl'
                   onChange={() => handleAnswerChange(index, option)}
                 />
                <span className='px-2'>{option}</span>
              </label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button className='border ml-12 mb-10 lg:ml-32 md:ml-32 w-40 text-white hover:border-[#E6169B] p-3 flex-shrink-0 text-sm lg:text-lg md:text-lg' onClick={handleSubmitQuiz}>Submit Quiz</button>
      <Footer />
    </div>
  );
};

export default QuizPage;
