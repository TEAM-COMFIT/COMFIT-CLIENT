/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ReIssueTokenRequestDto {
  /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." */
  refreshToken: string;
}

export interface CommonApiResponse {
  errorCode?: string;
  message?: string;
  result?: object;
}

export interface CustomErrorResponse {
  /** @format int32 */
  status?: number;
  prefix?: string;
  message?: string;
}

export interface OnBoardingRequestDTO {
  educationLevel?: string;
  firstIndustry?: string;
  secondIndustry?: string;
  thirdIndustry?: string;
  firstJob?: string;
  secondJob?: string;
  thirdJob?: string;
  /** @format int64 */
  universityId?: number;
}

export interface LoginRequestDto {
  /** @example "test@test.com" */
  email: string;
  /** @example "password123" */
  password: string;
}

export interface JwtDto {
  accessToken?: string;
  refreshToken?: string;
}

export interface ExperienceRequestDto {
  /**
   * @minLength 2
   * @maxLength 40
   * @example "인스타그램 마케팅 캠페인 기획 및 실행"
   */
  title: string;
  /** @example "INTERNSHIP" */
  type: "INTERNSHIP" | "PROJECT" | "EDUCATION" | "ETC";
  /**
   * @format date
   * @example "2025-12-23"
   */
  startAt: string;
  /**
   * @format date
   * @example "2025-12-28"
   */
  endAt: string;
  /**
   * @minLength 30
   * @maxLength 200
   * @example "대학생 마케팅 동아리에서 신규 브랜드 인지도를 높이기 위한 프로젝트를 진행함"
   */
  situation: string;
  /**
   * @minLength 30
   * @maxLength 200
   * @example "한정된 예산 안에서 브랜드 메시지를 효과적으로 전달한 콘텐츠 방향을 설정해야 했음"
   */
  task: string;
  /**
   * @minLength 40
   * @maxLength 500
   * @example "초기에는 트렌디한 이미지 위주의 콘텐츠를 기획했으나, 게시 후 반응을 분석한 결과 조회 수 대비 브랜드 인지 반응이 낮다고 판단함.이에 메시지 전달이 명확한 짧은 영상 포맷으로 방향을 조정함"
   */
  action: string;
  /**
   * @minLength 30
   * @maxLength 300
   * @example "캠페인 종료 시 브랜드 계정 팔로워 수가 약 25% 증가했고, 댓글에서 브랜드 언급 비율이 눈에 띄게 높아짐이 결과를 통해 콘텐츠 성과를 단순 수치가 아니라 메시지 전달관점에서 해석하는 중요성을 배움."
   */
  result: string;
  /** @example true */
  isDefault?: boolean;
}

export interface MatchExperienceRequestDto {
  /**
   * @format int64
   * @example 1
   */
  companyId: number;
  /**
   * @format int64
   * @example 1
   */
  experienceId: number;
  /**
   * @example "[직무 설명 (JD 원문)]
   *
   * CJ ENM 엔터테인먼트부문은
   * 콘텐츠 기획 및 운영 전반을 담당할 인재를 모집합니다.
   *
   * 주요 업무
   * - 콘텐츠 기획 및 운영 업무 지원
   * - 디지털 콘텐츠 성과 분석 및 인사이트 도출
   * - 유관 부서 및 외부 파트너와의 협업
   *
   * 자격 요건
   * - 콘텐츠 및 엔터테인먼트 산업에 대한 관심
   * - 데이터 기반으로 문제를 분석하고 개선안을 도출한 경험
   * - 원활한 커뮤니케이션 및 협업 능력
   *
   * 우대 사항
   * - 디지털 콘텐츠 또는 마케팅 관련 프로젝트 경험
   * - 글로벌 콘텐츠 트렌드에 대한 이해"
   */
  jobDescription: string;
}

