import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import GuestNav from './GuestNav';
import MemberNav from './MemberNav';

const SwitchNav = createSwitchNavigator({
    MemberNav,
    GuestNav,
})

export default createAppContainer(SwitchNav);