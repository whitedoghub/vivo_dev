import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import IntroScreen from './src/screens/splash/IntroScreen';
import LoginScreen from './src/screens/login/LoginScreen';
import BottomTabs from './src/screens/bottomtabs';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 5000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro" headerMode="none">
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
