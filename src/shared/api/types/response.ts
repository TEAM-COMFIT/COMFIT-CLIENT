export interface ApiErrorResponse {
  status: number;
  code: ApiErrorCode;
  message: string;
}

// 서버 정의 에러 (임시)
export type ApiErrorCode =
  | "INVALID_ACCESS_TOKEN_VALUE"
  | "EXPIRED_ACCESS_TOKEN";

export const ERROR_MESSAGE: Record<ApiErrorCode, string> = {
  INVALID_ACCESS_TOKEN_VALUE: "액세스 토큰의 값이 올바르지 않습니다.",
  EXPIRED_ACCESS_TOKEN: "액세스 토큰이 만료되었습니다. 재발급 받아주세요.",
};

// 옵셔널 타입을 필수로 지정
export type RequiredWith<T, K extends keyof T> = T & {
  [P in K]-?: T[P];
};
