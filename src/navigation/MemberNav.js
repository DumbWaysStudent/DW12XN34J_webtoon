import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import BottomTabNavigator from './BottomTabNavigator';
import Details from '../screen/Details';
import DetailEp from '../screen/DetailEp';
import ProfilEdit from '../screen/ProfilEdit';
import MyToon from '../screen/MyToon';
import CreateMyToon from '../screen/CreateMyToon'


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
    },
    ProfilEdit:{
        screen: ProfilEdit,
        navigationOptions:{
            header:null
        }
    },
    MyToon:{
        screen: MyToon,
        navigationOptions:{
            header: null
        }
    },
    CreateMyToon:{
        screen : CreateMyToon,
        navigationOptions:{
            header: null,
        }
    }
},
{
    initialRouteName: 'CreateMyToon'
})

export default createAppContainer(MemberNav);