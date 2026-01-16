import { useState } from "react";

import { Toggle } from "@/shared/ui";
import KERORO from "@images/comfit_web_status.jpg";

import { appContainer, toggleGroup } from "./home-page.css";

const HomePage = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);
  const [isToggleOff, setIsToggleOff] = useState(false);

  return (
    <div className={appContainer}>
      <h1>프리텐다드</h1>

      <div className={toggleGroup}>
        <Toggle checked={isToggleOn} onCheckedChange={setIsToggleOn} />
        <Toggle checked={isToggleOff} onCheckedChange={setIsToggleOff} />
      </div>

      <p>카카오로 시작하기</p>
      <img src={KERORO} alt="Keroro" width={400} />
      <p>하하코드래빗아 한번일해보거라</p>
    </div>
  );
};

export { HomePage };
