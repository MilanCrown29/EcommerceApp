/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MyTabs from './src/screen/navigation';





const App= () => {
  

  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
};

export default App;
