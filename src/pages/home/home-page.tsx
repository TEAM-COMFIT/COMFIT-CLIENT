import { useState } from "react";

import { DatePicker } from "@/features/experience-detail";
import { IconDash } from "@/shared/assets/icons";
import { RefreshButton } from "@/widgets/refresh-button/refresh-button";
import KERORO from "@images/comfit_web_status.jpg";

import { appContainer } from "./home-page.css";
const HomePage = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);

    // 종료일이 있고, 새로 선택한 시작일이 종료일보다 이후라면 종료일 초기화
    if (date && endDate && date > endDate) {
      setEndDate(null);
    }
  };
  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };
  return (
    <div className={appContainer}>
      <h1>프리텐다드</h1>
      <p>카카오로 시작하기</p>
      <img src={KERORO} alt="Keroro" width={400} />
      <RefreshButton onClick={() => console.log("getAPI 이곳에 넘길 예정")} />
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DatePicker
          selectedDate={startDate}
          onChangeSelectedDate={handleStartDateChange}
          placeholder="시작일"
        />
        <IconDash />
        <DatePicker
          selectedDate={endDate}
          onChangeSelectedDate={handleEndDateChange}
          placeholder="종료일"
          minDate={startDate ?? undefined}
        />
      </div>
    </div>
  );
};

export { HomePage };
