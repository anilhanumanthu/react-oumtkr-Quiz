import React from "react";

const Result = ({result,playAgain}) => (

<div className="score-board">
<div className="score">You scored {result}/5 correct Answers!!!</div>
<button className="playBtn" onClick={playAgain}>
Play Again!!!
</button>
</div>
);

export default Result;