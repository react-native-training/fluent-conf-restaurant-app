import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default MenuItem = ({
  source,
  title,
  description,
  price,
}) => (
  <View>
    <Image
      resizeMode='contain'
      source={source}
      style={styles.image}
    />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
    <Text style={styles.price}>{price}</Text>
  </View> 
)

const styles = StyleSheet.create({
  title: {
    fontFamily: 'AlegreyaSansSC-Light',
    fontSize: 26,
    marginTop: 6,
    marginLeft: 10,
    marginBottom: -4,
  },
  description: {
    fontFamily: 'AlegreyaSansSC-Regular',
    fontSize: 14,
    marginLeft: 10,
  },
  image: {
    height: 220,
    width,
  },
  price: {
    fontFamily: 'AlegreyaSansSC-Medium',
    fontSize: 28,
    marginLeft: 10,
    marginBottom: 10,
  }
})