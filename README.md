<aside>

 ## 프로젝트 소개
- 평소 간단한 글과 코드 조각을 담은 내용은 Notion, 비교적 긴 내용의 글은 Velog를 사용해왔습니다. 이 두 종류의 글을 모두 담을 수 있는 나만의 공간을 만들고 싶었습니다.

</aside>

## 기술 스택

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"><img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"><img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"><img src="https://img.shields.io/badge/Styled-Components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"><img src="https://img.shields.io/badge/Framer-0055FF?style=for-the-badge&logo=framer&logoColor=white"><img src="https://img.shields.io/badge/ContentLayer-D4911E?style=for-the-badge&logo=contentLayer&logoColor=white">
<br/>




---

<aside>
📎 게시글 목록

</aside>

- 블로그 포스트를 리스트 형태로 표시하고, 포스트의 제목, 요약 내용, 태그 등을 표시
- Framer motion을 사용해 렌더링 시 애니메이션 효과를 주어 UX 개선


![스크린샷 2023-08-13 오후 6 04 41](https://github.com/junmieee/next-blog/assets/76501504/fce81f52-9f1c-494a-8e9d-575a40986fb0)



---

<aside>
📎 검색 기능 & 태그 필터링

</aside>

- 포스트 제목을 검색할 수 있는 기능과 포스트에 포함된 태그로 필터링해 관련된 포스트만 표시됨

![스크린샷 2023-08-13 오후 6 06 02](https://github.com/junmieee/next-blog/assets/76501504/a463ef94-c43f-4a4f-984e-1314f416c6dc)


---

<aside>
📎 포스트 상세 보기

</aside>

- Contentlayer를 통해 로컬에 저장된 Markdown 형식의 컨텐츠를 화면에 그려줌

![스크린샷 2023-08-13 오후 6 06 19](https://github.com/junmieee/next-blog/assets/76501504/edf1fa8f-6381-4b88-87e6-85b6cbc55948)


<aside>
📎 다크 모드

</aside>

- Next-themes 와 TailwindCSS를 사용해 다크모드 토글 기능 추가
- LocalStorage에 상태를 저장해 새로고침 시에도 상태가 유지될 수 있도록 함

![스크린샷 2023-08-13 오후 6 06 40](https://github.com/junmieee/next-blog/assets/76501504/d9dc2db3-9a02-4493-a5cd-99b66cee4793)
