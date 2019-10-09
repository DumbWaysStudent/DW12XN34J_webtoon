import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../screen/Login';

const GuestNav = createStackNavigator({
    Login : {
        screen: Login,
        navigationOptions: {
            header : null
        }
    }
})

export default createAppContainer(GuestNav);