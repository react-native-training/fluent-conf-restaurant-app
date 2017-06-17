import React from 'react';

import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';

import Header from '../Header';

export default class Menu extends React.Component {
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