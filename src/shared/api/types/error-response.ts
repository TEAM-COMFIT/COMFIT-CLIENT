export interface ApiErrorResponse {
  status: number;
  prefix: ApiErrorCode;
  message: string;
}

// 서버 정의 에러 (임시)
export type ApiErrorCode = "EXPERIENCE_404_001";

export const ERROR_MESSAGE: Record<ApiErrorCode, string> = {
  EXPERIENCE_404_001: "해당하는 경험을 찾을 수 없습니다.",
};

// 옵셔널 타입을 필수로 지정
export type RequiredWith<T, K extends keyof T> = T & {
  [P in K]-?: T[P];
};
