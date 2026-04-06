import { ROUTES } from "@/app/routes/paths";
import { FooterLogo, InstagramLogo } from "@/shared/assets/images";

import * as styles from "./footer.css";

export const Footer = () => {
  return (
    <footer className={styles.footerLayout}>
      <img src={FooterLogo} alt="Comfit Logo" className={styles.footerLogo} />
      <div className={styles.policyContainer}>
        <div className={styles.policyRow}>
          <a className={styles.policyItem} href={ROUTES.POLICY_USE}>
            이용약관
          </a>
          <a className={styles.policyItem} href={ROUTES.POLICY_PRIVACY}>
            개인정보처리방침
          </a>
          <p className={styles.policyItem}>제휴문의</p>
        </div>

        <div className={styles.policyRow}>
          <p className={styles.policyItem}>이메일 comfit0125@gmail.com</p>
          <a
            href="https://www.instagram.com/comfit_official/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.policyItem}
          >
            <img
              src={InstagramLogo}
              alt="Instagram"
              className={styles.instagramIcon}
            />
          </a>
        </div>
      </div>
      <small className={styles.footerCopyright}>
        ⓒ 2026 Comfit. All rights reserved.
      </small>
    </footer>
  );
};
