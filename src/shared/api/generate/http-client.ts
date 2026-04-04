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

export interface AccessTokenResponseDto {
  accessToken?: string;
}

export interface CustomErrorResponse {
  /** @format int32 */
  status?: number;
  prefix?: string;
  message?: string;
}

export interface OnBoardingRequestDTO {
  /** @example "HIGH_SCHOOL" */
  educationLevel: string;
  /** @example "IT" */
  firstIndustry: string;
  /** @example "MEDIA_CONTENTS" */
  secondIndustry?: string;
  /** @example "RETAIL" */
  thirdIndustry?: string;
  /** @example "MARKETING_STRATEGY" */
  firstJob: string;
  /** @example "BRAND_MARKETING" */
  secondJob?: string;
  /** @example "DIGITAL_MARKETING" */
  thirdJob?: string;
  /**
   * @format int64
   * @example 1
   */
  universityId: number;
}

export interface CommonApiResponse {
  errorCode?: string;
  message?: string;
  result?: object;
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
  type: string;
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
   * @example "업무 내용
   *  고객센터의 각 채널 (Call Chat Mail App) 로 유입되는 고객 문의 운영 , 관리
   *  VOC , Inquiry 분석 및 개선
   *  신규사업, 마케팅, 이벤트 관련 고객 서비스 운영 지원
   * 자격 요건
   *  3년 이상의 유관업무 경력이 있는 분 또는 프로세스 수립/개선 업무 경험이 있는분
   *  유연한 사고와 원활한 커뮤니케이션 능력이 있는 분
   *  주말 스케줄 근무 가능하신 분 - 1~2개월마다 1회 주말 근무 (주말근무시 : 11:00~20:00(휴게포함)
   * 우대사항
   *  온라인 커머스 또는 배달서비스 비즈니스에 대한 이해도가 있으신 분
   *  고객 중심의 서비스 마인드 보유하신 분
   *  변화에 빠르게 적응 가능하신 분
   *  일본어 가능하신 분
   * "
   */
  jobDescription: string;
}

export interface AIReportResponseDto {
  /** @format int64 */
  id?: number;
  companyName?: string;
  experienceTitle?: string;
  situation?: string;
  task?: string;
  action?: string;
  result?: string;
  jobDescription?: string;
  perspectives?: Perspective[];
  density?: Density[];
  appealPoint?: AppealPoint[];
  suggestion?: string;
  guidance?: string;
}

export interface AppealPoint {
  element?: string;
  importance?: string;
  starPhase?: string;
  direction?: string;
  placement?: string;
}

export interface Density {
  perspective?: string;
  connection?: string;
  reason?: string;
}

export interface Perspective {
  perspective?: string;
  source?: string;
  reason?: string;
}

export interface LoginResponseDto {
  /** @format int64 */
  id?: number;
  isNew?: boolean;
  accessToken?: string;
  name?: string;
}

export interface GetMeResponseDto {
  name?: string;
  email?: string;
  educationLevel?:
    | "HIGH_SCHOOL"
    | "BACHELOR_STUDENT"
    | "BACHELOR"
    | "MASTER_STUDENT";
  firstIndustry?:
    | "CONSUMER_GOODS"
    | "IT"
    | "MEDIA_CONTENTS"
    | "RETAIL"
    | "LIFESTYLE"
    | "FOOD"
    | "TRAVEL"
    | "FINANCE"
    | "FITNESS";
  fistJob?:
    | "MARKETING_STRATEGY"
    | "BRAND_MARKETING"
    | "DIGITAL_MARKETING"
    | "CONTENT_MARKETING"
    | "VIRAL_MARKETING"
    | "PERFORMANCE_MARKETING"
    | "B2B_MARKETING"
    | "CRM_MARKETING"
    | "PRODUCT_MARKETING"
    | "PARTNERSHIP_MARKETING"
    | "GLOBAL_MARKETING";
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

export interface GetExperienceResponseDto {
  title?: string;
  isDefault?: boolean;
  type?: "INTERNSHIP" | "PROJECT" | "EDUCATION" | "ETC";
  /** @format date */
  startAt?: string;
  /** @format date */
  endAt?: string;
  situation?: string;
  task?: string;
  action?: string;
  result?: string;
}

export interface GetCompanyResponseDto {
  name?: string;
  logo?: string;
  isLiked?: boolean;
  industry?:
    | "CONSUMER_GOODS"
    | "IT"
    | "MEDIA_CONTENTS"
    | "RETAIL"
    | "LIFESTYLE"
    | "FOOD"
    | "TRAVEL"
    | "FINANCE"
    | "FITNESS";
  scale?:
    | "LARGE"
    | "STARTUP"
    | "PUBLIC_CORP"
    | "MID_LARGE"
    | "SME"
    | "FOREIGN"
    | "PUBLIC_ORG"
    | "ETC";
  companyURL?: string;
  summary?: string;
  talentProfile?: string;
  isRecruiting?: boolean;
  issueList?: IssueItem[];
}

export interface IssueItem {
  title?: string;
  content?: string;
  issueURL?: string;
  /** @format date */
  issueDate?: string;
}

export interface GetReportExperienceResponseDto {
  /** @format int32 */
  totalElements?: number;
  content?: Item[];
}

export interface Item {
  /** @format int64 */
  id?: number;
  title?: string;
  /** @format date */
  updatedAt?: string;
}

export interface GetReportCompanyResponseDto {
  name?: string;
  industry?:
    | "CONSUMER_GOODS"
    | "IT"
    | "MEDIA_CONTENTS"
    | "RETAIL"
    | "LIFESTYLE"
    | "FOOD"
    | "TRAVEL"
    | "FINANCE"
    | "FITNESS";
  recruitUrl?: string;
  companyUrl?: string;
  logo?: string;
}

export type ReissueTokenData = AccessTokenResponseDto;

export type AddUserInfoData = CommonApiResponse;

/** @format int64 */
export type AddBookmarkData = number;

export type RemoveBookmarkData = CommonApiResponse;

export type LogoutData = CommonApiResponse;

export type JoinData = JwtDto;

export type GetSummaryExperienceListData = PageDto;

/** @format int64 */
export type CreateExperienceData = number;

export type GetReportListData = PageDto;

export type MatchExperienceVirtualThreadData = AIReportResponseDto;

export type MatchExperienceData = AIReportResponseDto;

export type MatchAsyncData = AIReportResponseDto;

export type MatchAsyncWebClientData = AIReportResponseDto;

export type MatchExperienceWebfluxParallelData = AIReportResponseDto;

/** @format int64 */
export type MatchExperienceJobData = number;

export type GetExperienceData = GetExperienceResponseDto;

export type DeleteExperienceData = CommonApiResponse;

/** @format int64 */
export type UpdateExperienceData = number;

export type UpdateDefaultData = any;

export type SearchUniversitiesData = string;

export type KakaoCallbackData = LoginResponseDto;

export type GetMeData = GetMeResponseDto;

export type GetBookmarkCompanyData = PageDto;

export type GetCompanyListData = PageDto;

export type GetCompanyData = GetCompanyResponseDto;

export type GetSuggestionCompanyData = string;

export type GetCompanySearchListData = string;

export type GetFeaturedCompaniesData = string;

export type GetReportData = AIReportResponseDto;

export type GetReportExperienceData = GetReportExperienceResponseDto;

export type GetReportCompanyData = GetReportCompanyResponseDto;

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
    reissueToken: (params: RequestParams = {}) =>
      this.request<ReissueTokenData, CustomErrorResponse>({
        path: `/api/v1/re-issued`,
        method: "POST",
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
        type?: string;
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
        format: "json",
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
     * @name MatchExperienceVirtualThread
     * @summary AI 리포트 생성 API
     * @request POST:/api/v1/ai-reports
     * @secure
     */
    matchExperienceVirtualThread: (
      data: MatchExperienceRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<MatchExperienceVirtualThreadData, CustomErrorResponse>({
        path: `/api/v1/ai-reports`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AI-Report
     * @name MatchExperience
     * @request POST:/api/v1/ai-reports/match/sync
     * @secure
     */
    matchExperience: (
      data: MatchExperienceRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<MatchExperienceData, any>({
        path: `/api/v1/ai-reports/match/sync`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AI-Report
     * @name MatchAsync
     * @request POST:/api/v1/ai-reports/match/async
     * @secure
     */
    matchAsync: (data: MatchExperienceRequestDto, params: RequestParams = {}) =>
      this.request<MatchAsyncData, any>({
        path: `/api/v1/ai-reports/match/async`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AI-Report
     * @name MatchAsyncWebClient
     * @request POST:/api/v1/ai-reports/match/async/webclient
     * @secure
     */
    matchAsyncWebClient: (
      data: MatchExperienceRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<MatchAsyncWebClientData, any>({
        path: `/api/v1/ai-reports/match/async/webclient`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AI-Report
     * @name MatchExperienceWebfluxParallel
     * @request POST:/api/v1/ai-reports/match/async/parallel
     * @secure
     */
    matchExperienceWebfluxParallel: (
      data: MatchExperienceRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<MatchExperienceWebfluxParallelData, any>({
        path: `/api/v1/ai-reports/match/async/parallel`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AI-Report
     * @name MatchExperienceJob
     * @request POST:/api/v1/ai-reports/match/async/jobs
     * @secure
     */
    matchExperienceJob: (
      data: MatchExperienceRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<MatchExperienceJobData, any>({
        path: `/api/v1/ai-reports/match/async/jobs`,
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
        industry?: string[];
        scale?: string[];
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
