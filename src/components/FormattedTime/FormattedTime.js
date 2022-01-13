import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {
   const formatTime = () => {

    
    const getSeconds = `0${(time % 60)}`.slice(-2)
    const minutes = `${Math.floor(time / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const microSeconds = `${(time)}`
    const getMicroSeconds = `0${microSeconds}`

    return `${getMinutes} : ${getSeconds} : ${getMicroSeconds}` 
   };

  return (
    <div className={styles.timer}>
       {formatTime(time)}
    </div>
  );

};

export default FormattedTime;