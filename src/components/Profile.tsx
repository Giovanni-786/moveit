import styles from '../styles/components/Profile.module.css'


export function Profile(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://scontent.fbau1-1.fna.fbcdn.net/v/t1.0-9/138048897_3704304653012383_2792179460916752508_o.jpg?_nc_cat=105&ccb=3&_nc_sid=8bfeb9&_nc_ohc=zZGrXpQgvboAX8qqekG&_nc_ht=scontent.fbau1-1.fna&oh=2e2e3ed1bbc0a6ca6dd1c03f5e424833&oe=605CA59C" alt="Diego"/>
         
            <div>
                <strong>Giovanni Lima</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                    
                </p>
            </div>
         </div>
    )
}