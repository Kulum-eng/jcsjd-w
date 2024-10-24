import React from 'react';
import { FaQrcode } from 'react-icons/fa6';
import styles from './Balance.module.css';

const Balance: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Animated Waves */}
        <div className={`${styles.wave} ${styles.wave1}`}></div>
        <div className={`${styles.wave} ${styles.wave2}`}></div>
        <div className={`${styles.wave} ${styles.wave3}`}></div>

        {/* Card Content */}
        <div className={styles.textContent}>
          <h3 className={styles.title}>Total Balance</h3>
          <h1 className={styles.balanceAmount}>$12,356.00</h1>
          <div className={styles.details}>
            <article className={styles.percentage}>3.06 %</article>
            <FaQrcode color="#fff" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
