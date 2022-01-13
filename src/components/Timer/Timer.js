import styles from './Timer.module.scss';
import Button from '../Button/Button';
import FormattedTime from '../FormattedTime/FormattedTime';
import { useState, useRef } from "react";


const Timer = () => {

  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const countRef = useRef(null)

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(true)
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handlePause = () => {
    clearInterval(countRef.current)
    setIsPaused(false)
  }

  const handleReset = () => {
    clearInterval(countRef.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  }

  return (
    <div className={styles.timer}>
      <FormattedTime time={timer}/>
      <Button action={handleStart}>Start</Button>
      <Button action={handlePause}>Pause</Button>
      <Button action={handleReset}>Reset</Button>
    </div>
  );
}

export default Timer;