import React,{useState} from "react";

const QuestionBox = ({question, options,selected}) =>{
  const [answer,setAnswer] = useState(options);
  return(
    <div className="questionBox">
      <div className="question">{question}</div>
      {
        answer.map((text,index) => (
        <button key={index} onClick={
          ()=>{
            setAnswer([text]);
            selected(text);
          }
        } className="answerBtn">
        {text}
        </button>
        ))
      }
    </div>
  );
};

export default QuestionBox;