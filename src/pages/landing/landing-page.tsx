import { LANDING_CARD_ITEMS } from "@/features/landing/config/landing-card.constant";
import { LandingCard } from "@/features/landing/ui/landing-card/landing-card";

const LandingPage = () => {
  return (
    <div style={{ backgroundColor: "#E1E8FD" }}>
      <h1>Welcome to the Landing Page</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "3.2rem" }}>
        {LANDING_CARD_ITEMS.map((item) => (
          <LandingCard
            key={item.title}
            title={item.title}
            content={item.content}
            sideImg={item.sideImg}
          />
        ))}
      </div>
    </div>
  );
};

export { LandingPage };
