import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Icon, Button } from 'native-base';

import { createAppContainer } from 'react-navigation';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      submitDisabled : true,
      securePass: false,
      regEmail: false,
      regPass: false,
    }
  }

  onHandleEmail = (text) => {
    this.setState({email: text})
  }
  onHandledPassword = (text) => {
    this.setState({password: text})
  }

  onLoginBtn = () =>{

  }

  // valEmailPass = () =>{
  //   if(this.state.email == '' || this.state.password == ''){
  //     this.setState({submitDisabled: true})
  //   }else{
  //     this.setState({submitDisabled: false})
  //   }

  // }


  showHideIcon = () => {
    this.setState({
      securePass: !this.state.securePass
    });
  }

  regexLogin(inputForm) {
    if (inputForm == 'email') {
        let correct = this.state.email.match(/(^[a-zA-Z]+|^[0-9]+|^[a-zA-Z0-9\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]+)/g)
        if (correct != null) {
            this.state.regEmail = true
        } else {
            this.state.regEmail = false
        }
    } else if (inputForm == 'password') {
        if (this.state.password !== '') {
            this.state.regPass = true
        } else {
            this.state.regPass = false
        }
    }
    
    if (this.state.regEmail == true && this.state.regPass == true) {
        this.setState({submitDisabled: false})
    } else {
        this.setState({submitDisabled: true})
    }
  }
  

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.title}>
          <Text style={styles.titleLogin}>
              LOG IN
          </Text>
          <Text style={styles.titleTxt}>
              Login with your account WEBTOON
          </Text>
        </View>
        
        <View style={styles.form}>
          <Text style={styles.labelEmail}>Email</Text>

          <TextInput style={styles.inputBox}
            keyboardType="email-address"

            onChangeText={(text) => this.onHandleEmail(text)}

            onKeyPress={() => this.regexLogin('email')}

            value={this.state.email} />
          
          <Text style={styles.labelPass}>Password</Text>
      
          <View style={styles.inputBoxPass}>
            <TextInput style={styles.inputPass}
            secureTextEntry={this.state.securePass}
            onChangeText={(text) => this.onHandledPassword(text)}
            onKeyPress={() => this.regexLogin('password')}

            value={this.state.password} />
            <Button onPress={this.showHideIcon} transparent>
              <Icon type="FontAwesome" name={this.state.securePass ? "eye-slash":"eye"} />
            </Button>
            
          </View>
          
          <TouchableOpacity style={styles.buttonSign} onPress={this.onLoginBtn}

          disabled={this.state.submitDisabled} >

            <Text style={styles.buttonText}>Log In</Text>

          </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor:'#4287f5',
  },
  title:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  titleLogin:{
    fontSize:48,
    marginTop:20,
  },
  titleTxt:{
    marginTop:30,
    fontSize:18,
  },
  form:{
    flex:2,
    alignItems:'center',
  },
  labelEmail:{
    fontSize:20,
    marginRight:250,
  },
  inputPass:{
    flex:8,
    fontSize:18,
    paddingHorizontal:16,
  },
  labelPass:{
    fontSize:20,
    marginRight:200,
  },
  inputBox: {  
    width:300,
    backgroundColor:'white',
    paddingHorizontal:16,
    fontSize:18,
    color:'#000',
    marginVertical: 10,
    borderColor:'black',
    borderWidth:2,
    },
  inputBoxPass:{
    width:300,
    backgroundColor:'white',
    flexDirection:'row',
    borderColor:'black',
    borderWidth:2,
  }, 
  eye:{
    fontSize:24,
    paddingRight:12,
    paddingTop:12,
  },
  buttonSign: { 
    width:300,
    backgroundColor:'#1c313a',
    marginVertical: 40,
    paddingVertical: 13
    },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
    }
})

export default App;
