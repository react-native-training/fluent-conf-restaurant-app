import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';

import Home from './tabs/Home';
import Menu from './tabs/Menu';
import Contact from './tabs/Contact';

const TabConfig = {
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./assets/images/homeicon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  },
  Menu: {
    screen: Menu,
    navigationOptions: {
      tabBarLabel: 'Menu',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./assets/images/menuicon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  },
  Contact: {
    screen: Contact,
    navigationOptions: {
      tabBarLabel: 'Contact',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./assets/images/contacticon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  },
}

const TabStyleConfig = {
  tabBarOptions: {
    activeTintColor: '#fe0000',
  },
}

export default App = TabNavigator(TabConfig, TabStyleConfig);

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28
  }
})
