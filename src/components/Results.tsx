import { Question } from "@/types/Question";

type Props = {
  questions: Question[];
  answers: number[];
};

export const Results = ({ questions, answers }: Props) => {
  return (
    <div>
      {questions.map((item, key) => (
        <div key={key} className="mb-3">
          <div className="font-bold">
            {key + 1}.{item.question}
          </div>

          <div>
            <span>
              (
              {item.answer === answers[key]
                ? "Resposta correta"
                : "Resposta errada"}
              ) -{" "}
            </span>
            {item.options[item.answer]}
          </div>
        </div>
      ))}
    </div>
  );
};
