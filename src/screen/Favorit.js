import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { Input, Item, Icon } from 'native-base';

class Favorit extends Component {

    constructor(props){
        super(props);
        this.state = {
            favCard :  [{
                title: 'Suddenly, I Became A ....',
                image: 'https://cdn.idntimes.com/content-images/community/2019/05/whoprincess-tt-53769c23d1701756a652a7c2cfc9ac68.png',
                rating: '100+ Favourite'
                }, {
                title: 'Weak Hero',
                image: 'https://cdn.idntimes.com/content-images/community/2019/05/screenshot-20190509-150510-6328b0ae32223577bdbd43da853762d1.png',
                rating: '90 Favourite'
                },
                {
                title: 'Killstagram',
                image: 'https://cdn.idntimes.com/content-images/community/2019/05/screenshot-20190509-145620-43ff1dab6072ada62ba43e14321a87ef.png',
                rating: '80 Favourite'
                }],
            
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.search}>
                    <Item>
                        <Input placeholder='Search' />
                        <Icon name='search' style={styles.iconSearch} />
                    </Item>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>                    
                        <FlatList 
                        data={this.state.favCard}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) =>
                        <View style={styles.paddImg}>
                            <Image source={{uri : item.image}} style={styles.imgList} />
                            <View style={styles.titleImg}>
                                <Text style={styles.txtTitle}>{item.title}</Text>
                                <Text style={styles.txtRating}>{item.rating}</Text>
                            </View>
                        </View>
                        }
                        keyExtractor={(item, index) => index.toString()
                        }
                        />
                        
                        </View>
                </ScrollView>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    search:{
        borderColor:'black',
        borderWidth:2,
        marginHorizontal:20,
        marginVertical:5
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
    txtRating:{
        fontSize:16,
    }
})

export default Favorit;