import React, { useState } from 'react';
import { Brain, BookOpen, GraduationCap, ArrowRight } from 'lucide-react';
import { Quiz } from './components/Quiz';
import { Recommendations } from './components/Recommendations';
import { Login } from './components/Login';

function App() {
  const [started, setStarted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  if (!isLoggedIn) {
    return <Login onLogin={(username) => {
      setIsLoggedIn(true);
      setUser(username);
    }} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <nav className="bg-gray-800 py-4 px-6 mb-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold">AdaptLearn</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Welcome, {user}!</span>
            <button 
              onClick={() => {
                setIsLoggedIn(false);
                setUser(null);
                setStarted(false);
                setScore(null);
              }}
              className="text-sm px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-all"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {!started ? (
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Welcome to Your Learning Journey
            </h1>
            <p className="text-xl text-gray-400 mb-12">
              Let's discover your perfect learning path with our adaptive assessment system
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-8 bg-gray-800 rounded-xl hover:bg-gray-750 transition-all transform hover:-translate-y-1">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-purple-500" />
                <h3 className="text-xl font-semibold mb-3">Smart Assessment</h3>
                <p className="text-gray-400">Adaptive questions that match your skill level</p>
              </div>
              <div className="p-8 bg-gray-800 rounded-xl hover:bg-gray-750 transition-all transform hover:-translate-y-1">
                <GraduationCap className="w-12 h-12 mx-auto mb-4 text-purple-500" />
                <h3 className="text-xl font-semibold mb-3">Personalized Path</h3>
                <p className="text-gray-400">Learning materials tailored to your needs</p>
              </div>
              <div className="p-8 bg-gray-800 rounded-xl hover:bg-gray-750 transition-all transform hover:-translate-y-1">
                <Brain className="w-12 h-12 mx-auto mb-4 text-purple-500" />
                <h3 className="text-xl font-semibold mb-3">AI-Powered</h3>
                <p className="text-gray-400">Smart recommendations for optimal learning</p>
              </div>
            </div>
            <button
              onClick={() => setStarted(true)}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full text-lg font-semibold flex items-center mx-auto transition-all transform hover:scale-105"
            >
              Start Your Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      ) : score === null ? (
        <Quiz setScore={setScore} />
      ) : (
        <Recommendations score={score} username={user} />
      )}
    </div>
  );
}

export default App;