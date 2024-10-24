// UserPos.tsx
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./UserPos.module.css"; // Importamos el CSS modular

const posts = [
  {
    id: 1,
    title: "Diseñador Gráfico para Logo",
    description: "Se requiere diseñador para crear logo de empresa",
    price: "$300",
    duration: "1 semana",
    urgent: true,
  },
  {
    id: 2,
    title: "Diseñador de Branding",
    description: "Proyecto de branding para startup",
    price: "$600",
    duration: "3 semanas",
    urgent: true,
  },
  {
    id: 3,
    title: "Diseñador UX/UI para App Móvil",
    description: "Buscamos diseñador UX/UI para app de fitness",
    price: "$500",
    duration: "2 semanas",
    urgent: false,
  },
];

const UserPos: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Post</h1>
        <button className={styles.viewMore}>Ver más</button>
      </div>

      <AnimatePresence>
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: post.id * 0.1, duration: 0.6 }}
            exit={{ opacity: 0, x: -20 }}
            className={styles.postCard}
          >
            <div>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.postDescription}>{post.description}</p>
              <div className={styles.tags}>
                <span className={styles.priceTag}>{post.price}</span>
                <span className={styles.durationTag}>{post.duration}</span>
                {post.urgent && (
                  <span className={styles.urgentTag}>Urgente</span>
                )}
              </div>
            </div>
            <div className={styles.buttons}>
              <button className={styles.requestButton}>Solicitar</button>
              <button className={styles.moreInfoButton}>Ver más</button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default UserPos;
