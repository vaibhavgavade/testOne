import React from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import FirstScreen from './Screen/FirstScreen';
import SecondScreen from './Screen/SecondScreen';
import ThirdScreen from './Screen/ThirdScreen';
const AppStack = createStackNavigator({
    one:{
        screen:FirstScreen,
        navigationOptions:{
            headerBackTitle:null
        }
    },
    two:{
        screen:SecondScreen,
        navigationOptions:{
            headerTitle:'GOAL APP',
            headerTintColor:'red'
           
        }
    },
    third:{
        screen:ThirdScreen
    }
})

export default createAppContainer(AppStack);


