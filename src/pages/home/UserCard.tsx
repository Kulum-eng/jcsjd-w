// UserCard.tsx
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import { MdHandshake } from 'react-icons/md';
import { TiUserDelete } from 'react-icons/ti';
import styles from './UserCard.module.css'; // Importamos el CSS modular

interface UserData {
  id: number;
  name: string;
  profession: string;
  skills: string[];
  image: string;
}

interface UserCardProps {
  userData: UserData;
}

const UserCard: React.FC<UserCardProps> = ({ userData }) => {
  const { id, name, profession, skills, image } = userData;

  return (
    <div className={styles.container}>
      <AnimatePresence>
        <motion.article
          key={id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className={styles.card}
        >
          {/* Header con imagen, nombre y habilidades */}
          <div className={styles.header}>
            <div className={styles.imageContainer}>
              <img className={styles.image} src={image} alt={name} />
            </div>

            <div className={styles.info}>
              <div className={styles.skills}>
                {skills.map((skill, index) => (
                  <div key={index} className={styles.skill}>
                    {skill}
                  </div>
                ))}
              </div>

              <div className={styles.nameContainer}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.profession}>{profession}</p>
              </div>
            </div>

            {/* Rating */}
            <div className={styles.rating}>
              <FaStar size={20} color="#FACC15" />
              <h3 className={styles.ratingText}>5.1</h3>
            </div>
          </div>

          {/* Descripción del usuario */}
          <article className={styles.description}>
            <p>
              Diseñador UI/UX con 5 años de experiencia en diseño de
              aplicaciones móviles y web. Especializado en crear interfaces
              intuitivas y atractivas que mejoran la experiencia del usuario.
            </p>
          </article>

          <hr />

          {/* Acciones: Solicitar y Eliminar */}
          <div className={styles.actions}>
            <button className={styles.requestButton}>
              <MdHandshake size={18} />
              Solicitar
            </button>

            <button className={styles.deleteButton}>
              <TiUserDelete size={18} />
              Eliminar
            </button>
          </div>
        </motion.article>
      </AnimatePresence>
    </div>
  );
};

export default UserCard;
