import {
  IconAIBefore,
  IconEXPBefore,
  IconMatchBefore,
} from "@/shared/assets/icons";

import type { SVGProps } from "react";

export interface WorryCardItem {
  title: string;
  content: string;
  icon: React.FC<SVGProps<SVGSVGElement>>;
}

export const WORRY_CARD_ITEMS: WorryCardItem[] = [
  {
    title: "내 경험을 기업과\n 어떻게 연결할까?",
    content:
      "동아리, 인턴 경험이 있지만 이 기업에서\n원하는 역량과 어떻게 연결해야 할지 막막해요",
    icon: IconAIBefore,
  },
  {
    title: "무엇을 강조해야 할지\n모르겠어요",
    content:
      "경험은 있는데 이 기업에서 중요하게 볼\n포인트가 무엇인지 알 수 없어요",
    icon: IconEXPBefore,
  },
  {
    title: "내가 지원하는 기업,\n정말 잘 맞을까?",
    content: "기업의 인재상과 내 경험이 잘 맞는지\n 확신이 서지 않고, 불안해요",
    icon: IconMatchBefore,
  },
];
