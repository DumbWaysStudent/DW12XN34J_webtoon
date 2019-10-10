import React, { Component } from 'react';
import { View, Text,TouchableOpacity, Image} from 'react-native';
import { Right, Header, Left } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Profile extends Component {
    render() {
        return (
            <View>
                <Header>
                    <Left>
                        <Text>Profile</Text>
                    </Left>
                    <Right>
                        <TouchableOpacity>
                            <Icon name='edit' />
                        </TouchableOpacity>
                    </Right>
                </Header>
                <View>
                    <View>
                        <Image />
                    </View>
                    <View>
                        <Text>Your Name</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text>My Webtoon Creation</Text>
                    </View>
                    <View>
                        <Text>Log Out</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default Profile;