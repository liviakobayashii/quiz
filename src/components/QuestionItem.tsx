"use client";

import { Question } from "@/types/Question";
import { useEffect, useState } from "react";

type Props = {
  question: Question;
  count: number; // qual numero da alternativa correta
  onAnswer: (answer: number) => void;
};

export const QuestionItem = ({ question, count, onAnswer }: Props) => {
  const [shuffledOptions, setShuffledOptions] = useState<
    { option: string; index: number }[]
  >([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  // Embaralhar opções ao montar o componente
  useEffect(() => {
    const shuffled = question.options
      .map((option, index) => ({ option, index })) // Associa cada opção com seu índice original
      .sort(() => Math.random() - 0.5); // Embaralha as opções
    setShuffledOptions(shuffled);
  }, [question]);

  const checkQuestion = (key: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(key);

      setTimeout(() => {
        onAnswer(shuffledOptions[key].index); // Passa o índice original da resposta
        setSelectedAnswer(null);
      }, 1000);
    }
  };

  return (
    <div>
      <div className="text-3xl font-bold mb-5">
        {count}. {question.question}
      </div>
      <div>
        {shuffledOptions.map((item, key) => (
          <div
            key={key}
            onClick={() => checkQuestion(key)}
            className={`border px-3 py-2 rounded-md text-lg mb-4 bg-blue-100 border-blue-300 
                ${
                  selectedAnswer !== null
                    ? "cursor-auto"
                    : "cursor-pointer hover:opacity-60"
                }
                ${
                  // Destacar a resposta correta ou errada
                  selectedAnswer !== null &&
                  (selectedAnswer === key ||
                    question.answer === shuffledOptions[key].index) &&
                  question.answer === shuffledOptions[key].index &&
                  "bg-green-100 border-green-300"
                }
                ${
                  // Se a resposta errada for a escolhida, destaca ela em vermelho
                  selectedAnswer !== null &&
                  selectedAnswer === key &&
                  shuffledOptions[key].index !== question.answer &&
                  "bg-red-100 border-red-300"
                }          `}
          >
            {item.option}
          </div>
        ))}
      </div>
    </div>
  );
};
