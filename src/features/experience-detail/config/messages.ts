export const EXPERIENCE_MESSAGES = {
  VALIDATION: {
    TITLE_LENGTH: {
      title: "제목을 입력해 주세요",
      description: "경험을 구분할 수 있도록 제목이 2글자 이상 필요해요",
    },
    TYPE_REQUIRED: {
      title: "경험 유형을 선택해 주세요",
      description: "이 경험에 해당하는 유형을 하나 선택해 주세요",
    },
    DATE_FORMAT: {
      title: "기간을 선택해 주세요",
      description: "경험이 진행된 기간을 선택해 주세요",
    },

    SITUATION_REQUIRED: {
      title: "30자 이상 입력해 주세요",
      description: "상황을 더 자세히 작성해 주세요",
    },
    TASK_REQUIRED: {
      title: "30자 이상 입력해 주세요",
      description: "과제를 구체적으로 작성해 주세요",
    },
    ACTION_REQUIRED: {
      title: "40자 이상 입력해 주세요",
      description: "행동이 충분히 설명되지 않았어요",
    },
    RESULT_REQUIRED: {
      title: "30자 이상 입력해 주세요",
      description: "결과를 더 명확히 작성해 주세요",
    },

    CONTENT_MAX_EXCEEDED: {
      title: "글자 수를 초과했어요",
      description: "입력 가능한 최대 글자 수를 초과했어요",
    },
  },

  API: {
    SAVE_FAILED: "경험 저장에 실패했습니다. 다시 시도해주세요",
    DELETE_FAILED: "경험 삭제에 실패했습니다. 다시 시도해주세요",
    DEFAULT_SETTING_FAILED: "기본 경험 설정에 실패했습니다",
  },

  SUCCESS: {
    SAVED: "경험이 저장되었어요",
    DELETED: "경험이 삭제되었어요",
  },
} as const;

export const DEFAULT_BUTTON_LABELS = {
  SET: "기본 경험 설정",
  UNSET: "기본 경험 해제",
} as const;
