import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';

export default class FirstScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
     

    };
    
  }

  

 
  render() {
   
    return (
      <View style={Styles.Container}>
        <Text> FirstScreen</Text>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('two')}>
            <Text>Go</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('third')}>
            <Text>Go</Text>
        </TouchableOpacity>
         
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