import type { ExperienceEntity } from "../types/experience-detail.types";

export const EXPERIENCE_MOCK: ExperienceEntity = {
  experienceId: 1,
  title: "인스타그램 마케팅 캠페인 기획 및 실행",
  type: "INTERNSHIP",
  startAt: "2025-12-23",
  endAt: "2025-12-28",
  situation:
    "예) 대학생 마케팅 동아리에서 신규 브랜드 인지도를 높이기 위한 프로젝트를 진행함.",
  task: "예) 한정된 예산 안에서 브랜드 메시지를 효과적으로 전달할 콘텐츠 방향을 설정해야 했음.",
  action:
    "예) 초기에는 트렌디한 이미지 위주의 콘텐츠를 기획했으나, 게시 후 반응을 분석한 결과 조회 수 대비 브랜드 인지 반응이 낮다고 판단함. 이에 메시지 전달이 명확한 짧은 영상 포맷으로 방향을 조정함.",
  result:
    "예) 캠페인 종료 시 브랜드 계정 팔로워 수가 약 25% 증가했고, 댓글에서 브랜드 언급 비율이 눈에 띄게 높아짐. 이 결과를 통해 콘텐츠 성과를 단순 수치가 아니라 메시지 전달 관점에서 해석하는 중요성을 배움.",
  isDefault: true,
};
