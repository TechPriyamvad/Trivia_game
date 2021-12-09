import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
// Styles
import { GlobalStyle, Wrapper } from './App.styles';
import Button from './components/Button.component';
import Question from './components/Question.component';
import Spinner from './components/Spinner.component';


export type newAnswerObject = {
  answer:string;
  question:string;
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [gameOver, setGameOver] = useState(true);
  const [question,setQuestion] = useState<newAnswerObject[]>([])
  const [userAnswerField,setUserAnswerField]=useState("")

  const showQuestion = async () => {
    setLoading(true);
    setGameOver(false);
    const dataFromAPI = await fetchQuizQuestions();
    setQuestion(dataFromAPI);
    setLoading(false);
  };

  const checkAnswer = async (e: any) => {
    if(!userAnswerField)
    {
      return alert("Please enter your answer")
    }
    if (!gameOver) {

      // Check answer against correct answer by removing every unwanted character except lowercase,uppercase and numbers characters from answer string received from API
      const correct = question[0]?.answer.trim().replace( /(<([^>]+)>)/ig, '').replace(/[^a-zA-Z0-9]/g,"").replace(/[/\s]/g,"").toLowerCase() === userAnswerField?.replace(/[/\s]/g,"").toLowerCase();
      // console.log(question[0]?.answer.trim().replace( /(<([^>]+)>)/ig, '').replace(/[^a-zA-Z0-9]/g,"").replace(/[/\s]/g,"").toLowerCase());
      
      // show whether answer is correct or not
      if (correct) alert("Correct answer");
      else alert("Incorrect answer")

      setLoading(true);

      //receving next question 
      const dataFromAPI = await fetchQuizQuestions();
      setQuestion(dataFromAPI);
      setLoading(false);
      setUserAnswerField("")
    }
  };

  // store the answer given by user
  const handleUserAnswer=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setUserAnswerField(event.target.value)
}

if(loading)
{
/*   return <h1 style={{color:'black',position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'}}>Loading</h1> */
  return <Spinner/>
}
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Trivia Game</h1>
        {gameOver ? (
          <Button  callback={showQuestion} buttonText="Start Game"/>
        ) : null}
        {!loading && !gameOver && (
          <Question
            question={question[0].question}
            answer={question[0].answer}
            callback={handleUserAnswer}
          />
        )}
        {
          !gameOver && !loading ?(
            <Button  callback={checkAnswer} buttonText="Submit"/>
          ):null
        }
      </Wrapper>
    </>
  );
};

export default App;
