import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './home/HomeScreen';
import LiveScreen from './live/LiveScreen';
import VODScreen from './vod/VODScreen.js';
import AODScreen from './aod/AODScreen';
import TODScreen from './tod/TODScreens';

const Tabs = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="live" component={LiveScreen} />
      <Tabs.Screen name="vod" component={VODScreen} />
      <Tabs.Screen name="aod" component={AODScreen} />
      <Tabs.Screen name="tod" component={TODScreen} />
    </Tabs.Navigator>
  );
};

export default BottomTabs;
