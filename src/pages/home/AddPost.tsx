// AddPost.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import perfil from '../../assets/images/perfil.jpeg';
import Editor from './Editor';
import styles from './AddPost.module.css'; // Importar los estilos CSS

const AddPost: React.FC = () => {
  return (
    <div>
      <AnimatePresence>
        <motion.article
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className={styles.article}
        >
          <div className={styles.content}>
            <div className={styles.profileImage}>
              <img src={perfil} alt="Perfil" className={styles.image} />
            </div>

            <Editor />
          </div>
        </motion.article>
      </AnimatePresence>
    </div>
  );
};

export default AddPost;
