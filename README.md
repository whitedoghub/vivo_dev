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

## Tablet 적용

- <https://dev-yakuza.github.io/ko/react-native/react-native-support-tablet/>
