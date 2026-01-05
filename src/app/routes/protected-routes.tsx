import { ROUTES } from "./paths";

import { HomePage } from "@/pages/home/home-page";
import { OnboardingPage } from "@/pages/onboarding/onboarding-page";
import { CompanyDetailPage } from "@/pages/company-detail/company-detail-page";

import { ExperienceMatchingPage } from "@/pages/experience-matching/experience-matching-page";
import { MatchingListPage } from "@/pages/matching-list/matching-list-page";
import { MatchingDetailPage } from "@/pages/matching-detail/matching-detail-page";

import { ExperienceDetailPage } from "@/pages/experience-detail/ui/experience-page/experience-detail-page";
import { ExperiencePage } from "@/pages/experience/experience-page";

import { MyPage } from "@/pages/my-page/my-page";
import { BookmarkPage } from "@/pages/bookmark/bookmark-page";

export const protectedRoutes = [
  { path: ROUTES.HOME, element: <HomePage /> },
  { path: ROUTES.ONBOARDING, element: <OnboardingPage /> },

  { path: ROUTES.COMPANY(), element: <CompanyDetailPage /> },
  { path: ROUTES.EXPERIENCE_MATCHING, element: <ExperienceMatchingPage /> },

  // 매칭 결과
  { path: ROUTES.MATCHLING_LIST, element: <MatchingListPage /> },
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
  { path: ROUTES.BOOKMARK, element: <BookmarkPage /> },
];