export interface PageDto {
  content?: object[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  totalPage?: number;
  /** @format int64 */
  totalElements?: number;
}

export type ReissueTokenData = CommonApiResponse;

export type AddUserInfoData = CommonApiResponse;

export type AddBookmarkData = CommonApiResponse;

export type RemoveBookmarkData = CommonApiResponse;

export type LogoutData = CommonApiResponse;

export type JoinData = JwtDto;

export type GetSummaryExperienceListData = PageDto;

export type CreateExperienceData = CommonApiResponse;

export type GetReportListData = CommonApiResponse;

export type MatchExperienceData = CommonApiResponse;

export type GetExperienceData = CommonApiResponse;

export type DeleteExperienceData = any;

export type UpdateExperienceData = CommonApiResponse;

export type UpdateDefaultData = any;

export type SearchUniversitiesData = CommonApiResponse;

export type KakaoCallbackData = CommonApiResponse;

export type GetMeData = CommonApiResponse;

export type GetBookmarkCompanyData = CommonApiResponse;

export type GetCompanyListData = CommonApiResponse;

export type GetCompanyData = CommonApiResponse;

export type GetSuggestionCompanyData = CommonApiResponse;

export type GetCompanySearchListData = CommonApiResponse;

export type GetFeaturedCompaniesData = CommonApiResponse;

export type GetReportData = CommonApiResponse;

export type GetReportExperienceData = CommonApiResponse;

export type GetReportCompanyData = CommonApiResponse;

export interface Response<T> {
  errorCode: number | null;
  message: string;
  result: T;
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<
  AxiosRequestConfig,
  "data" | "params" | "url" | "responseType"
> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<
  AxiosRequestConfig,
  "data" | "cancelToken"
> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
  axiosInstance?: AxiosInstance;
}

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    axiosInstance,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance =
      axiosInstance ||
      axios.create({
        ...axiosConfig,
        baseURL: axiosConfig.baseURL || import.meta.env.VITE_API_URL,
      });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem)
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<Response<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance
      .request({
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type ? { "Content-Type": type } : {}),
        },
        params: query,
        responseType: responseFormat,
        data: body,
        url: path,
        secure: secure,
      })
      .then((response) => response.data);
  };
}

