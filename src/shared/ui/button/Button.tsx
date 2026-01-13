import { assignInlineVars } from "@vanilla-extract/dynamic";

// 아이콘 Import
import IconBookmark from "@/shared/assets/icons/bookmark_default.svg?react";
import IconBookmarkPressed from "@/shared/assets/icons/bookmark_pressed.svg?react";
import IconCheck from "@/shared/assets/icons/icon_check_default.svg?react";
import IconCheckPressed from "@/shared/assets/icons/icon_check_pressed.svg?react";
import IconCompany from "@/shared/assets/icons/icon_company.svg?react";
import IconLink from "@/shared/assets/icons/icon_link_default.svg?react";
import IconLinkPressed from "@/shared/assets/icons/icon_link_pressed.svg?react";
import IconTrash from "@/shared/assets/icons/icon_trash_default.svg?react";
import IconTrashPressed from "@/shared/assets/icons/icon_trash_pressed.svg?react";
import KakaoLoginImg from "@/shared/assets/images/kakao_login.png";
// 스타일 및 컬러 Import
import { color } from "@/shared/styles/tokens/color.css";

import {
  button,
  borderVar,
  bgVar,
  textVar,
  widthVar,
  iconWrapper,
  iconDefaultStyle,
  iconPressedStyle,
  pressedBgVar,
  pressedTextVar,
  pressedBorderVar,
  kakaoStyle,
  bookmarkStyle,
  companyLinkStyle,
  expToggleStyle,
  companyAnalysisStyle,
  iconOnlyStyle,
} from "./button.css";

import type { RecipeVariants } from "@vanilla-extract/recipes";
import type { ButtonHTMLAttributes, ReactNode, CSSProperties } from "react";

// --- 기본 Button 컴포넌트 ---

type ButtonRecipe = RecipeVariants<typeof button>;

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "style"
> &
  ButtonRecipe & {
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    pressedIcon?: ReactNode;
    // Dynamic Styles
    bgColor?: string;
    textColor?: string;
    borderColor?: string;
    width?: string;
    pressedBgColor?: string;
    pressedTextColor?: string;
    pressedBorderColor?: string;
    isToggled?: boolean;
    // Custom Style override
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
  };

export const Button = ({
  type = "button",
  variant = "primary",
  size = "medium",
  iconOnly,
  startIcon,
  endIcon,
  pressedIcon,
  pressedBgColor,
  pressedTextColor,
  pressedBorderColor,
  bgColor,
  textColor,
  borderColor,
  width,
  isToggled,
  className,
  style,
  children,
  ...props
}: ButtonProps) => {
  const isIconOnly = iconOnly ?? (!children && (!!startIcon || !!endIcon));

  const inlineVars = assignInlineVars({
    [bgVar]: bgColor ?? null,
    [textVar]: textColor ?? null,
    [borderVar]: borderColor ?? null,
    [widthVar]: width ?? null,
    [pressedBgVar]: pressedBgColor ?? null,
    [pressedTextVar]: pressedTextColor ?? null,
    [pressedBorderVar]: pressedBorderColor ?? null,
  });

  const hasPressedIcon = !!pressedIcon;

  return (
    <button
      type={type}
      data-toggled={isToggled}
      className={`${button({ variant, size, iconOnly: isIconOnly })} ${
        className ?? ""
      }`}
      style={{
        ...inlineVars,
        ...style,
      }}
      {...props}
    >
      {(startIcon || pressedIcon) && (
        <span className={iconWrapper}>
          {startIcon && (
            <span className={hasPressedIcon ? iconDefaultStyle : ""}>
              {startIcon}
            </span>
          )}
          {pressedIcon && (
            <span className={iconPressedStyle}>{pressedIcon}</span>
          )}
        </span>
      )}

      {!isIconOnly && children}
      {endIcon && <span className={iconWrapper}>{endIcon}</span>}
    </button>
  );
};

// --- 아이콘 버튼 컴포넌트들 ---

/* 1. 카카오 로그인 버튼 */
export const KakaoButton = (props: ButtonProps) => {
  return (
    <Button
      variant="primary"
      size="full"
      {...props}
      className={kakaoStyle}
      bgColor="transparent"
      pressedBgColor="transparent"
      style={{
        backgroundColor: "transparent",
        ...props.style,
      }}
    >
      <img
        src={KakaoLoginImg}
        alt="카카오로 시작하기"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </Button>
  );
};

/* 2. 북마크 버튼 */
export const BookmarkButton = (props: ButtonProps) => {
  return (
    <Button
      variant="outline"
      size="small"
      startIcon={<IconBookmark />}
      pressedIcon={<IconBookmarkPressed />}
      pressedBgColor={color.blue600}
      pressedTextColor={color.white}
      pressedBorderColor={color.blue600}
      {...props}
      className={bookmarkStyle}
    >
      북마크
    </Button>
  );
};

/* 3. 기업 홈페이지 버튼 */
export const CompanyLinkButton = (props: ButtonProps) => {
  return (
    <Button
      variant="outline"
      size="small"
      startIcon={<IconLink />}
      pressedIcon={<IconLinkPressed />}
      pressedBgColor={color.blue600}
      pressedTextColor={color.white}
      pressedBorderColor={color.blue600}
      {...props}
      className={companyLinkStyle}
    >
      기업 홈페이지
    </Button>
  );
};

/* 4. 기본 경험 설정/해제 버튼 */
export const ExpToggleButton = (props: ButtonProps) => {
  return (
    <Button
      variant="outline"
      size="small"
      startIcon={<IconCheck />}
      pressedIcon={<IconCheckPressed />}
      pressedTextColor={color.white}
      bgColor={color.white}
      pressedBgColor={color.blue600}
      {...props}
      className={expToggleStyle}
    >
      {props.isToggled ? "기본 경험 설정" : "기본 경험 해제"}
    </Button>
  );
};

/* 5. 기업 분석 보기 버튼 */
export const CompanyAnalysisButton = (props: ButtonProps) => {
  return (
    <Button
      variant="primary"
      startIcon={<IconCompany />}
      bgColor={color.blue100}
      pressedBgColor={color.blue500}
      pressedTextColor={color.white}
      textColor={color.black}
      {...props}
      className={companyAnalysisStyle}
    >
      기업 분석 보기
    </Button>
  );
};

/* 6. 아이콘 온리 버튼 */
export const IconOnlyButton = (props: ButtonProps) => {
  return (
    <Button
      variant="outline"
      iconOnly={true}
      startIcon={<IconTrash />}
      pressedIcon={<IconTrashPressed />}
      bgColor="white"
      borderColor="var(--Line-normal, #E0E0E0)"
      pressedBgColor={color.blue600}
      pressedBorderColor={color.blue600}
      pressedTextColor={color.white}
      {...props}
      className={iconOnlyStyle}
    />
  );
};
