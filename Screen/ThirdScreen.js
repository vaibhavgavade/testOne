import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default class ThirdScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={Styles.Container}>
        <Text> ThirdScreen </Text>
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