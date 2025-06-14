import React from 'react';

function GuessInput() {

  const [guess, setGuess] = React.useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log({guess});
    setGuess('');
  }

  return <form 
            className="guess-input-wrapper"
            onSubmit={handleSubmit}
          >
            <label htmlFor="guess-input">Enter guess:</label>
            <input 
              required
              minLength={5}
              maxLength={5}
              pattern="[a-zA-Z]{5}"
              title="Only enter a 5 letter word please 😎"
              type="text" 
              id="guess-input"
              value={guess}
              onChange={(e) => {
                const upperWord = e.target.value.toUpperCase();
                setGuess(upperWord);
              }}              
            />
        </form>;
}


export default GuessInput;
