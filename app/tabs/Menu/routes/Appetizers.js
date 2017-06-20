import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

import MenuItem from '../../../components/MenuItem';

export default class Appetizers extends React.Component {
  static navigationOptions = {
    title: 'Appetizers',
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MenuItem
            title='Guacamole'
            price='$6'
            description='Prepared at tableside'
            source={require('../../../assets/images/guacamole.jpg')}
          />
          <MenuItem
            title='Tacos'
            price='$10'
            description='Served With Salsa, Hot Tortillas, Rice, And Beans'
            source={require('../../../assets/images/tacos.jpg')}
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