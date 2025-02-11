# 한터글로벌 사전과제

- 컨텐츠리스트 구성 및 무한스크롤 형태로 구현
- 배너 클릭 시, 외부 랜딩 가능하도록 구현
- 배너(캐러셀) 리스트 구현
- 배너 영역 무한루프 구현
- GNB 구현

## 배포

- [배포 URL](https://hanteo-henna.vercel.app/)

<br />

### 기술 스택

<div>
  <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styledcomponents&logoColor=white">
  <img src="https://img.shields.io/badge/react router-CA4245?style=flat&logo=react router&logoColor=white">

</div>

<br />

## 📌 프로젝트 실행 방법

1. Clone the repo

```javascript
$ git clone https://github.com/brother1-4752/hanteo.git
```

2. Install NPM packages

```javascript
$ yarn install
```

3. Getting Started

```javascript
$ yarn run dev
```

<br/>

## 💡 상세 기능

### 1. 공통스타일 세팅

- 색상, 폰트사이즈, 폰트유형, 간격에 대한 스타일 값들을 전역에서 미리 세팅(fonts.scss, custom.scss, GlobalStyles.ts)하여, 하위에 있는 코드에 모두 동일하게 적용하고자 했습니다.
  <br />

### 2. 라우팅

- createBrowserRouter를 이용해 라우팅을 구현했습니다. 이를 선택한 이유는 다음과 같습니다.
- 라우터 객체배열을 만들어 관리하기 쉽도록 했습니다.
  ![Image](https://github.com/user-attachments/assets/ef1e13ad-4e00-4e6f-b021-e7bffe0548dd)

<br />

### 3. 배너 영역 무한루프 기능 구현

- react-slick, slick-carousel 라이브러리를 활용하여 캐러셀 영역 자동으로 슬라이드되도록 구현했습니다.
  <br />

### 4. 파비콘, meta 태그 적용

- meta 태그의 og:description, og:title, og:image 속성 추가 적용했습니다.
