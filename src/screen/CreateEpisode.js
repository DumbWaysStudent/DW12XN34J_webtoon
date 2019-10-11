import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { Header, Left, Icon, Body, Right, Input, Button } from 'native-base';



class CreateMyToon extends Component {
    constructor(props){
    super(props);
    this.state ={
        addImg: [
            {
              id: 0,
              title: '1.Cover.png',
              url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
            },
            {
              id:1,
              title: '2.Introduction.png',
              url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
            },
          ]
    }
}

    render() {
        return (
            <View style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Icon name='arrow-back' onPress={() => this.props.navigation.navigate('CreateMyToon')} />
                    </Left>
                    <Body>
                        <Text style={styles.txtBar}>Create Episode</Text>
                    </Body>
                    <Right>
                        <Icon name='checkmark' onPress={() => this.props.navigation.navigate('CreateMyToon')} />
                    </Right>
                </Header>

                <View style={styles.viewInput}>
                    <Text style={styles.titleInput}>Name</Text>
                    <TextInput style={styles.input} />
                </View>

                <View style={styles.flexEps}>
                    <Text style={styles.eps}>Add Images</Text>
                    
                        <FlatList 
                        data={this.state.addImg}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) =>
                        <View style={styles.containerEps} >
                            <Image source={{uri : item.url}} style={styles.imgList} />
                            <View style={styles.txtImg}>
                                <Text style={styles.titleEps}>{item.title}</Text>
                                <View>
                                    <Button style={styles.buttonDel}>
                                        <Text style={styles.del}>Delete</Text>
                                    </Button>
                                </View>
                            </View>                           
                        </View>                        
                        }                        
                        />
                        
                    
                </View>
                <View>
                    <TouchableOpacity style={styles.btnAdd} >
                        <Text style={styles.txtAdd}>+ Image</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput style={styles.test} /> 
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    container:{
        flex:1
    },
    containerEps:{
        flexDirection:'row',
        marginLeft:60,
        marginBottom:20
              
    },
    containerSearch:{
        borderColor:'black',
        borderWidth:2,
        marginHorizontal:20,
        marginVertical:5
    },
    header:{
        backgroundColor:'#4287f5'
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
        alignSelf:'center',
        fontSize:40
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
        marginLeft:10,
        flexDirection:'column'
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
        padding:10,
        width:'70%',
        alignSelf:'center'
    },
    buttonDel:{
        borderColor:'black',
        backgroundColor:'#1c313a',
        width:70,
    },
    del:{
        fontSize:16,
        fontWeight:'bold',
        paddingLeft:10
    }
})
export default CreateMyToon;