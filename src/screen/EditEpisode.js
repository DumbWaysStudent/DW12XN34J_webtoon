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
              url: 'data:image/jpeg;base64,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',
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
        fontWeight:'bold',
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