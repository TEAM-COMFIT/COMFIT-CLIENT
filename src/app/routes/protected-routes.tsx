import { lazy } from "react";

import { ROUTES } from "./paths";

const OnboardingPage = lazy(() =>
  import("@/pages/onboarding/onboarding-page").then((module) => ({
    default: module.OnboardingPage,
  }))
);

const ExperienceMatchingPage = lazy(() =>
  import("@/pages/experience-matching/experience-matching-page").then(
    (module) => ({ default: module.ExperienceMatchingPage })
  )
);

const MatchingListPage = lazy(() =>
  import("@/pages/matching-list/matching-list-page").then((module) => ({
    default: module.MatchingListPage,
  }))
);

const MatchingDetailPage = lazy(() =>
  import("@/pages/matching-detail/matching-detail-page").then((module) => ({
    default: module.MatchingDetailPage,
  }))
);

const ExperiencePage = lazy(() =>
  import("@/pages/experience/experience-page").then((module) => ({
    default: module.ExperiencePage,
  }))
);

const ExperienceDetailPage = lazy(() =>
  import("@/pages/experience-detail/experience-detail-page").then((module) => ({
    default: module.ExperienceDetailPage,
  }))
);

const MyPage = lazy(() =>
  import("@/pages/my-page/my-page").then((module) => ({
    default: module.MyPage,
  }))
);

export const protectedRoutes = [
  { path: ROUTES.ONBOARDING, element: <OnboardingPage /> },
  { path: ROUTES.EXPERIENCE_MATCHING, element: <ExperienceMatchingPage /> },

  // 매칭 결과
  { path: ROUTES.MATCHING_LIST, element: <MatchingListPage /> },
  { path: ROUTES.MATCHING_DETAIL(), element: <MatchingDetailPage /> },

  // 경험
  { path: ROUTES.EXPERIENCE, element: <ExperiencePage /> },
  {
    path: ROUTES.EXPERIENCE_CREATE,
    element: <ExperienceDetailPage mode="create" />,
  },
  {
    path: ROUTES.EXPERIENCE_DETAIL(),
    element: <ExperienceDetailPage mode="view" />,
  },
  {
    path: ROUTES.EXPERIENCE_EDIT(),
    element: <ExperienceDetailPage mode="edit" />,
  },

  { path: ROUTES.MYPAGE, element: <MyPage /> },
];
