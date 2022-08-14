import styles from "./timer.module.css";
import React, { useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(-1);
  const [time, setTime] = useState(0);
  const [complete, setComplete] = useState(false);

  const timerBtnHandler = (e) => {
    let sec = e.currentTarget.dataset.sec;
    setTime(sec);
    const a = timerSetting(sec);
    setTimer(a);
    console.log(a, timer);
  };

  const timerSetting = (sec) => {
    if (timer !== -1) {
      stopTimer();
    }
    return setInterval(() => {
      setTime(--sec);
      if (sec === 0) {
        stopTimer();
        setComplete(true);
        setTimeout(() => {
          setComplete(false);
        }, 3000);
      }
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timer);
    setTimer(-1);
  };

  const settingTimeStr = () => {
    const h = Number.parseInt(time / (60 * 60));
    const m = Number.parseInt((time / 60) % 60);
    const s = Number.parseInt(time % 60);
    return `${String(h).padStart(2, "0")}:${String(m).padStart(
      2,
      "0"
    )}:${String(s).padStart(2, "0")}`;
  };

  return (
    <div className={`${styles.timerContainer} ${complete && styles.complete}`}>
      <span className={styles.timer}>{settingTimeStr()}</span>
      <div className={styles.btnContainer}>
        <button
          className={styles.timerBtn}
          onClick={timerBtnHandler}
          data-sec={1}
        >
          1초
        </button>
        <button
          className={styles.timerBtn}
          onClick={timerBtnHandler}
          data-sec={2}
        >
          2초
        </button>
        <button
          className={styles.timerBtn}
          onClick={timerBtnHandler}
          data-sec={3}
        >
          3초
        </button>
      </div>
    </div>
  );
};

export default Timer;
