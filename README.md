# 🔗 Comfit

> Comfit은 **_을(를) 목표로 하는 _** 서비스입니다.



## 👥 Team member

|                                                  |                                           |                                           |                                              |
| :----------------------------------------------: | :---------------------------------------: | :---------------------------------------: | :------------------------------------------: |
|    <div align = "center"><b>이채영</b></div>     | <div align = "center"><b>오수빈</b></div> | <div align = "center"><b>정유진</b></div> |  <div align = "center"><b>배정민</b></div>   |
| [@hummingbbird](https://github.com/hummingbbird) |  [@odukong](https://github.com/odukong)   |    [@u-zzn](https://github.com/u-zzn)     | [@qowjdals23](https://github.com/qowjdals23) |

<br/>
<br/>

## 🔧 Tech Stack

### [Comfit의 근거 있는 기술 스택 선정 과정 살펴보기 👀](https://same-cricket-7d1.notion.site/2-2dd70a83488280cdb1f2da52fa3ce892?source=copy_link)

| 역할                 | 종류                                                                                                                                                                                                                                                                                                                            |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Library              | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)                                                                                                                                                                                                                              |
| Programming Language | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white)                                                                 
| Formatting         | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white) |                                                                                                                                              |
| UI Documentation    | ![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white) 
| Styling              | ![Vanilla Extract](https://img.shields.io/badge/Vanilla%20Extract-%23F786AD?style=for-the-badge&logo=vanillaextract&logoColor=white) 
| Data Fetching        | ![TanstackQuery](https://img.shields.io/badge/TanstackQuery-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white)   ![swagger-typescript-api](https://img.shields.io/badge/swagger--typescript--api-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white)  |                                                                                                                                               
| Package Manager      |  ![Pnpm](https://img.shields.io/badge/Pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)             |
| Build Tool      |  ![VITE](https://img.shields.io/badge/VITE-646CFF?style=for-the-badge&logo=Vite&logoColor=white)             |
| Version Control      | ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  |
| Deployment           | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)                                                                                                                                                                                                               |

<br><br>

## 🏁 Convention

### 👀 Commit Convention
가장 보편적으로 사용되는 방식인 [Udacity Git Style Guide](https://udacity.github.io/git-styleguide/) 기반 컨벤션을 따릅니다. 

```
[init] 개발 환경 초기 세팅
[feat] 새로운 기능 추가
[fix] 버그 수정
[design] 스타일 변경 및 디자인 구현
[update] Fix와 달리 원래 정상적으로 동작했지만 보완의 개념
[remove] 파일을 삭제하는 경우
[move] 코드나 파일을 이동하는 경우
[rename] 파일 혹은 폴더명을 수정하는 경우
[docs] 문서를 수정한 경우
[comment] 필요한 주석 추가 및 변경
[refactor] 코드 리팩토링 (결과의 변경 없이 코드의 구조를 재조정, 가독성을 높임)
[test] 테스트 코드
[chore] 그 외 자잘한 수정
[deploy] 배포
```

👇 기본 구조
```
type: description (#이슈 넘버)

- 커밋에 대한 설명
- 커밋만 보고도 어떤 작업인지 이해할 수 있도록 하기 위함
```
<br>

### 👀 Git Convention
<img width="585" height="682" alt="git flow 이미지" src="https://github.com/user-attachments/assets/e98f22e2-a1a4-4627-b27d-c3b2ffc3651c" />
- 기본 틀: **[type]/#[이슈넘버]/기능 이름** (ex)`feat/#914/company-card-component`)
- 기능 타입에 맞게 가장 앞단의 키워드를 변경해주세요. (feat / refactor / fix / hotfix/ chore 등)
- 기능 이름에는 **kebab-case**를 사용합니다.

<br>

### 👀 Coding Convention
<details>
<summary>📁 파일 및 폴더명</summary>

- **케밥 케이스(kebab-case) 사용**
  - 예: `company-card.tsx`
- (예외적으로 컴포넌트 파일은 PascalCase 허용)
</details>

<details>

<summary>✨ 컴포넌트명</summary>

- **파스칼 케이스 사용**
```tsx
const CompanyCard = () => {}  // 파스칼케이스 사용
```
</details>

<details>
<summary>📛 변수</summary>
- 기본: `var` 금지 !!!

|  | **규칙** | **예시** |
| --- | --- | --- |
| **기본** | camelCase | `hotPostResponseData` |
| **Boolean 타입** | is 접두사 사용 | `isActive` |
| **상수** | 대문자 스네이크 케이스 | `VITE_API_KEY`, `ROTATE_DELAY` |
</details>

<details>
<summary>🦾 함수</summary>

> ***가독성, 유지보수성을 고려하여 https://jaketrent.com/ (Jake Trent)의 네이밍 규칙 적용***
> 
- 기본: **화살표 함수** 사용
- 이벤트 핸들러
    - `handle`접두사 사용(단, props는 `on` 접두사 사용)
    - 네이밍 순서는 handle+명사+동사 (ex) `handleButtonClick`)
    - 2번 이상 사용될 경우 utils 폴더에 생성
    
    ```jsx
    <MyComponent onAlertClick={handleAlertClick} />
    ```
</details>

<details>
<summary>🆎 타입</summary>

- 기본: `interface` 사용(확장성 good 👍)
- 유니온, 리터럴 타입과 같은 특수한 경우에만 `type` 사용
- 네이밍: PascalCase(ex) `LoginResponseType`)
</details>

<details>
<summary>➕ 그 외</summary>

- **시맨틱 태그** 사용(무지성 div 태그 ❌)
- border-radius같은 것을 제외하고 단위는 모두 `rem` 사용
- letter-spacing: em 단위 적용
- 웹 접근성도 고려하는 개발
- import 문에서 type은 하단에 입력
</details>

## 👼 Ground Rule

### 🧩 협업 규칙
1. 존중하며 말하기
2. 카카오톡, 디스코드 등 소통 채널 빠른 확인 필수
3. 적극적인 태도로 접근하고 같이 해결하기
4. 많이 웃기 !!! 😆😆😆😆

### 🧩 개발 규칙
1. 작업 전 코드리뷰부터
2. PR 볼륨 조절하기(너무 큰 PR은 리뷰어에게 부담이 됩니다 😇)
3. 2인 이상 approve 필수 / LGTM 지양
4. 근거 있는 개발, 근거 있는 AI 툴 사용 
5. 컨벤션 잘 지키기