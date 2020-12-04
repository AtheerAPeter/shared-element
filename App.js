/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Snapchat from './snapchat';
import Story from './story';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          mode="modal"
          screenOptions={{
            gestureEnabled: false,
            headerShown: false,
            cardOverlayEnabled: true,
            gestureDirection: 'vertical',
            gestureResponseDistance: {
              vertical: 300,
            },
          }}>
          <Stack.Screen name="Snapchat" component={Snapchat} />
          <Stack.Screen
            name="Story"
            component={Story}
            sharedElementsConfig={(route, otherRoute, showing) => {
              const item = route.params;
              return [`item.${item.id}.photo`];
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
