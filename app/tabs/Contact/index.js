import React from 'react';
import { TextInput, Text, Image, View, StyleSheet, Dimensions } from 'react-native';

import { FormLabel, FormInput, Button } from 'react-native-elements';

const { width } = Dimensions.get('window');

export default class Contact extends React.Component {

  state = {
    name: '',
    email: '',
    message: '',
  }

  updateFormInput = (type, value) => {
    this.setState({
      [type]: value,
    });
  }

  sendMessage = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image resizeMode='contain' style={styles.logo} source={require('../../assets/images/logo.png')} />
        </View>
        <Text style={styles.title}>Contact Us</Text>
        <FormLabel>Name</FormLabel>
        <FormInput value={this.state.name} onChangeText={(text) => this.updateFormInput('name', text)} />
        <FormLabel>Email</FormLabel>
        <FormInput value={this.state.email} onChangeText={(text) => this.updateFormInput('email', text)} />
        <FormLabel>Message</FormLabel>
        <FormInput value={this.state.message} onChangeText={(text) => this.updateFormInput('message', text)} />
          
        <Button
          onPress={this.sendMessage}
          title="Submit"
          large
          backgroundColor="#fe0000"
          buttonStyle={styles.button}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginLeft: 20,
    fontFamily: 'AlegreyaSansSC-Light',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  logoContainer: {
    maxHeight: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 170,
    maxHeight: 40
  },
  button: {
    marginTop: 20
  }
})