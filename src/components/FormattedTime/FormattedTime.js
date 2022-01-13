import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {
  const formatTime = () => {
    
    let timeInMin = Math.floor(time / 60000)
    let moduloMin = time % 60000;
    let timeInSec = Math.floor(moduloMin / 1000);
    let timeInMs = `000${time}`.slice(-3);
    
    return `${timeInMin} : ${timeInSec} : ${timeInMs}` 
   };

  return (
    <div className={styles.timer}>
       {formatTime()}
    </div>
  );

};

export default FormattedTime;