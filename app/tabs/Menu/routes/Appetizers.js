import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default class Appetizers extends React.Component {
  static navigationOptions = {
    title: 'Appetizers'
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
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