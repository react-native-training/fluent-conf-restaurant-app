import React from 'react';
import { TextInput, Text, Image, View, StyleSheet, Dimensions } from 'react-native';

import { FormLabel, FormInput, Button } from 'react-native-elements';

const { width } = Dimensions.get('window');

export default class Contact extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text>Hello from Home</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
})