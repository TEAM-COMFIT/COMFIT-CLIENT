import { isAxiosError } from "axios";

import { ERROR_MESSAGE } from "@/shared/api/types/error-response";

import type {
  ApiErrorResponse,
  ApiErrorCode,
  RequiredWith,
} from "@/shared/api/types/error-response";
import type { AxiosError } from "axios";

/**
 * 서버 정의 에러(Business Error) 타입 가드
 * - 서버가 정의한 error payload 식별
 * - 응답 본문(data)에 'prefix' 필드가 있는지 확인합니다. (추후 TODO)
 */
export const isValidCustomError = (
  error: unknown
): error is RequiredWith<AxiosError<ApiErrorResponse>, "response"> => {
  return (
    isAxiosError(error) &&
    !!error.response &&
    !!error.response.data &&
    typeof error.response.data.prefix === "string"
  );
};

// 요청 종류 구분 (UI 피드백 방식을 결정하기 위함)
type ErrorType = "query" | "mutation";

/**
 * API 공통 에러 핸들러
 * @param error 발생한 에러 객체
 * @param type 요청 종류 ('query': 조회 -> 에러페이지 / 'mutation': 수정 -> 토스트)
 */
export const handleApiError = (error: unknown, type: ErrorType) => {
  if (isValidCustomError(error)) {
    const { prefix } = error.response.data;
    const message =
      ERROR_MESSAGE[prefix as ApiErrorCode] ??
      "알 수 없는 에러가 발생했습니다.";

    console.error(message);
    if (type == "mutation") {
      // TODO: toast 메시지 handleApiError 내부처리 or message return 후 컴포넌트에서 처리
      return message;
    }
  } else if (isAxiosError(error)) {
    console.error("서버/네트워크 오류입니다");
    // TODO: 에러 페이지 필요
  } else {
    console.error("알 수 없는 에러 발생");
    // TODO: 에러 페이지 필요
  }
};
