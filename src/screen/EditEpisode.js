import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { Header, Left, Icon, Body, Right, Input } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';



class CreateMyToon extends Component {
    constructor(props){
    super(props);
    this.state ={
        editEps: [
            {
              id: 0,
              title: '1.Cover.png',
              url: 'https://upload.wikimedia.org/wikipedia/id/thumb/3/3e/Kanojo%2C_Okarishimasu_Vol_1.jpg/220px-Kanojo%2C_Okarishimasu_Vol_1.jpg',
            },
            {
              id:1,
              title: '2.Introduction.png',
              url: 'https://www.maid.my.id/wp-content/uploads/2018/07/22151.jpg',
            },
          ]
    }
}

    render() {
        return (
            <View style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Icon name='arrow-back' onPress={() => this.props.navigation.navigate(this.props.navigation.getParam('prevScreen'))} />
                    </Left>
                    <Body>
                        <Text style={styles.txtBar}>Edit Episode</Text>
                    </Body>
                    <Right>
                        <Icon name='checkmark' style={styles.iconCheck} onPress={() => this.props.navigation.navigate('CreateMyToon')} />
                    </Right>
                </Header>

                <View style={styles.viewInput}>
                    <Text style={styles.titleInput}>Name</Text>
                    <TextInput  placeholder='Search' style={styles.input} value='Episode 1' />
                </View>

                <Text style={styles.eps}>Add Images</Text>

                
                    <View style={styles.flexEps}>                        
                            <FlatList 
                            data={this.state.editEps}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item}) =>
                            <View style={styles.containerEps} >
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('EditEpisode')} >
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
                <View style={styles.buttonBottom}>
                    <TouchableOpacity style={styles.btnAdd} >
                        <Text style={styles.txtAdd}>+ Image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnDel} >
                        <Text style={styles.txtDel}>Delete Episode</Text>
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
        marginHorizontal:60,
        marginBottom:20,
        padding:2,
        borderBottomWidth:2
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
        marginVertical:10,
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
        
    },
    txtDel:{
        fontSize:22,
        color:'white',
        textAlign:'center'
    },
    btnAdd:{
        borderColor:'black',
        borderWidth:2,
        width:'60%',
        alignSelf:'center'
    },
    btnDel:{
        borderColor:'black',
        borderWidth:2,
        backgroundColor:'#1c313a',
        width:'60%',
        alignSelf:'center',
        marginTop:4
    },
    input:{
        borderColor:'black',
        borderWidth:2,
        fontSize:18,
        fontWeight:'bold'
    },
    viewInput:{
        width:'70%',
        alignSelf:'center'
    },
    titleInput:{
        fontSize:20,
        fontWeight:'bold'
    },
    buttonBottom:{
        paddingTop:10,
        
    },
    iconCheck:{
        fontSize:36,
        fontWeight:'bold'
    },
    flexEps:{
        
    }
})
export default CreateMyToon;