import React from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import FirstScreen from './Screen/FirstScreen';
import SecondScreen from './Screen/SecondScreen';
import ThirdScreen from './Screen/ThirdScreen';
const AppStack = createStackNavigator({
    one:{
        screen:FirstScreen
    },
    two:{
        screen:SecondScreen
    },
    third:{
        screen:ThirdScreen
    }
})

export default createAppContainer(AppStack);


