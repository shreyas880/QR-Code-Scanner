import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScanScreen from './screens/ScanScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends Component {
  render(){
    return (
    <View style={styles.container}>
      <AppContainer style={{
        flex: 1,
        backgroundColor: 'cyan',
        alignItems: 'center',
        justifyContent: 'center',
      }}/>
    </View>
    );
  }
}

var BottomTabNavigator = createBottomTabNavigator({
  Scan:{
    screen:ScanScreen
  },
});

var AppContainer = createAppContainer(BottomTabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});