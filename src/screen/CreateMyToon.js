import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Header, Left, Icon, Body, Right, Input } from 'native-base';



class CreateMyToon extends Component {
    constructor(props){
    super(props);
    this.state ={
        imgEps: [
            {
              id: 0,
              title: 'Episode 1',
              url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
              lastUpdate: '1 Oktober 2019'
            },
            {
              id:1,
              title: 'Episode 2',
              url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
              lastUpdate: '2 Oktober 2019'
            },
            {
              id:2,
              title: 'Episode 3',
              url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
              lastUpdate: '3 Oktober 2019'
            },
          ]
    }
}

    render() {
        return (
            <View style={styles.container}>
                <Header>
                    <Left>
                        <Icon name='arrow-back' onPress={() => this.props.navigation.navigate('MyToon')} />
                    </Left>
                    <Body>
                        <Text style={styles.txtBar}>Create Webtoon</Text>
                    </Body>
                    <Right>
                        <Icon name='checkmark' onPress={() => this.props.navigation.navigate('MyToon')} />
                    </Right>
                </Header>

                <View style={styles.containerSearch}>
                    <Text style={styles.titleSearch}>Title</Text>
                    <Input style={styles.search} placeholder='Search' />
                </View>

                <View style={styles.flexEps}>
                    <Text style={styles.eps}>Episode</Text>
                    
                        <FlatList 
                        data={this.state.imgEps}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) =>
                        <View style={styles.containerEps} >
                            <Image source={{uri : item.url}} style={styles.imgList} />
                            <View style={styles.txtImg}>
                                <Text style={styles.titleEps}>{item.title}</Text>
                                <Text style={styles.update}>{item.lastUpdate}</Text>
                            </View>
                        </View>
                        }
                        />
                    
                </View>
                <View>
                    <TouchableOpacity style={styles.btnAdd} >
                        <Text style={styles.txtAdd}>+ Add Episode</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    containerEps:{
        flexDirection:'row',
        marginLeft:60,
        marginBottom:20
              
    },
    txtBar:{
        fontSize:20
    },
    row:{
        flexDirection:'row'
    },
    search:{
        borderColor:'black',
        borderWidth:2,
        padding:20,
        width:'70%',
        alignSelf:'center'
    },
    titleSearch:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:60   
    },
    eps:{
        fontSize:20,
        fontWeight:'bold',
        marginVertical:20,
        marginLeft:60  
    },
    imgList:{
        width:100,
        height:100,
        borderColor:'black',
        borderWidth:2,
    },
    txtImg:{
        marginLeft:10
    },
    titleEps:{
        fontWeight:'bold',
        fontSize:18,
        marginBottom:20
    },
    update:{
        fontWeight:"bold",
        fontSize:12
    },
    txtAdd:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center'
    },
    btnAdd:{
        borderColor:'black',
        borderWidth:2,
        padding:20,
        width:'70%',
        alignSelf:'center'
    }
})
export default CreateMyToon;