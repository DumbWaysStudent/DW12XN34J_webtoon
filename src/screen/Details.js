import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image, FlatList, ScrollView, Share} from 'react-native';
import { Form,Left, Right, Picker, Icon, Button, Item, Label, Input, Header, Title, Body, Container } from 'native-base';



export default class Detail extends Component  {

    constructor(props) {
      super(props);
      this.state = {
        detailImg: [
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
      };
    }

  onClickShare = () => Share.share({
    title: 'Title',
    message: 'Want Share?',
    subject : 'Subject',
  })

  FlatlistImg({item}){
    return(
      
      <View style={styles.listRow}>
        <View>
            <Image style={styles.imageList} source={{uri: item.url}}  />
        </View>
        <View style={styles.marginList}>
            <Text style={styles.titleImg}>{item.title}</Text>
            <Text style={styles.dataImg}>{item.lastUpdate}</Text>
        </View>
      </View>
    )
  }

render () {
return(
  
  <View>
    <Header style={styles.bar}>
      <Left>
        <Button transparent onPress={()=>this.props.navigation.navigate('Home')}>
          <Icon name='arrow-back' />
        </Button>
      </Left>      
      <Body>
        <Title><Text>Suddenly I Became a Princess</Text></Title>
      </Body>
      <Right >
        <Button onPress={this.onClickShare} style={styles.share}>
          <Icon name='share' />
        </Button>
      </Right>
    </Header>
  <View style={styles.viewImageHeader}>
      <Image style={styles.imageHeader} source={{uri: 'https://cdn.idntimes.com/content-images/community/2019/05/whoprincess-tt-53769c23d1701756a652a7c2cfc9ac68.png'}}  />
  </View>
  <ScrollView style={{height:"50%"}}>
      <FlatList         
        scrollEnabled={true}       
        data={this.state.detailImg}
        renderItem={this.FlatlistImg}
      />
      
    </ScrollView>
  </View>

)}

}

const styles = StyleSheet.create({
  bar:{
    backgroundColor:'#4287f5'
  },
  share:{
    backgroundColor:'#4287f5'
  },
  imageHeader : {
    width : '100%',
    height : 200,
  },
  listRow:{
    flexDirection:'row'
  },
  viewImageHeader : {
      borderWidth : 2,
      marginBottom : 20
    },
    imageList : {
      marginLeft : 20,
      marginBottom : 20,
      width : 100,
      height : 100,
      borderColor:'black',
      borderWidth:1,
    },
    marginList:{
      marginLeft:20,
    },
    titleImg:{
      fontSize:18,
      fontWeight:'bold',
    },
    dataImg:{
      fontSize:14,
      fontWeight:'bold',
    }
    
});