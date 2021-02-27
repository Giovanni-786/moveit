import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css'

let countDownTimeOut: NodeJS.Timeout;


export function Countdown(){    

    const contextData = useContext(ChallengesContext)


    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setisActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false)


    const minutes  = Math.floor(time/60);
    const seconds = time % 60;



    const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('');

    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    function startCountDown(){
        setisActive(true)
    }

    function resetCountDown(){
        clearTimeout(countDownTimeOut)
        setisActive(false);
        setTime(0.1*60)
    }

    useEffect(() => {
        if(isActive && time > 0){
            countDownTimeOut = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        }else if (isActive && time == 0){
            setHasFinished(true)
            setisActive(false)
        }
    }, [isActive, time])


    return(

       <div> 
        <div className={styles.countdownContainer}>
            <div>
                <span>{minutesLeft}</span>
                <span>{minutesRight}</span>
            </div>

             <span>:</span>

             <div>
                <span>{secondsLeft}</span>
                <span>{secondsRight}</span>
            </div>
        </div>

        { hasFinished ? (
                   
            <button
                disabled 
                 
                className={styles.countdownButton}
                
            >
                Ciclo encerrado 
            </button>

        ) : (
          <>
             { isActive ? (
             
             <button 
             type="button" 
             className={styles.countdownButton}
             onClick={resetCountDown}
             >
                 
              Abandonar ciclo 
             </button>
     
             ) : (
                 <button 
                 type="button" 
                 className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                 onClick={startCountDown}
                 >
                     Iniciar ciclo
         
                 </button>
             )}
     

          </>
        )}


       


       
        </div>
    );
}