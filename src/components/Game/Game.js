import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [checkWord, setCheckWord] = React.useState('');

  return <>
  <form>
    <label htmlFor='check-word'>
      Enter guess:
    </label>
    <input
    type='text'
    id='check-word'
    value={checkWord}
    pattern='^.{5}$'
    maxLength={5}
    onChange={(event) => {
      setCheckWord(event.target.value.toUpperCase());
    }}
    />
  </form>
  </>;
}

export default Game;
