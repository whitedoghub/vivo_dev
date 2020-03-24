import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const getLoginInfo = async () => {
  try {
    const loginTarget = await AsyncStorage.getItem('@login_target');
    if (loginTarget !== null) {
      console.log('===> @login_target : ', loginTarget);
      console.log(
        '===> @access_token : ',
        await AsyncStorage.getItem('@access_token'),
      );
      console.log(
        '===> @access_token_expires_at : ',
        await AsyncStorage.getItem('@access_token_expires_at'),
      );
      console.log(
        '===> @refresh_token : ',
        await AsyncStorage.getItem('@refresh_token'),
      );
      console.log(
        '===> @refresh_token_expires_at : ',
        await AsyncStorage.getItem('@refresh_token_expires_at'),
      );
    } else {
      console.log('===> @login_target : null');
    }
  } catch (error) {
    console.error();
  }
};
const IntroScreen = ({ navigation }) => {
  getLoginInfo();
  return (
    <View>
      <Text>Intro Screen</Text>
      <Button
        title="go to Login"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  );
};

export default IntroScreen;
