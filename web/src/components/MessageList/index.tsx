import { useEffect } from 'react';
import { api } from '../../services/api'

import styles from './styles.module.scss';

import logoImg from '../../assets/logo.svg';

export function MessageList() {
  useEffect(() => {
    api.get('messages/last3').then(response => {
      console.log(response.data);
    })
  }, [])

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>Não vejo a hora de começar o evento, com certeza vai
            ser o melhor</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/renanvzd.png" alt="Renan Veronez" />
            </div>
            <span>Renan Veronez</span>
          </div>
        </li>
      </ul>
    </div>
  )
}