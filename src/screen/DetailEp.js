import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity, Image, Share} from 'react-native';
import {Left, Body, Right, Header} from 'native-base'

class DetailEp extends Component {

    constructor(props) {
        super(props);
        this.state = {
         
        }
      }

    onClickShare = () => Share.share({
        title: 'Title',
        message: 'Share',
        subject : 'Subject'
    })

    render() {
        return (
            <View>
                <Text>yaya</Text>
            </View>
        );
    }
}

export default DetailEp;