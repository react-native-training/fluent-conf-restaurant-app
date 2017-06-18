import React from 'react';

import { Linking, Text, Image, View, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default Home = () => (
  <View style={styles.container}>
    <Text>Hello from Home</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9c9c9',
    justifyContent: 'center',
    alignItems: 'center'
  },
})