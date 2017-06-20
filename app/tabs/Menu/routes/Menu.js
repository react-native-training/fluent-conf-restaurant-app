import React from 'react';

import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Analytics from 'mobile-center-analytics';

import { ListItem } from 'react-native-elements';

import Header from '../Header';

export default class Menu extends React.Component {
  sendBurgerEvent(){
      Analytics.trackEvent('Burger interest detected',{
          prop1: new Date().getDate()
      })
  }

  static navigationOptions = {
    ...Header
  }

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          <ListItem
            underlayColor='transparent'
            title='Appetizers'
            onPress={() => navigate('Appetizers')}
          />
          <ListItem
            underlayColor='transparent'
            title='Burgers'
            onPress={() => navigate('Burgers')}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})