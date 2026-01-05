import KERORO from "@images/comfit_web_status.jpg";
import Heart from "@icons/heart.svg?react"

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <img src={KERORO} alt="Keroro" />
      <Heart aria-label= "좋아요" />
    </div>
  );
};

export { HomePage };
