import type { CompanyDetail } from "@/pages/matching-detail/detail-section/detail-section";
export const formatMatchingDetail = (data: CompanyDetail): string => {
  return `
[기업 분석 보고서: ${data.companyName}]

■ 기본 정보
- 경험 제목: ${data.experienceTitle}
- 직무 설명: 
${data.jobDescription}

--------------------------------------------------

■ 분석 관점 (Perspectives)
${data.perspectives
  .map(
    (p, i) => `
${i + 1}. ${p.perspective}
   - 출처: ${p.source}
   - 이유: ${p.reason}`
  )
  .join("\n")}

--------------------------------------------------

■ 경험 연결성 (Density)
${data.density
  .map(
    (d) => `
- 관점: ${d.perspective}
- 연결 강도: ${d.connection}
- 분석: ${d.reason}`
  )
  .join("\n")}

--------------------------------------------------

■ 강조 포인트 (Appeal Points)
${data.appealPoint
  .map(
    (a) => `
[${a.element}]
- 중요성: ${a.importance}
- STAR 단계: ${a.starPhase} / 위치: ${a.placement}
- 작성 방향: ${a.direction}`
  )
  .join("\n")}

--------------------------------------------------

■ 종합 제안 (Suggestions)
${data.suggestion}

■ 단계별 가이드 (Guidance)
${data.guidance}
    `.trim();
};
