import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){

  const contextData = useContext(ChallengesContext);

  console.log(contextData)

  const hasActiveChallenge = true;

  return(
    <div className={styles.challengeBoxContainer}>
      { hasActiveChallenge ? (
        <div className={styles.challengActive}>
          <header>Ganhe 400xp</header>

          <main>
            <img src="icons/body.svg"/>
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos</p>
          </main>


          <footer>
            <button 
            type="button"
            className={styles.challengeFailedButton}
            >
              Falhei
            </button>

            <button 
            type="button"
            className={styles.challengeSuccedButton}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        
        <div className={styles.challengeNotActive}>
        <strong>
          Finalize um ciclo para receber um desafio
        </strong>

        <p>
          <img src="icons/level-up.svg" alt="Level up"/>
          Avançe de level completando desafios.
        </p>


      </div>
      ) }

    </div>
   ) 
}