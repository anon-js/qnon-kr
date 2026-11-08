export interface Project {
  slug: string;
  name: string;
  description: string;
  details: string;
  img?: string;
}

export const projects: Project[] = [
  {
    slug: "mechu",
    name: "메추리알",
    description: "빠른 메뉴 선택 경험을 주는 서비스입니다.",
    details:
      "메뉴 선택에 어려움을 겪는 사람들을 위해 빠른 메뉴 선택 경험을 제공하는 서비스입니다.",
  },
  // {
  //   slug: "toss-clone",
  //   name: "토스 클론",
  //   description: "토스 앱을 웹으로 구현한 클론 사이트입니다.",
  //   details: "토스 앱의 주요 기능을 웹으로 구현한 클론 사이트입니다.",
  // },
];
