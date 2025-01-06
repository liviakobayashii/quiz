export type Question = {
  question: string;
  options: string[];
  answer: number; //é um number pois vai referenciar o index da resposta certa
};
