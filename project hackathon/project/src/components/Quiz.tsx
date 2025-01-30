import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface QuizProps {
  setScore: (score: number) => void;
}

const questions = [
  {
    id: 1,
    question: "Solve for x: 2x + 5 = 13",
    options: ["x = 4", "x = 8", "x = 3", "x = 6"],
    correct: 0,
    difficulty: "basic"
  },
  {
    id: 2,
    question: "If a triangle has angles measuring 45°, 45°, and 90°, what type of triangle is it?",
    options: ["Equilateral", "Isosceles Right", "Scalene", "Obtuse"],
    correct: 1,
    difficulty: "intermediate"
  },
  {
    id: 3,
    question: "Simplify: (x² + 2x + 1) - (x² - 2x + 4)",
    options: ["4x - 3", "4x + 3", "4x - 5", "4x + 5"],
    correct: 0,
    difficulty: "advanced"
  },
  {
    id: 4,
    question: "What is the derivative of f(x) = x³ + 2x² - 4x + 1?",
    options: ["3x² + 4x - 4", "3x² + 2x - 4", "3x² + 4x - 1", "x³ + 2x - 4"],
    correct: 0,
    difficulty: "expert"
  }
];

export function Quiz({ setScore }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score
      const correctAnswers = newAnswers.reduce((acc, answer, index) => {
        return acc + (answer === questions[index].correct ? 1 : 0);
      }, 0);
      const finalScore = (correctAnswers / questions.length) * 100;
      setScore(finalScore);
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-purple-500 font-semibold">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-gray-400">
              Difficulty: {question.difficulty}
            </span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full">
            <div
              className="h-2 bg-purple-500 rounded-full transition-all"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">{question.question}</h2>
          <div className="grid gap-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="p-4 bg-gray-700 hover:bg-gray-600 rounded-lg text-left flex items-center transition-all"
              >
                <span className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center mr-4">
                  {String.fromCharCode(65 + index)}
                </span>
                {option}
                <ChevronRight className="ml-auto w-5 h-5 text-gray-400" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}