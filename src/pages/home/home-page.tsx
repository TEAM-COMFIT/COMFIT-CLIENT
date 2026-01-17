
import { useState } from "react";

import { Toggle } from "@/shared/ui";

import { appContainer, toggleGroup } from "./home-page.css";


import { RefreshButton } from "@/widgets/refresh-button/refresh-button";
import KERORO from "@images/comfit_web_status.jpg";

const HomePage = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const handleToggleChange = (checked: boolean) => {
    setIsToggleOn(checked);
  };

  return (
    <div className={appContainer}>
      <h1>프리텐다드</h1>

      <div className={toggleGroup}>
        <Toggle checked={isToggleOn} onCheckedChange={handleToggleChange} />
      </div>

      <p>카카오로 시작하기</p>
      <img src={KERORO} alt="Keroro" width={400} />
      <RefreshButton onClick={() => console.log("getAPI 이곳에 넘길 예정")} />
    </div>
  );
};

export { HomePage };
