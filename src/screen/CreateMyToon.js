import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
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
                <Header style={styles.header}>
                    <Left>
                        <Icon name='arrow-back' onPress={()=>this.props.navigation.navigate(this.props.navigation.getParam('prevScreen'))} />
                    </Left>
                    <Body>
                        <Text style={styles.txtBar}>Create Webtoon</Text>
                    </Body>
                    <Right>
                        <Icon name='checkmark' onPress={() => this.props.navigation.navigate('MyToon')} />
                    </Right>
                </Header>

                <View style={styles.viewInput}>
                    <Text style={styles.titleInput}>Title</Text>
                    <TextInput  placeholder='Search' style={styles.input} />
                </View>

                <View style={styles.flexEps}>
                    <Text style={styles.eps}>Episode</Text>
                    
                        <FlatList 
                        data={this.state.imgEps}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) =>
                        <View style={styles.containerEps} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('EditEpisode', {prevScreen: 'CreateMyToon'})} >
                                <Image source={{uri : item.url}} style={styles.imgList} />
                            </TouchableOpacity>
                            <View style={styles.txtImg}>
                                <Text style={styles.titleEps}>{item.title}</Text>
                                <Text style={styles.update}>{item.lastUpdate}</Text>
                            </View>
                        </View>
                        }
                        />
                    
                </View>
                <View>
                    <TouchableOpacity style={styles.btnAdd} onPress={() => this.props.navigation.navigate('CreateEpisode')} >
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
    header:{
        backgroundColor: '#4287f5'
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
        textAlign:'center',  
        color:'white'
    },
    btnAdd:{
        borderWidth:2,
        padding:20,
        width:'70%',
        alignSelf:'center',
        backgroundColor:'#1c313a'
    },
    input:{
        borderColor:'black',
        borderWidth:2,
        fontSize:18
    },
    viewInput:{
        width:'70%',
        alignSelf:'center'
    },
    titleInput:{
        fontSize:20,
        fontWeight:'bold'
    },
})
export default CreateMyToon;