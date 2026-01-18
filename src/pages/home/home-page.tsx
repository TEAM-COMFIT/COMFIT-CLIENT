import { useState } from "react";

import { DatePicker } from "@/features/experience-detail/ui/date-picker/date-picker";
import { RefreshButton } from "@/widgets/refresh-button/refresh-button";
import KERORO from "@images/comfit_web_status.jpg";

import { appContainer } from "./home-page.css";
const HomePage = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  return (
    <div className={appContainer}>
      <DatePicker
        label="시작일"
        selectedDate={startDate}
        onChangeSelectedDate={(date) => setStartDate(date)}
        placeholder="시작일"
        // prevMonthIcon={<img src={...} alt="" />}  // 이미지로 커스텀 가능
        // nextMonthIcon={<img src={...} alt="" />}  // 이미지로 커스텀 가능
      />
      <h1>프리텐다드</h1>
      <p>카카오로 시작하기</p>
      <img src={KERORO} alt="Keroro" width={400} />
      <RefreshButton onClick={() => console.log("getAPI 이곳에 넘길 예정")} />
    </div>
  );
};

export { HomePage };
