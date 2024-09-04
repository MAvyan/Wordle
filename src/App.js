import { useEffect, useState } from "react";
import './index.css'; // Import your Tailwind CSS here
import Keyboard from "./Components/Board/Keyboard";
import Board from "./Components/Board/Board";
import Header from "./Components/Header";
import GlobalStyles from "./GlobalStyles";
import Status from "./Status";

const App = () => {

  const [word, setWord] = useState([]);
  const [counter, setCounter] = useState(1);
  const [letters, setLetters] = useState([]);
  const [guessedLetter, setGuessedLetter] = useState([]);
  const [colorRoadMap, setColorRoadMap] = useState([]);
  const [gameStatus, setGameStatus] = useState({
    hasWon: false,
    hasLost: false,
  });

  useEffect(() => {
    fetch(`https://random-word-api.vercel.app/api?words=1&length=5
    `)
      .then((res) => res.json())
      .then((data) => {
        setWord(data[0].toUpperCase().split(""));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [gameStatus]);
  console.log(word);
  return (
    <>
      <GlobalStyles />
      {counter === 7 ? (
        <Status
          setCounter={setCounter}
          setLetters={setLetters}
          setColorRoadMap={setColorRoadMap}
          setGameStatus={setGameStatus}
          gameStatus={gameStatus}
          text={"You Lost !"}
          hasWhat={"hasLost"}
        />
      ) : gameStatus.hasWon ? (
        <Status
          setCounter={setCounter}
          setLetters={setLetters}
          setColorRoadMap={setColorRoadMap}
          setGameStatus={setGameStatus}
          gameStatus={gameStatus}
          text={"You Won !"}
          hasWhat={"hasWon"}
        />
      ) : (
        <>
          <Header />
          <Board
            guessedLetter={guessedLetter}
            colorRoadMap={colorRoadMap}
            letterArray={letters}
            counter={counter}
          />
          <Keyboard
            guessedLetter={guessedLetter}
            setGuessedLetter={setGuessedLetter}
            word={word}
            setColorRoadMap={setColorRoadMap}
            colorRoadMap={colorRoadMap}
            setLetters={setLetters}
            letterArray={letters}
            counter={counter}
            setCounter={setCounter}
            setGameStatus={setGameStatus}
            gameStatus={gameStatus}
          />
        </>
      )}
    </>
  );
};

export default App;
