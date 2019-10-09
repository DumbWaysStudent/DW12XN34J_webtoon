// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

//  import Login from './src/screen/Login';
// import BottomTabNavigator from './src/navigation/BottomTabNavigator';
// import Home from './src/screen/Home';



// const appNavigator = createStackNavigator({
//     BottomTabNavigator : {
//       screen: BottomTabNavigator,
//       navigationOptions:{
//         headerTransparent: true
//       }
//     },

//     // Login: {
//     //   screen: Login,
//     //   navigationOptions:{
//     //       headerTransparent: true
//     //   }
//     // },
//     Home: {
//       screen: Home,
//       navigationOptions: {
//           headerTransparent: true,
//           headerLeft: null
//       }
//     },
//   },
//   {
//       initialRouteName: 'BottomTabNavigator',
//   });
  
//   export default createAppContainer(appNavigator);

import React, { Component } from 'react';
import Navigator from './src/Navigator';

export default class App extends Component {
  render() {
    return (
      <Navigator />
    );
  }
}
