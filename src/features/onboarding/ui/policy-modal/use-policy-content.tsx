import { TERMS_OF_USE, type Chapters, type Chapter } from "@/shared/config";

import * as styles from "./policy-modal.css";

export const UsePolicyContent = () => {
  return TERMS_OF_USE.map((policy: Chapters) => {
    return (
      <section key={policy.chapterTitle}>
        <h2 className={styles.title}>{policy.chapterTitle}</h2>

        {policy.chapter.map((chapter: Chapter) => (
          <article key={chapter.title}>
            {chapter.title && (
              <h3 className={styles.subTitle}>{chapter.title}</h3>
            )}
            <div className={styles.content}>
              {chapter.contents.map((content) => (
                <p>{content}</p>
              ))}
            </div>
          </article>
        ))}
      </section>
    );
  });
};
