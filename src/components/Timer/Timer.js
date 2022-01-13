import styles from './Timer.module.scss';
import Button from '../Button/Button';
import FormattedTime from '../FormattedTime/FormattedTime';
import { useState, useEffect } from "react";


const Timer = () => {

  const [timeValue, setTimeValue] = useState(0);
  const [timer, setTimer] = useState(null);

  const handleStart = () => {
    timer && clearInterval(timer);
    setTimer(setInterval(() => {
      setTimeValue((value) => value + 10)
    }, 10));
  };

  const handlePause = () => {
   clearInterval(timer)
  }

  const handleReset = () => {
    clearInterval(timer);
    setTimer(null);
    setTimeValue(0);
  }

  useEffect(() => {
    return () => {
      clearInterval(timer)
      setTimer(null);
    };
  }, []);


  return (
    <div className={styles.timer}>
      <FormattedTime time={timeValue}/>
      <Button action={handleStart}>Start</Button>
      <Button action={handlePause}>Pause</Button>
      <Button action={handleReset}>Reset</Button>
    </div>
  );
}

export default Timer;