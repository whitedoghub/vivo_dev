import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        title="go to home"
        onPress={() => navigation.navigate('BottomTabs')}
      />
    </View>
  );
};

export default LoginScreen;
