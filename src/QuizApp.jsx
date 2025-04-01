import { useState } from "react";

const quizData = [
  {
    question: "What is the primary goal of first aid?",
    options: [
      "Replace advanced medical treatment",
      "Provide pain relief",
      "Preserve life and prevent further injury",
      "Diagnose underlying illness"
    ],
    answer: 2
  },
  {
    question: "What must always be done before administering first aid?",
    options: [
      "Notify the press",
      "Ensure the scene is safe",
      "Begin CPR",
      "Take a photo of the injury"
    ],
    answer: 1
  }
];

export default function QuizApp() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleSubmit = () => {
    if (selected === quizData[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-2xl shadow-md">
      {!completed ? (
        <div>
          <h2 className="text-xl font-bold mb-4">Question {current + 1}</h2>
          <p className="mb-4">{quizData[current].question}</p>
          <div className="space-y-2">
            {quizData[current].options.map((opt, index) => (
              <div
                key={index}
                className={\`p-2 border rounded cursor-pointer \${selected === index ? "bg-blue-100" : ""}\`}
                onClick={() => setSelected(index)}
              >
                {opt}
              </div>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            disabled={selected === null}
          >
            Submit
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold">Quiz Complete</h2>
          <p className="mt-2">You scored {score} out of {quizData.length}.</p>
        </div>
      )}
    </div>
  );
}
