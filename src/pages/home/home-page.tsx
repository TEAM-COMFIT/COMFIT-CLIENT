import { CompanyIssue } from "@/features/company-detail";
import KERORO from "@images/comfit_web_status.jpg";

import { appContainer } from "./home-page.css";

const HomePage = () => {
  return (
    <div className={appContainer}>
      <h1>프리텐다드</h1>
      <p>카카오로 시작하기</p>
      <img src={KERORO} alt="Keroro" width={400} />

      <section aria-label="최근 6개월 주요 이슈 및 마케팅 캠페인">
        <CompanyIssue
          href="https://github.com/TEAM-COMFIT/COMFIT-CLIENT"
          date="2024.12"
          title="콘텐츠 포맷 다각화"
          description="CJ ENM은 OTT 시청 환경 변화에 대응해 기존 방송 편성 중심 콘텐츠 외에도 숏폼·디지털 전용 콘텐츠 포맷을 확대하고 있다. 특히 일부 콘텐츠는 방송 편성과 분리된 디지털 플랫폼 우선 배포를 전제로 기획되며, 플랫폼별 소비 특성에 맞춘 포맷 실험이 진행되고 있다."
        />

        <CompanyIssue
          href="https://github.com/TEAM-COMFIT/COMFIT-SERVER"
          date="2024.12"
          title="글로벌 콘텐츠 IP 확장 전략"
          description="CJ ENM은 자체 제작 콘텐츠의 해외 유통을 확대하며, 글로벌 플랫폼과의 협업을 통해 콘텐츠 IP의 포맷 수출 및 글로벌 동시 공개 사례를 늘리고 있다. 이를 통해 국내 시장 중심의 콘텐츠 유통 구조를 넘어, 글로벌 시장을 고려한 제작·유통 전략을 지속적으로 강화하고 있다."
        />

        <CompanyIssue
          href="https://github.com/TEAM-COMFIT/COMFIT-CLIENT"
          date="2024.12"
          title="글로벌 공동 제작 프로젝트 확대"
          description="글로벌 제작사 및 플랫폼과의 공동 제작 프로젝트를 통해 제작 초기 단계부터 해외 시장을 고려한 협업 모델을 확대하고 있다. 일부 프로젝트는 국내 방영 이후 해외 유통이 아닌, 글로벌 공개를 전제로 제작 구조를 설계하는 방식으로 진행되고 있다."
        />
      </section>

      <p>하하코드래빗아 한번일해보거라</p>
    </div>
  );
};

export { HomePage };
