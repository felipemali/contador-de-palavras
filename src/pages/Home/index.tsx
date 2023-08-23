import { useEffect, useState } from "react";

import styles from "./home.module.css";
const Home = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);
  const [sentence, setSentence] = useState("");
  const [numberOfChaars, setNumberOfChars] = useState(0);
  const [text, setText] = useState("");
  const [resultWords, setResultWords] = useState(0);

  const stopwords = ["de", "da", "do", "em", "para", "com", "um", "uma"];

  //useEffect para caracteres
  useEffect(() => {
    const size = sentence.length;
    setNumberOfChars(size);
  }, [sentence]);

  //useEffect para soma dos numeros
  useEffect(() => {
    const sum = number1 + number2;
    setTotal(sum);
  }, [number1, number2]);

  //useEffetct para quantidade de palavras
  useEffect(() => {
    const words = text
      .trim()
      .split(/\s+/)
      .filter(
        (word) => word.length >= 3 && !stopwords.includes(word.toLowerCase())
      );
    const totalWords = words.length;
    setResultWords(totalWords);
  }, [text]);

  return (
    <div className={styles.container}>
      <div className={styles.containerSum}>
        <textarea
          id="number1"
          onChange={(e) => setNumber1(Number(e.target.value))}
          value={number1}
        />
        <span className={styles.total}>+</span>
        <textarea
          id="number2"
          onChange={(e) => setNumber2(Number(e.target.value))}
          value={number2}
        />

        <span className={styles.total}>total = {total}</span>
      </div>

      <div className={styles.containerQntyCharacter}>
        <textarea
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
          placeholder="digite algo..."
        />

        <span>Quantidade de caracteres = {numberOfChaars}</span>
      </div>

      <div className={styles.containerQntyWords}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="digite algo..."
        />

        <span>Quantidade de palavras = {resultWords}</span>
      </div>
    </div>
  );
};

export default Home;
