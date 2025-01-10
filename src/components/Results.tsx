"use client";

import { Question } from "@/types/Question";

type Props = {
  questions: Question[];
  answers: number[];
};

export const Results = ({ questions, answers }: Props) => {
  let correctAnswers = 0;
  let incorrectAnswers = 0;
  const totalQuestions = questions.length;

  questions.forEach((item, key) => {
    item.answer === answers[key] ? correctAnswers++ : incorrectAnswers++;
  });

  return (
    <div>
      <p>
        Resposta{correctAnswers === 1 ? "" : "s"} correta
        {correctAnswers === 1 ? "" : "s"}: {correctAnswers}
      </p>
      <p>
        Resposta{incorrectAnswers === 1 ? "" : "s"} incorreta
        {incorrectAnswers === 1 ? "" : "s"}: {incorrectAnswers}
      </p>
      <p className="font-bold mt-6">
        {correctAnswers > incorrectAnswers
          ? `Parabéns! Você acertou ${correctAnswers} de ${totalQuestions} pergunta${
              questions.length === 1 ? "" : "s"
            }. Excelente desempenho! 🎉`
          : `Você acertou apenas ${correctAnswers} de ${totalQuestions} pergunta${
              questions.length === 1 ? "" : "s"
            }. Continue praticando e tente novamente! 😊`}
      </p>
    </div>
  );
};
