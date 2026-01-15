import { Textbox } from "@/shared/ui/textbox/textbox";
import KERORO from "@images/comfit_web_status.jpg";

import { appContainer } from "./home-page.css";

const HomePage = () => {
  const companySummary =
    "콘텐츠 IP를 기반으로 방송/디지털/글로벌 플랫폼까지 확장하며, 장기적인 IP 가치와 브랜드 일관성을 중시하는 엔터테인먼트 기업";
  const talent =
    "자율적으로 문제를 정의하고, 다양한 이해관계와 협업하며, 결과에 대한 책임을 지는 사람";

  return (
    <main className={appContainer}>
      <h1>프리텐다드</h1>

      <Textbox type="medium">
        <p>{talent}</p>
      </Textbox>
      <Textbox type="large">{companySummary}</Textbox>

      <p>카카오로 시작하기</p>
      <img src={KERORO} alt="Keroro" width={400} />
    </main>
  );
};

export { HomePage };
