// Show the question fetched from API
import React from 'react';
import AnswerBox from './AnswerBox.component';
// Styles
import { Wrapper,} from './QuestionCard.styles';

type Props = {
  question: string;
  answer: string;
  callback: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Question: React.FC<Props> = ({
  question,
  answer,
  callback,
}) =>(
  <Wrapper>
    <h1>Question</h1>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <AnswerBox callback={callback} placeholder="Type your answer without spaces"/>
  </Wrapper>
)

export default Question;
