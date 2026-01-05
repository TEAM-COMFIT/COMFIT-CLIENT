import KERORO from "@images/comfit_web_status.jpg";
import Heart from "@icons/heart.svg?react";
import { appContainer } from "./home-page.css";

const HomePage = () => {
  return (
    <div className={appContainer}>
      <h1>Welcome to the Home Page</h1>
      <img src={KERORO} alt="Keroro" width={400} />
      <Heart aria-label="좋아요" />
    </div>
  );
};

export { HomePage };
