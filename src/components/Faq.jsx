import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: 'Do I need a referral from my doctor to see a physiotherapist?',
      answer: 'In most cases, a referral is not required, but it can depend on your insurance plan and local regulations.',
    },
    {
      question: 'How many sessions will I need?',
      answer: 'The number of sessions depends on the severity of your condition. Your physiotherapist will recommend a plan after your first assessment.',
    },
    {
      question: 'What should I bring to my first appointment?',
      answer: 'Please bring your ID, insurance details, and any relevant medical records or reports.',
    },
    {
      question: 'Will my insurance cover physiotherapy?',
      answer: 'Insurance coverage varies by plan. Please check with your provider or bring your insurance details to your first appointment.',
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {questions.map((item, index) => (
          <div key={index} className="border-b pb-4">
            <button
              onClick={() => toggleAnswer(index)}
              className="text-lg font-semibold text-left w-full flex justify-between items-center py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {item.question}
              <span className="ml-2 text-xl">{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-700 px-4">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <div id="faq">
        <FAQ />
      </div>
    </div>
  );
};

export default App;