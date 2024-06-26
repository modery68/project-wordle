import React from "react";
import Guess from "../Guess/Guess";

function GuessResults({guesses}) {
  return (
    <div className="guess-result" >
      {guesses.map((guess,index) => (
        <Guess key={index} 
          value = {guess} />
      ))}
    </div>
  );
}

export default GuessResults;
