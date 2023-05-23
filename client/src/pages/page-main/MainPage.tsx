import styles from './mainPageStyles.ts';
import {ChangeEvent, useState} from "react";
import {Word} from "../../../../server/src/model/model_word.ts";
import axios from "axios";
import BASE_URL from "../../constants/base_url.ts";

const MainPage = () => {
  /////////////////////////
  // STATES
  /////////////////////////
  const [words, setWords] = useState<Word[] | null>(null)
  const [showAllWords, setShowAllWords] = useState(false);
  const [currentWord, setCurrentWord] = useState<Word | null>(null);

  const [userInput, setUserInput] = useState('');

  /////////////////////////
  // UTILS
  /////////////////////////
  const shuffleWords = (words: Word[]): Word[] => {
    const newWords = [...words];
    for (let i = newWords.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newWords[i], newWords[j]] = [newWords[j], newWords[i]];
    }
    return newWords;
  }

  const fetchAllWords = async () => {
    if (!words) {
      const response = await axios.get(`${BASE_URL}/AllWords`)

      const data = await response.data;

      await setWords(data as Word[]);

      return await data;
    }
  }

  const startPlay = () => {
    new Promise(resolve => resolve(void 1))
      .then(() => {
        if (!words) {
          return fetchAllWords()
        } else {
          return words;
        }
      })
      .then((data) => {
        const shuffled = shuffleWords(data);
        setWords(shuffled);
        return shuffled[0]
      })
      .then(word => setCurrentWord(word));
  }
  /////////////////////////
  // HANDLERS
  /////////////////////////

  const handleShowAllWords = () => {
    if (!words) {
      fetchAllWords()
        .then(() => setShowAllWords(val => !val));
    } else {
      setShowAllWords(val => !val)
    }
  }

  const handleUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value)
  }

  const handleCheckResult = () => {
    const isMatched = currentWord?.keys?.find((key) => {
      return key.toLowerCase() === userInput.toLowerCase();
    })

    if (isMatched) {
      window.alert('CURRENT!')
    } else {
      window.alert(`${userInput} is not a ${currentWord?.name}. Try again`)
    }
  }
  return (
    <div style={styles.main}>
      <button style={styles.btn} onClick={handleShowAllWords}>Show all words</button>
      <button style={styles.btn} onClick={startPlay}>Play</button>
      {/* all words */}
      <ul>
        {showAllWords && words && words.map(word => {
          return (<li key={word.name}>{word.name}</li>)
        })}
      </ul>

      {/* play box */}
      {currentWord && (<div style={styles.playground}>
        <span>{currentWord.name}</span>
        <input type='text' onChange={handleUserInput}/>
        <button onClick={handleCheckResult}>OK</button>
      </div>)}
    </div>
  )
}

export default MainPage;
