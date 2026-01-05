import { isAxiosError } from "axios";

import { ERROR_MESSAGE } from "@/shared/api/types/response";

import type {
  ApiErrorResponse,
  ApiErrorCode,
  RequiredWith,
} from "@/shared/api/types/response";
import type { AxiosError } from "axios";

// 서버 정의 에러 타입 가드
// 서버가 보낸 에러가 맞는지 확인하는 함수
export const isAxiosErrorWithCustomCode = (
  error: unknown
): error is RequiredWith<AxiosError<ApiErrorResponse>, "response"> => {
  return (
    isAxiosError(error) &&
    !!error.response &&
    !!error.response.data &&
    typeof error.response.data.code === "string" &&
    error.response.data.code in ERROR_MESSAGE
  );
};

// 공통 에러 핸들러
export const handleApiError = (error: unknown) => {
  if (isAxiosErrorWithCustomCode(error)) {
    const { code } = error.response.data;
    const message = ERROR_MESSAGE[code as ApiErrorCode];
    console.error(message);
    return message;
  } else if (isAxiosError(error)) {
    console.error("서버/네트워크 오류입니다");
    // TODO: 에러 페이지 필요
  } else {
    console.error("알 수 없는 에러 발생");
    // TODO: 에러 페이지 필요
  }
};
