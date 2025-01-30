import React from 'react';
import { BookOpen, Globe, Video, Brain, ArrowLeft } from 'lucide-react';

interface RecommendationsProps {
  score: number;
  username: string | null;
}

interface Resource {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
}

export function Recommendations({ score, username }: RecommendationsProps) {
  const getResources = (): Resource[] => {
    if (score <= 50) {
      return [
        {
          title: "Khan Academy Basics",
          description: "Start with fundamental concepts and build your foundation",
          url: "https://www.khanacademy.org/math/arithmetic",
          icon: <BookOpen className="w-6 h-6" />,
        },
        {
          title: "Math is Fun",
          description: "Simple explanations of basic mathematical concepts",
          url: "https://www.mathsisfun.com",
          icon: <Brain className="w-6 h-6" />,
        },
        {
          title: "Basic Math Video Tutorials",
          description: "Step-by-step video explanations of core concepts",
          url: "https://www.youtube.com/c/mathtutordvd",
          icon: <Video className="w-6 h-6" />,
        },
      ];
    } else if (score <= 80) {
      return [
        {
          title: "Khan Academy Intermediate",
          description: "Advance your knowledge with more complex topics",
          url: "https://www.khanacademy.org/math/algebra",
          icon: <BookOpen className="w-6 h-6" />,
        },
        {
          title: "IXL Math",
          description: "Practice problems with increasing difficulty",
          url: "https://www.ixl.com/math",
          icon: <Brain className="w-6 h-6" />,
        },
        {
          title: "Mathematics Stack Exchange",
          description: "Community-driven Q&A for mathematical concepts",
          url: "https://math.stackexchange.com",
          icon: <Globe className="w-6 h-6" />,
        },
      ];
    } else {
      return [
        {
          title: "MIT OpenCourseWare",
          description: "Advanced mathematics courses from MIT",
          url: "https://ocw.mit.edu/courses/mathematics/",
          icon: <BookOpen className="w-6 h-6" />,
        },
        {
          title: "Project Euler",
          description: "Challenging mathematical/programming problems",
          url: "https://projecteuler.net",
          icon: <Brain className="w-6 h-6" />,
        },
        {
          title: "arXiv Math",
          description: "Latest mathematical research and papers",
          url: "https://arxiv.org/math",
          icon: <Globe className="w-6 h-6" />,
        },
      ];
    }
  };

  const resources = getResources();
  const level = score <= 50 ? "Basic" : score <= 80 ? "Intermediate" : "Advanced";
  const message = score <= 50
    ? "Focus on building strong foundations"
    : score <= 80
    ? "You're doing well! Let's enhance your skills"
    : "Excellent! Here's advanced material to challenge you";

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Your Learning Path</h2>
          <div className="mb-4">
            <span className="text-2xl font-semibold">Score: {score.toFixed(1)}%</span>
          </div>
          <p className="text-xl text-gray-400 mb-4">Level: {level}</p>
          <p className="text-gray-300">{message}</p>
        </div>

        <div className="grid gap-6">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-all transform hover:-translate-y-1 group"
            >
              <div className="flex items-start">
                <div className="p-3 bg-purple-500 rounded-lg mr-4">
                  {resource.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400">{resource.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Want to try the assessment again, {username}?
          </p>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 transition-all"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Start Over
          </button>
        </div>
      </div>
    </div>
  );
}