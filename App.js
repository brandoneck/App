/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import screenOne from './screenOne';
import screenTwo from './screenTwo';

const App = StackNavigator({
  screenOne: {screen: screenOne},
  screenTwo: {screen: screenTwo},
})
export default App;









const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  button: {
      alignSelf: 'stretch',
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 20,
      borderRadius: 5,
      height: 40,
      justifyContent: 'center',
      backgroundColor: '#3F51B5'
  },
  buttonText: {
      color: 'white',
      fontSize: 22,
      alignSelf: 'center',
  }
})