/**
 * @title Comfit Server API
 * @version 1.0.0
 * @baseUrl // .env 파일을 참조해주세요
 *
 * Comfit Server API 명세서
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  reIssued = {
    /**
     * @description RefreshToken을 사용하여 새로운 AccessToken과 RefreshToken을 발급합니다.
     *
     * @tags 인증
     * @name ReissueToken
     * @summary 액세스 토큰 재발급
     * @request POST:/api/v1/re-issued
     */
    reissueToken: (data: ReIssueTokenRequestDto, params: RequestParams = {}) =>
      this.request<ReissueTokenData, CustomErrorResponse>({
        path: `/api/v1/re-issued`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  onBoarding = {
    /**
     * @description 회원가입 시 필수 정보 입력
     *
     * @tags 인증
     * @name AddUserInfo
     * @summary 온보딩
     * @request POST:/api/v1/on-boarding
     * @secure
     */
    addUserInfo: (data: OnBoardingRequestDTO, params: RequestParams = {}) =>
      this.request<AddUserInfoData, CustomErrorResponse>({
        path: `/api/v1/on-boarding`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  me = {
    /**
     * @description 관심 기업 북마크 API입니다
     *
     * @tags me
     * @name AddBookmark
     * @summary 관심 기업 북마크 API
     * @request POST:/api/v1/me/companies/{companyId}
     * @secure
     */
    addBookmark: (companyId: number, params: RequestParams = {}) =>
      this.request<AddBookmarkData, CustomErrorResponse>({
        path: `/api/v1/me/companies/${companyId}`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 관심 기업 북마크 삭제 API입니다
     *
     * @tags me
     * @name RemoveBookmark
     * @summary 관심 기업 북마크 삭제 API
     * @request DELETE:/api/v1/me/companies/{companyId}
     * @secure
     */
    removeBookmark: (companyId: number, params: RequestParams = {}) =>
      this.request<RemoveBookmarkData, CustomErrorResponse>({
        path: `/api/v1/me/companies/${companyId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 사용자 프로필 조회 API입니다
     *
     * @tags me
     * @name GetMe
     * @summary 사용자 프로필 조회 API
     * @request GET:/api/v1/me
     * @secure
     */
    getMe: (params: RequestParams = {}) =>
      this.request<GetMeData, CustomErrorResponse>({
        path: `/api/v1/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 관심 기업 북마크 조회 리스트 API입니다
     *
     * @tags me
     * @name GetBookmarkCompany
     * @summary 관심 기업 북마크 조회 리스트 API
     * @request GET:/api/v1/me/companies
     * @secure
     */
    getBookmarkCompany: (
      query?: {
        /**
         * @format int32
         * @default 1
         */
        page?: number;
        /** @default "LATEST" */
        sort?: "NAME" | "LIKE" | "LATEST" | "OLDEST";
      },
      params: RequestParams = {}
    ) =>
      this.request<GetBookmarkCompanyData, CustomErrorResponse>({
        path: `/api/v1/me/companies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  logout = {
    /**
     * @description 로그아웃
     *
     * @tags 인증
     * @name Logout
     * @summary 로그아웃
     * @request POST:/api/v1/logout
     * @secure
     */
    logout: (params: RequestParams = {}) =>
      this.request<LogoutData, CustomErrorResponse>({
        path: `/api/v1/logout`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  login = {
    /**
     * No description
     *
     * @tags 인증
     * @name Join
     * @request POST:/api/v1/login
     */
    join: (data: LoginRequestDto, params: RequestParams = {}) =>
      this.request<JoinData, any>({
        path: `/api/v1/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  experiences = {
    /**
     * @description 경험 요약 리스트 조회 API입니다
     *
     * @tags experience
     * @name GetSummaryExperienceList
     * @summary 경험 요약 리스트 조회 API
     * @request GET:/api/v1/experiences
     * @secure
     */
    getSummaryExperienceList: (
      query?: {
        type?: "INTERNSHIP" | "PROJECT" | "EDUCATION" | "ETC";
        /**
         * @format int32
         * @default 1
         */
        page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetSummaryExperienceListData, CustomErrorResponse>({
        path: `/api/v1/experiences`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 경험을 생성하는 API입니다
     *
     * @tags experience
     * @name CreateExperience
     * @summary 경험 생성 API
     * @request POST:/api/v1/experiences
     * @secure
     */
    createExperience: (
      data: ExperienceRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<CreateExperienceData, CustomErrorResponse>({
        path: `/api/v1/experiences`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 경험 세부를 조회하는 API입니다
     *
     * @tags experience
     * @name GetExperience
     * @summary 경험 세부 조회 API
     * @request GET:/api/v1/experiences/{experienceId}
     * @secure
     */
    getExperience: (experienceId: number, params: RequestParams = {}) =>
      this.request<GetExperienceData, CustomErrorResponse>({
        path: `/api/v1/experiences/${experienceId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 경험을 삭제하는 API입니다
     *
     * @tags experience
     * @name DeleteExperience
     * @summary 경험 삭제 API
     * @request DELETE:/api/v1/experiences/{experienceId}
     * @secure
     */
    deleteExperience: (experienceId: number, params: RequestParams = {}) =>
      this.request<DeleteExperienceData, CustomErrorResponse>({
        path: `/api/v1/experiences/${experienceId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description 경험을 수정하는 API입니다
     *
     * @tags experience
     * @name UpdateExperience
     * @summary 경험 수정 API
     * @request PATCH:/api/v1/experiences/{experienceId}
     * @secure
     */
    updateExperience: (
      experienceId: number,
      data: ExperienceRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<UpdateExperienceData, CustomErrorResponse>({
        path: `/api/v1/experiences/${experienceId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 기본 경험 수정 API입니다
     *
     * @tags experience
     * @name UpdateDefault
     * @summary 기본 경험 수정 API
     * @request PATCH:/api/v1/experiences/{experienceId}/default
     * @secure
     */
    updateDefault: (experienceId: number, params: RequestParams = {}) =>
      this.request<UpdateDefaultData, CustomErrorResponse>({
        path: `/api/v1/experiences/${experienceId}/default`,
        method: "PATCH",
        secure: true,
        ...params,
      }),
  };
  aiReports = {
    /**
     * @description AI_Report 리스트 조회/검색 API입니다, KeyWord 값은 선택입니다
     *
     * @tags AI-Report
     * @name GetReportList
     * @summary AI_Report 리스트 조회/ 검색
     * @request GET:/api/v1/ai-reports
     * @secure
     */
    getReportList: (
      query?: {
        /**
         * @format int32
         * @default 1
         */
        page?: number;
        keyword?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetReportListData, CustomErrorResponse>({
        path: `/api/v1/ai-reports`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description AI 리포트 생성 API입니다
     *
     * @tags AI-Report
     * @name MatchExperience
     * @summary AI 리포트 생성 API
     * @request POST:/api/v1/ai-reports
     * @secure
     */
    matchExperience: (
      data: MatchExperienceRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<MatchExperienceData, CustomErrorResponse>({
        path: `/api/v1/ai-reports`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Report 단일 조회 API입니다
     *
     * @tags AI-Report
     * @name GetReport
     * @summary Report 단일 조회
     * @request GET:/api/v1/ai-reports/{reportId}
     * @secure
     */
    getReport: (reportId: number, params: RequestParams = {}) =>
      this.request<GetReportData, CustomErrorResponse>({
        path: `/api/v1/ai-reports/${reportId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Report 분석 전 경험 리스트 조회 API입니다
     *
     * @tags AI-Report
     * @name GetReportExperience
     * @summary Report 분석 전 경험 리스트 조회
     * @request GET:/api/v1/ai-reports/experiences
     * @secure
     */
    getReportExperience: (params: RequestParams = {}) =>
      this.request<GetReportExperienceData, CustomErrorResponse>({
        path: `/api/v1/ai-reports/experiences`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Report 분석 전 기업 정보 단일 조회
     *
     * @tags AI-Report
     * @name GetReportCompany
     * @summary Report 분석 전 기업 정보 단일 조회
     * @request GET:/api/v1/ai-reports/companies/{companyId}
     * @secure
     */
    getReportCompany: (companyId: number, params: RequestParams = {}) =>
      this.request<GetReportCompanyData, CustomErrorResponse>({
        path: `/api/v1/ai-reports/companies/${companyId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  universities = {
    /**
     * @description 키워드로 대학교를 검색합니다.
     *
     * @tags university
     * @name SearchUniversities
     * @summary 대학교 검색
     * @request GET:/api/v1/universities/search
     * @secure
     */
    searchUniversities: (
      query: {
        keyword: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<SearchUniversitiesData, CustomErrorResponse>({
        path: `/api/v1/universities/search`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  oauth = {
    /**
     * @description 카카오 로그인
     *
     * @tags 인증
     * @name KakaoCallback
     * @summary 카카오 로그인
     * @request GET:/api/v1/oauth/kakao/callback
     */
    kakaoCallback: (
      query: {
        code: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<KakaoCallbackData, CustomErrorResponse>({
        path: `/api/v1/oauth/kakao/callback`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  companies = {
    /**
     * @description 기업검색/조회 API 입니다
     *
     * @tags Company
     * @name GetCompanyList
     * @summary 기업 검색/조회 API
     * @request GET:/api/v1/companies
     * @secure
     */
    getCompanyList: (
      query?: {
        keyword?: string;
        industry?: string;
        scale?: string;
        sort?: string;
        /**
         * @format int32
         * @default 1
         */
        page?: number;
        isRecruited?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetCompanyListData, CustomErrorResponse>({
        path: `/api/v1/companies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 기업 상세 정보 조회 API입니다
     *
     * @tags Company
     * @name GetCompany
     * @summary 기업 상세 정보 조회 API
     * @request GET:/api/v1/companies/{companyId}
     * @secure
     */
    getCompany: (companyId: number, params: RequestParams = {}) =>
      this.request<GetCompanyData, CustomErrorResponse>({
        path: `/api/v1/companies/${companyId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 추천 기업 조회 API입니다
     *
     * @tags Company
     * @name GetSuggestionCompany
     * @summary 추천기업 조회 API
     * @request GET:/api/v1/companies/{companyId}/suggestion
     */
    getSuggestionCompany: (companyId: number, params: RequestParams = {}) =>
      this.request<GetSuggestionCompanyData, CustomErrorResponse>({
        path: `/api/v1/companies/${companyId}/suggestion`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 기업검색 API 입니다
     *
     * @tags Company
     * @name GetCompanySearchList
     * @summary 기업 검색 API
     * @request GET:/api/v1/companies/search
     * @secure
     */
    getCompanySearchList: (
      query: {
        keyword: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetCompanySearchListData, CustomErrorResponse>({
        path: `/api/v1/companies/search`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 주요 기업 조회 API입니다. 토큰이 없으면 랜덤 3개, 토큰이 있으면 rank에 따라 사용자의 관심 산업군 기업을 반환합니다.
     *
     * @tags Company
     * @name GetFeaturedCompanies
     * @summary 주요 기업 조회 API
     * @request GET:/api/v1/companies/major
     * @secure
     */
    getFeaturedCompanies: (
      query: {
        /** @format int32 */
        rank: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetFeaturedCompaniesData, CustomErrorResponse>({
        path: `/api/v1/companies/major`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
