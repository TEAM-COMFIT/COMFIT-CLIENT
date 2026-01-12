import { BookmarkPage } from "@/pages/bookmark/bookmark-page";
import { ExperiencePage } from "@/pages/experience/experience-page";
import { ExperienceDetailPage } from "@/pages/experience-detail/experience-detail-page";
import { ExperienceMatchingPage } from "@/pages/experience-matching/experience-matching-page";
import { MatchingDetailPage } from "@/pages/matching-detail/matching-detail-page";
import { MatchingListPage } from "@/pages/matching-list/matching-list-page";
import { MyPage } from "@/pages/my-page/my-page";

import { ROUTES } from "./paths";

export const protectedRoutes = [
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
  { path: ROUTES.BOOKMARK, element: <BookmarkPage /> },
];
