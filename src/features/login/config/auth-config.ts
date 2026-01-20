/**
 * 인증 관련 기본 URL 설정
 */
const AUTH_BASE_URLS = {
  KAKAO: "https://kauth.kakao.com/oauth/authorize",
};

/**
 * 각 소셜 로그인 제공자별 환경 변수 설정 (확장성을 위함)
 */
export const providerEnvConfig = {
  KAKAO: {
    restApiKey: import.meta.env.VITE_KAKAO_REST_API,
    redirectUrl: import.meta.env.DEV
      ? import.meta.env.VITE_KAKAO_REDIRECT_URI_LOCAL
      : import.meta.env.VITE_KAKAO_REDIRECT_URI,
  },
};

/**
 * 현재 환경에 따른 리다이렉트 URL 반환
 */
export type SocialProvider = "KAKAO";
export const getRedirectURL = (provider: SocialProvider): string => {
  switch (provider) {
    case "KAKAO":
      return providerEnvConfig.KAKAO.redirectUrl;
    default:
      return "";
  }
};

/**
 * 각 소셜 로그인 제공자 별 인증 URL을 생성
 */
export const getAuthURL = {
  KAKAO: () => {
    const { restApiKey } = providerEnvConfig.KAKAO;
    const redirectUrl = getRedirectURL("KAKAO");

    return `${AUTH_BASE_URLS.KAKAO}?response_type=code&client_id=${restApiKey}&redirect_uri=${redirectUrl}`;
  },
};
