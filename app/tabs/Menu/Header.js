import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const HeaderImage = () => (
  <Image
    resizeMode='contain'
    style={styles.logo}
    source={require('../../assets/images/logo.png')}
  />
)

export default Header = {
  title: 'Menu',
  headerTitle: <HeaderImage />,
}

const styles = StyleSheet.create({
  logo: {
    width: width / 3,
    marginBottom: 6,
    maxHeight: 50
  }
})