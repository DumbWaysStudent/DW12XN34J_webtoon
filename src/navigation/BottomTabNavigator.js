import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';


import Home from '../screen/Home';
import Profile from '../screen/Profile';
import Favorit from '../screen/Favorit';

const BottomTabNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'For You',
            tabBarIcon : () => (
                <Icon name='home' size={20} color={'#ffff'} />
            )
        }
    },
    Favorit: {
        screen: Favorit,
        navigationOptions: {
            tabBarLabel: 'Favorit',
            tabBarIcon: () => (
                <Icon name='star' size={20} color={'#ffff'} />
            )
        }
    },
    Profile:{
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: () => (
                <Icon name="user" size={20} color={'#ffff'} />
            )
        }
    },
},

{    
    initialRouteName: 'Favorit',
    activeColor: '#fff',  
    inactiveColor: '#000',  
    barStyle: { backgroundColor: '#4287f5' },  
  }, 
)


export default createAppContainer(BottomTabNavigator);