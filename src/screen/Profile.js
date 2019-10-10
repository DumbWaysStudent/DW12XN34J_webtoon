import React, { Component } from 'react';
import { View, Text,TouchableOpacity, Image, StyleSheet} from 'react-native';
import { Right, Header, Left } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'

class Profile extends Component {
    render() {
        return (
            <View>
                <Header style={styles.bar}>
                    <Left>
                        <Text style={styles.prof}>Profile</Text>
                    </Left>
                    <Right>
                        <TouchableOpacity>
                            <Icon name='pencil' style={styles.iconE} />
                        </TouchableOpacity>
                    </Right>
                </Header>
                <View>
                    <View>
                        <Image source={require('../img/img_299586.png')} style={styles.img} />
                    </View>
                    <View style={styles.name}>
                        <Text style={styles.txtName}>Your Name</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <TouchableOpacity style={styles.create}>
                            <Text style={styles.txtCre}>
                                My Webtoon Creation
                            </Text>
                            <Icon name='arrow-right' style={styles.iconArrow} onPress={() => this.props.navigation.navigate('MyToon')} />
                            
                        </TouchableOpacity>
                        
                    </View>
                    <View>
                        <TouchableOpacity style={styles.logout} onPress={() => this.props.navigation.navigate('GuestNav')} >
                            <Text style={styles.txtLog}>Log Out</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    bar:{
        backgroundColor: '#4287f5'
    },
    prof:{
        fontSize:22
    },
    iconE:{
        fontSize:28,
        paddingRight:5
    },
    img:{
        width:200,
        height:200,
        alignSelf:'center',
        marginTop:15
    },
    name:{
        alignItems:'center',
        marginTop:25,
        
    },
    txtName:{
        fontSize:32
    },
    create:{
        borderColor:'black',
        borderWidth:2,
        flexDirection:'row',
    },
    logout:{
        borderColor:'black',
        borderWidth:2,
        borderTopWidth:0,
    },
    txtCre:{
        fontSize:24,
        paddingVertical:10,
        flex:8
    },
    txtLog:{
        fontSize:24,
        paddingVertical:10
    },
    iconArrow:{
        fontSize:24,
        marginTop:15,
        marginRight:10
    },
})
export default Profile;