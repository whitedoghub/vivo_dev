import React from 'react';
import { View, Text, Button } from 'react-native';

const IntroScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Intro Screen</Text>
      <Button
        title="go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default IntroScreen;
