This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## react와 youtube search api를 활용한 web 
이 프로젝트는 react와 youtube search api를 이용하여 유튜브의 동영상 검색기능과 해당 질의의 동영상 리스트를 보여주는 web을 제작한 프로젝트이다.

## 프로젝트 시작 방법
```
> git clone https://github.com/leejuhyeok/react-youtube-search-api.git
> cd react-youtube-search-api
> npm install
> npm start

```

## 주의
해당 프로젝트는 API 유출을 막기위해 API를 코드에 적어놓지 않았다. 때문에 이 프로젝트를 사용하는 사용자는 App.js에 API_KEY에 자신의 api Key를 입력하고 사용하기 바란다.

## 기능

### 검색
web의 홈화면은 riotgames를 질의했을때의 화면을 default를 해놨다. 사용자가 원하는 질의를 상단의 검색창에 입력을 하면 해당하는 동영상을 가지고 온다. 이때 검색 기능은 fetch를 활용하여 검색창의 입력 값과 API KEY를 가지고 api에 접근하여 동영상의 목록을 받아온다. 이때 가장 상위에 있는 동영상을 해당의 web의 main 영상으로 보여주고 나머지 동영상 리스트를 우측에 위치시켜서 목록을 만들어 보여준다.

