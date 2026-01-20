// 토스트/알림 메시지 상수
export const EXPERIENCE_MESSAGES = {
  // 유효성 검증 실패
  VALIDATION: {
    TITLE_LENGTH: "경험 제목은 2~30자로 입력해주세요",
    TYPE_REQUIRED: "경험 유형을 선택해주세요",
    DATE_FORMAT: "날짜 형식을 맞춰주세요",
    CONTENT_REQUIRED: "경험 내용을 모두 입력해주세요",
  },

  // API 실패
  API: {
    SAVE_FAILED: "경험 저장에 실패했습니다. 다시 시도해주세요",
    DELETE_FAILED: "경험 삭제에 실패했습니다. 다시 시도해주세요",
    DEFAULT_SETTING_FAILED: "기본 경험 설정에 실패했습니다",
  },

  // 성공
  SUCCESS: {
    SAVED: "경험이 저장되었습니다",
    DELETED: "경험이 삭제되었습니다",
  },
} as const;

// 기본 경험 버튼 라벨
export const DEFAULT_BUTTON_LABELS = {
  SET: "기본 경험 설정",
  UNSET: "기본 경험 해제",
} as const;
