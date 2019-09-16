import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default class SecondScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={Styles.Container}>
        <Text> SecondScreen </Text>
      </View>
    );
  }
}

const Styles =StyleSheet.create({
    Container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
  })