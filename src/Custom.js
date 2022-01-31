import { useState, useEffect } from "react";
import "./components/style.css";

function Custom() {
  const [counter, setCounter] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const runTimer = () => {
      const timer = setTimeout(() => {
        if (playing) {
          setCounter(counter + 1);
        }
      }, 1000);
      return () => clearTimeout(timer);
    };

    runTimer();
  }, [counter, playing]);

  return (
    <div className="container">
      <div className="text">{counter}</div>
      <div className="actions">
        <button className="action" onClick={(e) => setPlaying(!playing)}>{`${
          playing ? "Pause" : "Play"
        }`}</button>
        <button
          className="reset"
          onClick={() => {
            setCounter(0);
            setPlaying(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Custom;
