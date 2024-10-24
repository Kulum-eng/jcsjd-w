// Teams.tsx
import React from 'react';
import styles from './Teams.module.css'; // Importamos los estilos CSS

const teams = [
  { name: 'UI/UX Product Team', time: 'Justo ahora', color: 'bg-blue-100' },
  { name: 'UI/UX Product Team', time: 'Justo ahora', color: 'bg-blue-500' },
  { name: 'UI/UX Product Team', time: 'Justo ahora', color: 'bg-black' },
  { name: 'UI/UX Product Team', time: 'Justo ahora', color: 'bg-green-500' },
];

const Teams: React.FC = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Teams</h1>
          <button className={styles.moreButton}>Ver más</button>
        </div>

        {teams.map((team, index) => (
          <div key={index} className={styles.teamItem}>
            <div className={styles.teamInfo}>
              <div className={`${styles.teamIcon} ${team.color}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={styles.icon}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-3.197-2.132a1 1 0 00-1.614.789v4.26a1 1 0 001.614.79l3.197-2.133a.5.5 0 000-.844z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h2 className={styles.teamName}>{team.name}</h2>
                <p className={styles.teamTime}>{team.time}</p>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={styles.arrowIcon}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
