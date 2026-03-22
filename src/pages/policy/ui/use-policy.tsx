import { TERMS_OF_USE, type Chapter, type Chapters } from "@/shared/config";

import * as styles from "../policy-page.css";

export const UsePolicy = () => {
  return TERMS_OF_USE.map((policy: Chapters) => {
    return (
      <section
        key={policy.chapterTitle}
        className={styles.flexColumn({ gap: 8 })}
      >
        <h2 className={styles.textStyle({ type: "title1" })}>
          {policy.chapterTitle}
        </h2>

        <div>
          {policy.chapter.map((chapter: Chapter) => (
            <article key={chapter.title}>
              {chapter.title && (
                <h3 className={styles.textStyle({ type: "title3" })}>
                  {chapter.title}
                </h3>
              )}
              <div className={styles.content}>
                {chapter.contents.map((content, idx) => (
                  <p key={idx}>{content}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  });
};
