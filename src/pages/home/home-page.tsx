import { useState } from "react";

import { Textfield } from "@/shared/ui/textfield";
import KERORO from "@images/comfit_web_status.jpg";

import { appContainer } from "./home-page.css";

const HomePage = () => {
  const [description, setDescription] = useState("");
  const isEdit = true;

  return (
    <div className={appContainer}>
      <h1>프리텐다드</h1>
      <p>카카오로 시작하기</p>
      <img src={KERORO} alt="Keroro" width={400} />
      <Textfield
        type="jobDescription"
        placeholder="자기소개를 입력해주세요."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        mode={isEdit ? "edit" : "view"}
      />
      <p>하하코드래빗아 한번일해보거라</p>
    </div>
  );
};

export { HomePage };
