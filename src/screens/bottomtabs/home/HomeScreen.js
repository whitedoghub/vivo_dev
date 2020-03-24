import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const clear = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {}
};

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="async storage 초기화" onPress={clear} />
    </View>
  );
};

export default HomeScreen;
