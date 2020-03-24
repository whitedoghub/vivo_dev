## 테스트 프로젝트 준비

### 프로젝트 초기화

```nodejs
npx react-native init vivo_dev
```

### navigation container 및 라이브러리 설치

```nodejs
yarn add @react-navigation/native react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-context @react-native-community/masked-view
```

### navigator 설치

```nodejs
yarn add @react-navigation/stack @react-navigation/bottom-tabs @react-navigation/drawer
```

### (option) disable yellow warning box

App.js

```javascript
console.disableYellowBox = true;
```

---

### Git

VSCode git

```
git config --global user.email "you@example.com"
git config --global user.name "your name"
git init
```

Github 연동

```
git remote add orgin <github 주소>
```

---

### Android Debug Key

openssl 설치 : https://bit.ly/2TU1eA7

debug key 생성

```
keytool -exportcert -alias androiddebugkey -keystore ~~project\android\app\debug.keystore -storepass android -keypass android | openssl sha1 -binary | openssl base64
```

---

## Splash Screen

splash 이미지 생성 (최소 3000 X 3000 px)

```
yarn add -D @bam.tech/react-native-make
npx react-native set-splash --path ./src/assets/choi.png
```

splash 처리

```
yarn add react-native-splash-screen
```

app.js

```
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  useEffect(() => { // Login 정보 (회원가입 유무, 자동 로그인, 회원 프로파일 etc..)
    setTimeout(() => {
      SplashScreen.hide();
    }, 5000);
  }, []);

  return (
    ~~~
  )
}

export default App;
```

[참조]

- SplashScreen 이미지 자동 생성 : <https://dev-yakuza.github.io/ko/react-native/react-native-splash-screen/>
- <https://github.com/crazycodeboy/react-native-splash-screen>
- SplashScreen 적용 : <https://kentakang.com/161>
- <https://aboutreact.com/animated-splash-screen/>

---

### Social Login (Kakao)

라이브러리 설치

```
yarn add @react-native-seoul/kakao-login
yarn add @react-native-community/async-storage
```

버튼 컴포넌트 라이브러리 설치

```
yarn add apsl-react-native-button
```

[참고]

- @react-native-seoul/kakao-login : <https://github.com/react-native-seoul/react-native-kakao-login>
- Kakao Developers : <https://developers.kakao.com/docs/android/getting-started>
- Access Token, Refresh Token : <https://tansfil.tistory.com/59>
- react-native-community/async-storage : <https://github.com/react-native-community/async-storage>

---

## Tablet 적용

- <https://dev-yakuza.github.io/ko/react-native/react-native-support-tablet/>
