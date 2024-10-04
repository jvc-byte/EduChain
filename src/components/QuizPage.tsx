import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { completeCourse } from '../../features/Learning/courseSlice';

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
      navigate('/');
    }
  };

  return (
    <div className="quiz-container">
      {questions.map((q, index) => (
        <div key={index}>
          <p>{q.question}</p>
          {q.options.map((option) => (
            <label key={option}>
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                onChange={() => handleAnswerChange(index, option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmitQuiz}>Submit Quiz</button>
    </div>
  );
};

export default QuizPage;
