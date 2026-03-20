import { TERMS_OF_USE, type Chapter, type Chapters } from "@/shared/config";
import { Button, Modal } from "@/shared/ui";

import * as styles from "./use-policy-modal.css";

interface modalProps {
  onClose: () => void;
}

export const UsePolicyModal = ({ onClose }: modalProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.modalHeader}>
        <div>이용약관</div>
        <div className={styles.buttonWrapper}>
          <Modal.XButton />
        </div>
      </div>
      <Modal.Content>
        <div className={styles.modalCotent}>
          {TERMS_OF_USE.map((policy: Chapters) => {
            return (
              <section key={policy.chapterTitle}>
                <h2 className={styles.title}>{policy.chapterTitle}</h2>

                {policy.chapter.map((chapter: Chapter) => (
                  <article key={chapter.title}>
                    {chapter.title && (
                      <h3 className={styles.subTitle}>{chapter.title}</h3>
                    )}
                    <div className={styles.content}>{chapter.contents}</div>
                  </article>
                ))}
              </section>
            );
          })}
        </div>
      </Modal.Content>
      <Modal.Buttons>
        <Button variant="primary" size="full" onClick={onClose}>
          확인
        </Button>
      </Modal.Buttons>
    </div>
  );
};
