import React from 'react';

import { Linking, Text, Image, View, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default Home = () => (
  <View style={styles.container}>
    <Image
      resizeMode='contain'
      style={styles.logo}
      source={require('../../assets/images/logo.png')}
    />
    <Text style={styles.title}>Welcome to Burger Me</Text>
    <Text style={styles.subTitle}>Serving the best burgers in the world.</Text>
    <Text style={styles.number} onPress={
      () => Linking.openURL('https://github.com/react-native-training')
        .then(() => console.log('calling'))
        .catch((err) => console.log('error: ', err))
    }>
      PH: 650.555.5309
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9c9c9',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: width - 60,
    maxHeight: 60,
  },
  title: {
    fontFamily: 'AlegreyaSansSC-Light',
    fontSize: 30,
  },
  subTitle: {
    fontFamily: 'AlegreyaSansSC-Regular',
    fontSize: 16,
  },
  number: {
    color: '#fe0000',
    fontFamily: 'AlegreyaSansSC-Regular',
    fontSize: 12,
    marginTop: 10
  }
})