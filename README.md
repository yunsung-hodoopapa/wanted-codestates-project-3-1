# [Project3] 페이히어 과제

## 🚀 배포 링크

https://wanted-preonboarding-tema3-payhere.netlify.app/

## 💿 실행 방법

```cmd
$ git clone https://github.com/pre-onboarding-team3/wanted-codestates-project-3-7.git

$ npm install

$ npm run start
```

## 😎 3팀

- 김경봉: Repo 저장&삭제(local캐싱)(팀장)
- 도지현: 페이지네이션
- 김남경: Repo, issue 조회
- 김형욱: 검색 기능
- 노학민: 노티피케이션
- 이산하: 메뉴 탭, 상세보기 컴포넌트
- 양윤성: API & 리덕스

## 🎇사용 기술스택

- Javascript
- React
- React-query
- Redux(thunk)
- axios
- styled-components

## 👩‍💻구현

### Repository 검색 및 페이지네이션

- React-query, axios를 사용하여 데이터를 받는다.(GitHub Open API)

### Repository 등록, 삭제

- localStorage를 사용한 등록, 삭제
- 등록, 삭제, 초과 시 안내 메시지를 보여준다.

### Repository 이슈

- 해당 issue를 클릭하면 Github의 상세 페이지로 이동
- issue 페이지네이션
