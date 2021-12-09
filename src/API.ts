

export type Ques = {
  question:string;
  answer:string;
}

export const fetchQuizQuestions = async ():Promise<Ques[]> => {
  const proxyUrl = 'https://obscure-wave-79843.herokuapp.com/';
  const apiUrl = 'https://jservice.io/api/random'
  const data = await (await fetch(proxyUrl+apiUrl)).json();
  return data;
}