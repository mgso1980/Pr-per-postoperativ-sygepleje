
import React, { useState, useEffect } from 'react';
import { Question } from '../types';

interface QuizProps {
  questions: Question[];
  onComplete: (isCompleted: boolean) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    // Reset state if questions prop changes
    resetQuiz();
  }, [questions]);
  
  const handleAnswerClick = (answerIndex: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    const correct = questions[currentQuestionIndex].correctAnswer === answerIndex;
    setIsCorrect(correct);
    if (correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setQuizFinished(true);
      onComplete(true);
    }
  };
  
  const resetQuiz = () => {
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setScore(0);
      setQuizFinished(false);
      onComplete(false); // Signal that the quiz is no longer complete
  }

  if (quizFinished) {
    return (
      <div className="text-center p-4">
        <h3 className="text-2xl font-bold text-slate-800">Quiz Fuldført!</h3>
        <p className="text-lg mt-2">Din score: <span className="font-bold text-teal-600">{score}</span> ud af <span className="font-bold">{questions.length}</span></p>
        <button 
          onClick={resetQuiz}
          className="mt-6 bg-teal-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-700 transition-colors duration-300"
        >
          Prøv Igen
        </button>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="p-1">
      <div className="mb-4">
        <p className="text-sm text-slate-500">Spørgsmål {currentQuestionIndex + 1} af {questions.length}</p>
        <h4 className="text-lg font-semibold text-slate-700 mt-1">{currentQuestion.question}</h4>
      </div>
      <div className="space-y-3">
        {currentQuestion.options.map((option, index) => {
          let buttonClass = "w-full text-left p-3 rounded-lg border-2 transition-all duration-200 disabled:cursor-not-allowed ";

          if (selectedAnswer !== null) { // An answer has been selected
            if (index === currentQuestion.correctAnswer) {
              buttonClass += 'bg-green-100 border-green-500 text-green-800 font-semibold';
            } else if (index === selectedAnswer) {
              buttonClass += 'bg-red-100 border-red-500 text-red-800';
            } else {
              buttonClass += 'bg-slate-100 border-slate-200 text-slate-500';
            }
          } else { // No answer selected yet
            buttonClass += 'bg-white border-slate-300 hover:bg-teal-50 hover:border-teal-400';
          }
          
          return (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              disabled={selectedAnswer !== null}
              className={buttonClass}
            >
              {option}
            </button>
          );
        })}
      </div>

      {selectedAnswer !== null && (
        <div className={`mt-4 p-3 rounded-lg animate-fade-in ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
          <p className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
            {isCorrect ? "Korrekt!" : "Desværre..."}
          </p>
          <p className="text-sm text-slate-600 mt-1">{currentQuestion.feedback}</p>
          <button 
            onClick={handleNextQuestion}
            className="mt-4 bg-slate-800 text-white font-bold py-2 px-5 rounded-lg hover:bg-slate-700 transition-colors duration-300"
          >
            {currentQuestionIndex < questions.length - 1 ? "Næste Spørgsmål" : "Se Resultat"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
