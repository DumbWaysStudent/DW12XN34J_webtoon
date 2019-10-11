import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image, FlatList, SafeAreaView, Share, ScrollView, TouchableOpacity} from 'react-native';
import { Form,Left, Right, Picker, Icon, Button, Item, Label, Input, Header, Title, Body, Container } from 'native-base';


class DetailEp extends Component {

    constructor(props) {
        super(props);
        this.state = {
          episode: [
            {
              id: 0,
              image: 'https://cdn.komikcast.com/wp-content/img/S/Solo_leveling/076/03_01.jpg',
            },
            {
              id: 1,
              image: 'https://cdn.komikcast.com/wp-content/img/S/Solo_leveling/076/03_02.jpg',

            },
            {
              id: 2,
              image: 'https://cdn.komikcast.com/wp-content/img/S/Solo_leveling/076/04_01.jpg',
            },
            {
              id: 3,
              image: 'https://cdn.komikcast.com/wp-content/img/S/Solo_leveling/076/04_02.jpg',
            },
          ]
        };
      }

    onClickShare = () => Share.share({
        title: 'Title',
        message: 'Share',
        url: 'www.example.com',
        subject : 'Subject'
    })

    render() {
        return (
            <View>
                <Header style={styles.bar}>
                    <Left>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate(this.props.navigation.getParam('prevScreen'))}>
                        <Icon name='arrow-back' style={styles.share} />
                        </TouchableOpacity>
                    </Left>
                    <Body><Text style={styles.barTitle}>Episode 1</Text></Body>
                    <Right>
                        <Icon name='share' onPress={this.onClickShare} />
                    </Right>
                </Header>
                <SafeAreaView>
                    <ScrollView>
                        <View>
                            <FlatList 
                            data={this.state.episode}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item, index})=>
                            <View>
                                <Image source={{uri : item.image}} style={styles.imgEps} />
                            </View>
                            }
                            />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bar:{
        backgroundColor:'#4287f5'
      },
    share:{
        backgroundColor:'#4287f5'
    },
    barTitle:{
        fontSize:20,
    },
    imgEps:{
        width: '100%',
        height: 900,
        borderColor:'black',
    }
})
export default DetailEp;