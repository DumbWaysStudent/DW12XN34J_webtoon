import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import BottomTabNavigator from './BottomTabNavigator';
import Details from '../screen/Details';
import DetailEp from '../screen/DetailEp';


const MemberNav = createStackNavigator({
    // BottomTabNavigator : {
    //     screen: BottomTabNavigator,
    //     navigationOptions: {
    //         header : null
    //     }
    // },
    Details : {
        screen: Details,
        navigationOptions:{
            header: null
        }
    },
    DetailEp : {
        screen: DetailEp,
        navigationOptions:{
            header: null
        }
    }
},
{
    initialRouteName: 'DetailEp'
})

export default createAppContainer(MemberNav);