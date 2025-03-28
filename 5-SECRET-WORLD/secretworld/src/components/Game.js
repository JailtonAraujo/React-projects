import { useState, useRef} from 'react';
import './Game.css';

const Game = ({
    verifyLetter, 
    pickedWord, 
    pickedCategory, 
    letters, 
    guessedLetters, 
    wrongLetters, 
    guesses, 
    score}) => {

    const  [letter, setLetter] = useState("");
    
    const letterInputRef = useRef(null);
    
    const handlerSubmit = (e) =>{
        e.preventDefault();
        verifyLetter(letter);
        setLetter("");

        letterInputRef.current.focus();
    }

  return (
    <div className="game">
        <p className="points">
            <span>Pontuação: {score}</span>
        </p>
        <h1>Advinhe a palavra:</h1>
        <h3 className="tip">
            Dica da palavra: <span>{pickedCategory}</span>
        </h3>
        <p>Voçê ainda tem {guesses} tentativa(s).</p>
        <div className="wordContainer">

            {letters.map((letter,i) =>(
                guessedLetters.includes(letter) ? (
                    <span key={i} className="letter">{letter}</span>
                ) : (
                    <span key={i} className="blankSquare"></span>
                )
            ))}
        </div>
        <div className="letterContainer">
            <p>Tente advinhar uma letra da palavra:</p>
            <form onSubmit={handlerSubmit}>
                <input type="text" name="letter" maxLength="1" onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterInputRef}/>
                <button>Jogar!</button>
            </form>
        </div>
        <div className="wrongLettersContainer">
            <p>Letras já Utilizadas:</p>
            {wrongLetters.map((letter, i) => (
                <span key={i}>{letter}, </span>
            ))}
        </div>
    </div>
  )
}

export default Game