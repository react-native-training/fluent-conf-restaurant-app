import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

export default class Burgers extends React.Component {
  static navigationOptions = {
    title: 'Burgers'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from Burgers</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})