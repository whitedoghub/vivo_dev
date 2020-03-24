/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';

import IntroScreen from './src/screens/splash/IntroScreen';
import LoginScreen from './src/screens/login/LoginScreen';
import BottomTabs from './src/screens/bottomtabs';

const Stack = createStackNavigator();

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  const getLoginInfo = async () => {
    let loginTarget = null;
    try {
      loginTarget = await AsyncStorage.getItem('@login_target');
      if (loginTarget != null) {
        setIsLogin(true);
      }
      console.log('@login_target : ', loginTarget);
      console.log('isLogin : ', isLogin);
    } catch (error) {
      console.error();
    }
    return loginTarget;
  };

  useEffect(() => {
    getLoginInfo();
    SplashScreen.hide();
  }, [isLogin]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 1500);
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLogin ? 'BottomTabs' : 'Login'}
        headerMode="none">
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
