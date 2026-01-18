import { forwardRef } from "react";

import { IconX } from "@/shared/assets/icons";
import { CHARACTER } from "@/shared/assets/images";

import * as styles from "./alert-modal.css";

export const AlertModal = forwardRef<HTMLDialogElement>((_, ref) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      e.currentTarget.close();
    }
  };

  return (
    <dialog
      ref={ref}
      className={styles.container}
      onClick={handleBackdropClick}
    >
      <form method="dialog" className={styles.buttonHandler}>
        <button className={styles.closeButton}>
          <IconX />
        </button>
      </form>
      <h2 className={styles.title}>
        아직 준비 중인 기능이에요
        <br />
        정식 출시 이후 곧 이용하실 수 있어요
      </h2>
      <img src={CHARACTER} alt="준비 중" className={styles.image} />
    </dialog>
  );
});
