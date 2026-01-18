import { WORRY_CARD_ITEMS } from "../../config/worry-card.constants";

import * as styles from "./worry-card.css";

export const WorryCard = () => {
  return (
    <>
      {WORRY_CARD_ITEMS.map((worry) => (
        <section className={styles.container}>
          <div className={styles.header}>
            <span className={styles.title}>{worry.title}</span>
            <div className={styles.iconWrapper}>
              <worry.icon />
            </div>
          </div>
          <span className={styles.description}>{worry.content}</span>
        </section>
      ))}
    </>
  );
};
