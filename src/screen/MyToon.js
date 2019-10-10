import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, Image, StyleSheet } from 'react-native'
import { Header, Left, Right, Icon, Body, Fab } from 'native-base';

class MyToon extends Component {

    constructor(props){
        super(props);
        this.state = {
            myWebt :  [{
                title: 'Suddenly, I Became A ....',
                image: 'https://cdn.idntimes.com/content-images/community/2019/05/whoprincess-tt-53769c23d1701756a652a7c2cfc9ac68.png',
                episode: '32 Episode(s)'
                }, {
                title: 'Weak Hero',
                image: 'https://cdn.idntimes.com/content-images/community/2019/05/screenshot-20190509-150510-6328b0ae32223577bdbd43da853762d1.png',
                episode: '20 Episode(s)'
                },
                {
                title: 'Killstagram',
                image: 'https://cdn.idntimes.com/content-images/community/2019/05/screenshot-20190509-145620-43ff1dab6072ada62ba43e14321a87ef.png',
                episode: '42 Episode(s)'
                }],
            active: false,  
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Header style={styles.bar}>
                    <Left>
                        <Icon name='arrow-back' onPress={() => this.props.navigation.navigate('Profile')} />
                    </Left>
                    <Body>
                        <Text style={styles.title}>My Webtoon</Text>
                    </Body>
                    <Right></Right>
                </Header>

                <View style={styles.cont}>                  
                    <View>                    
                        <FlatList 
                        data={this.state.myWebt}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) =>
                            <View style={styles.paddImg}>
                                <Image source={{uri : item.image}} style={styles.imgList} />
                                <View style={styles.titleImg}>
                                    <Text style={styles.txtTitle}>{item.title}</Text>
                                    <Text style={styles.txtEpisode}>{item.episode}</Text>
                                </View>
                            </View>
                            }
                            keyExtractor={(item, index) => index.toString()
                            }
                            />       
                    </View>
                    <View style={styles.flx}>
                        <Fab
                            active={this.state.active}
                            direction="up"
                            containerStyle={{ }}
                            style={{ backgroundColor: '#4287f5' }}
                            position="bottomRight"
                            onPress={() => this.setState({ active: !this.state.active })}>
                            <Icon name="add" onPress={() => this.props.navigation.navigate('CreateMyToon')} />
                        </Fab>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    bar:{
        backgroundColor : '#4287f5'
    },

    title:{
        fontSize:24
    },
    iconSearch:{
        paddingRight:20
    },
    imgList:{
        width:100,
        height:100,
        borderColor:'black',
        borderWidth:2,
    },
    paddImg:{
        paddingHorizontal:20,
        paddingTop:20,
        flexDirection:'row'
    },
    titleImg:{
        paddingLeft:10,
    },
    txtTitle:{
        fontSize:20,
        fontWeight:'bold'
    },
    txtEpisode:{
        fontSize:16,
        marginTop:10
    },
    flx:{
        flex:1
    },
    cont:{
        flex:1
    }
})

export default MyToon;