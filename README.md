# custom-component

- 원티드 프리온보딩 코스

## 실행 방법

1. 레포지토리 clone
2. npm install
3. npm start

## Dependencies

- create-react-app
- styled-components

## 배포 링크

- [링크](https://ysh2987.github.io/wanted_pre_onboarding/)

## Toggle.js

- useState로 버튼의 상태를 boolean으로 관리해 클릭이벤트 발생시 !toggle로 활성화/비활성화
- toggle true일때 className `active`를 추가해 active일때만 transform 속성과 background-color 속성을 변경 시켰습니다.

## Modal.js

- useState로 버튼의 상태를 boolean으로 관리해 클릭이벤트 발생시 !modal로 활성화/비활성화
- toggle true일때 className `active`를 추가해 false일떄 display:none, true일땐 display : block으로 활성화 시켰습니다.

## Tab.js

- 각각 탭의 정보들을 배열 형태로 상태를 관리하여, 클릭 이벤트 발생시 해당탭의 id값을 찾아 active 속성을 추가하였습니다.

## Tag.js

- tag 상태를 배열로 관리
- Enter를 계속 누르고 있는 예외사항을 생각해 Enter 키보드를 뗄경우인 KeyUp이벤트를 사용했습니다.
- input에 빈 값이나 공백만을 작성하고 Enter를 누르는 예외 사항을 고려해 e.key가 Enter키가 아니거나 빈값일 경우 return으로 이벤트를 취소 시켰습니다.
- useRef를 사용해 Tag에 item이 생성될떄 item에 부여될 id값을 관리하였습니다.

## AutoComplete.js

- input list id값과 datalist id값을 일치시키고 option 태그로 AutoComplete될 데이터들을 관리하였습니다.

## ClickToEdit.js

- 2개의 input이 있지만 인풋 하나당 하나의 상태만 변경시키기 때문에 상태를 {name, age}로 한번에 관리하였습니다.
- input에 focus가 해제될때 view가 변경되기 때문에 Blur이벤트를 사용하였습니다.

## utils

- 재사용 되는 Title, Container 컴포넌트들은 childeren, props로 재사용 가능하게 구현하였습니다.
