import { POINT_CARD_ITEMS } from "../../config/point-card.constant";

import * as styles from "./point-card.css";

export const PointCard = () => {
  return (
    <div className={styles.layout}>
      {POINT_CARD_ITEMS.map((point) => (
        <section className={styles.container}>
          <div className={styles.header}>
            <span className={styles.title}>{point.title}</span>
            <span className={styles.blueTitle}>{point.blueTitle}</span>
          </div>
          <span className={styles.description}>{point.content}</span>
        </section>
      ))}
    </div>
  );
};
