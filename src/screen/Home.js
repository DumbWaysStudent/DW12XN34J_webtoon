import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { Container, Input, Item, Button } from 'native-base';
import Slideshow from 'react-native-image-slider-show';
import Icon from 'react-native-vector-icons/FontAwesome5';


export class Home extends Component {
    constructor(){
        super()
        this.state = {
            position: 1,
            time: null,
            banners: [{
                title: 'Suddenly, I Became A Princess',
                url: 'https://cdn.idntimes.com/content-images/community/2019/05/whoprincess-tt-53769c23d1701756a652a7c2cfc9ac68.png'
                }, {
                title: 'Weak Hero',
                url: 'https://cdn.idntimes.com/content-images/community/2019/05/screenshot-20190509-150510-6328b0ae32223577bdbd43da853762d1.png'
                }, {
                title: 'Killstagram',
                url: 'https://cdn.idntimes.com/content-images/community/2019/05/screenshot-20190509-145620-43ff1dab6072ada62ba43e14321a87ef.png'
            }],
            favCard :  [{
                title: 'Suddenly, I Became A Princess',
                image: 'https://cdn.idntimes.com/content-images/community/2019/05/whoprincess-tt-53769c23d1701756a652a7c2cfc9ac68.png'
                }, {
                title: 'Weak Hero',
                image: 'https://cdn.idntimes.com/content-images/community/2019/05/screenshot-20190509-150510-6328b0ae32223577bdbd43da853762d1.png'
                }, {
                title: 'Killstagram',
                 image: 'https://cdn.idntimes.com/content-images/community/2019/05/screenshot-20190509-145620-43ff1dab6072ada62ba43e14321a87ef.png'
             }],
            listImg: [{
                title: 'Suddenly, I Be...',
                image: 'https://scontent-frx5-1.cdninstagram.com/vp/9f4cd15cd5ee27153ee0b57b2ac58a99/5DC96E1B/t51.2885-15/e35/60613310_142726766846155_1219225289482409942_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&se=7&ig_cache_key=MjA1NjAwOTc1NTU3MjE5MzE5OQ%3D%3D.2'
            }, {
                title: 'Weak Hero',
                image: 'data:image/jpeg;base64,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'
            }, {
                title: 'Killstagram',
                image: 'https://scontent.cdninstagram.com/vp/3797512605f04d3b06b9820856814ccc/5DF0840D/t51.2885-15/e35/c12.0.691.691a/s480x480/67701751_461633028018523_2145113131653080542_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com'
            }]
        }
    }

    componentDidMount(){
        this.setState({
            time: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.banners.length - 1 ? 0 : this.state.position + 1
                });
            }, 3000)
        });
    }

    render() {
        return (
            
            <View style={styles.container}>
                
                <View style={styles.start}>
                        <Item>
                            <Input placeholder='Search' style={styles.search} />
                            <Icon name="search" style={styles.iconSearch} />
                        </Item>
                    </View>

                    <View style={styles.slide}>
                        <Slideshow
                            height={150}
                            overlay={true}
                            arrowSize={0}
                            indicatorSelectedColor="#4287f5"
                            titleStyle={{color : "white"}}
                            dataSource={this.state.banners}
                            position={this.state.position}
                            onPositionChanged={position => this.setState({ position })}
                        />
                    </View>

                <View style={styles.favorite}>
                    <Text style={styles.txtFav}>Favorite</Text>
                        
                    <View>
                        <View >
                            <FlatList
                            data={this.state.favCard}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({item}) =>
                            <TouchableOpacity onPress={() => alert(item.title)}>
                                <View style={styles.list}>
                                    <Image style={styles.imagelist} source={{uri : item.image}}/>
                                    <View style={styles.boxImg}>
                                        <Text style={{ textAlign: 'center'}}>{item.title}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            }
                            keyExtractor={(item, index) => index.toString()
                            }/>
                        </View>
                    </View>
                </View>
                <View style={styles.viewAll}>
                    <Text style={styles.txtAll}>All</Text>
                </View>
                
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={styles.all}>
                        
                        <View>
                            <FlatList
                            data={this.state.listImg}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item}) =>
                            
                                <View style={styles.wrapAll}>
                                    <Image style={styles.imagelistAll} source={{uri : item.image}}/>
                                    <View style={styles.viewTxtAll}>
                                        <Text style={styles.txtAllList}>{item.title}</Text>
                                        <TouchableOpacity style={styles.btnFav}>
                                            <Text style={styles.txtBtnFav}>+ Favorite</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            
                            }
                            keyExtractor={(item, index) => index.toString()
                            }/>
                        </View>
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
    start:{
        borderColor:'black',
        borderWidth:2,
        marginHorizontal:20,
        marginVertical:5
    },
    search:{
        fontSize:18,
    },
    iconSearch:{
        fontSize:20,
        marginRight:10
    },
    slide:{
        marginHorizontal:20,
        marginVertical:10,
        borderColor:'black',
        borderWidth:2,
    },
    favorite:{
        marginHorizontal:20,
        marginVertical:10,
    },
    txtFav:{
        fontSize:18,
        fontWeight:'bold',
    },
    all:{
        marginHorizontal:20,
    },
    list:{
        marginLeft:10
        
    },
    imagelist : {
        width: '100%', 
        height:120,
        borderColor:'black',
        borderWidth:3,    
    },
    boxImg:{
        width:150,
    },
    viewAll:{
        marginLeft:20,
    },
    txtAll:{
        fontSize:18,
        fontWeight:'bold',
    },
    txtAllList:{
        fontSize:16,
        marginLeft:10
    },
    wrapAll:{
        flexDirection:'row',
        paddingTop: 10,
    },
    imagelistAll:{
        width:60,
        height:60,
        borderColor:'black',
        borderWidth:2,
    },
    viewTxtAll:{
        
    },
    btnFav:{
        marginLeft:10,
        paddingLeft:10,
        marginRight:20,
        marginTop:5,   
    },
    txtBtnFav:{
        fontWeight:'bold',
        backgroundColor:'tomato',
        borderColor:'black',
        borderWidth:1,
    }
})
export default Home;
