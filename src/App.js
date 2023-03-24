import { Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz';
import QuizPage from './components/QuizPage';
import QuizResult from './components/QuizResult';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Quiz />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/results" element={<QuizResult />}/>
    </Routes>
  )
}

export default App;
