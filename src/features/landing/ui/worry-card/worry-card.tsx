import { motion } from "framer-motion";

import { WORRY_CARD_ITEMS } from "../../config/worry-card.constants";

import * as styles from "./worry-card.css";

export const WorryCard = () => {
  return (
    <>
      {WORRY_CARD_ITEMS.map((worry, index) => {
        const Index = index as 0 | 1 | 2;
        return (
          <motion.section
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0, margin: "0px 0px -100px 0px" }}
            transition={{
              ease: [0.25, 0.4, 0.25, 1],
              duration: 2,
              delay: index * 0.3,
            }}
            key={worry.title}
            className={`${styles.containerBase} ${styles.containerVariants[Index]}`}
          >
            <div className={styles.header}>
              <span className={styles.title}>{worry.title}</span>
              <div className={styles.iconWrapper}>
                <worry.icon />
              </div>
            </div>
            <span className={styles.description}>{worry.content}</span>
          </motion.section>
        );
      })}
    </>
  );
};
