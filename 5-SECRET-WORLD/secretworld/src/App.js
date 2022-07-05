//CSS
import './App.css';

//React
import { useCallback, useEffect, useState } from 'react';

//data
import {wordsList} from './data/words';

//Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id:1, name:"start"},
  {id:2, name:"game"},
  {id:3, name:"end"}
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickedWordAndPickedCategory = useCallback(() =>{
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return {word, category};
  },[words])

  const startGame = useCallback(() =>{

    //clear letters states
    clearLettersStates();

    const {word, category} = pickedWordAndPickedCategory();

    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    // fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  },[pickedWordAndPickedCategory])



  const verifyLetter = (letter) =>{
    const normalizedLetter = letter.toLowerCase();

    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
        return;
    }

    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) =>[
        ...actualGuessedLetters, normalizedLetter
      ]);

    }else{
      setWrongLetters((actualWrongLetters)=>[
        ...actualWrongLetters, normalizedLetter
      ]);

      setGuesses((actualGuessed) => actualGuessed - 1);
    }
  }

  const clearLettersStates = () =>{
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  //Munitora um dados semper que for alterado
  useEffect(() =>{
      if(guesses <= 0){
        clearLettersStates();
        setGameStage(stages[2].name);
      }
  }, [guesses]);

  useEffect(() =>{
    const uniqueLetters = [...new Set(letters)];

    //win condition
    if(guessedLetters.length === uniqueLetters.length){
      
      //add score
      setScore((actualScore) => (actualScore += 100));

      //restart game with new word
      startGame();
    }

  },[guessedLetters,letters, startGame])

  const retry = () =>{
    setGameStage(stages[0].name)
    setScore(0);
    setGuesses(3);
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game 
      verifyLetter = {verifyLetter}
      pickedWord={pickedWord}
      pickedCategory={pickedCategory}
      letters={letters}
      guessedLetters={guessedLetters}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score}/>}
      {gameStage === 'end' && <GameOver retry={retry} score={score}/>}
    </div>
  );
}

export default App;
