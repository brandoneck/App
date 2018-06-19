import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InputGroup,

  Input,
  Button,
  Center,
  TouchableHighlight,Image, Alert, Dialog, TouchableOpacity
} from 'react-native';
import { Container,Header, Title, Body, Left,Right } from 'native-base';
import Bar from './Bar';
import Search from './Search';
import Flex from './Flex';
import Lista from './Lista';
import Icon from "react-native-vector-icons/FontAwesome";
import MyApp from "./App"



export default class screenOne extends Component {


    first_function = () =>{
        Alert.alert(
            'Vaya',
            "Apuesto a que estás leyendo esto justo ahora"
        );
    
      }
        second_function = () =>{
          Alert.alert(
              ':(',
              "Nos encontramos en desarrollo, una disculpa"
          );
    }

    cam_function = () =>{
        Alert.alert(
            'Acceso a Cámara',
            "Hemos detectado que tu dispositivo no tiene cámara"
        );
    }


    static navigationOptions ={



      
      headerLeft:(
        <TouchableHighlight style={{padding: 20}}>
                    <Icon name="bars" style={{color:"#fff",
                    fontSize: 20}}/>
                </TouchableHighlight>
      ),



        title: "Explore",
        headerTintColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        passProps: {myProp: 'foo'},
        headerStyle: {
            backgroundColor:"#76B486",
        },
        headerTitleStyle:{textAlign: 'center',alignSelf:'center'},

        

        headerRight: (<TouchableHighlight style={{padding: 20}}
          onPress={ () =>{
            Alert.alert(
                ':(',
                "Nos encontramos en desarrollo, una disculpa"
            );}}>
            <Image
            style= {{
            width: 20, 
            height: 20, 
            padding: 20}}
            source={require('./src/camara.png')}/>
            </TouchableHighlight>
            
        )
            

        
    }


   
  render() {
    const { navigate } = this.props.navigation;

    
   
    return (
        <Container>

          <Header style={{backgroundColor:"#76B486"}} 
        iosBarStyle="light-content">
            <Left>
                <TouchableHighlight onPress={this.MyApp}>
                    <Icon name="bars" style={styles.icon}/>
                </TouchableHighlight>
            </Left>
            <Body style= {{alignItems: 'center'}}>
                <Title style={{textAlign:'center', fontSize: 25}}>Explore</Title>
            </Body>
            <Right>
                <TouchableHighlight onPress={this.first_function}>
                    <Image
                    style={styles.button}
                    source={require('./src/camara.png')}/>
                </TouchableHighlight>
            </Right>

        </Header>




                
       
        
        <Search/>
        <View style={{flex: 1, flexDirection: 'row',
        justifyContent: 'center', padding: 10}}>

        <View style={{width: 180, height: 90, backgroundColor: 'white', 
        borderWidth: 1, borderColor: '#D8D8D8',justifyContent: 'center',
        alignItems: 'center'}} >
          <TouchableHighlight onPress={this.second_function}onPress={() => navigate('screenTwo', {screen: 'screenTwo'})}>
            <Image
              style={styles.button}
              source={require('./src/star.png')}
          />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate('screenTwo', {screen: 'screenTwo'})}>
            <Text style={{fontSize: 20}}>Popular Now</Text>
          </TouchableHighlight>
        </View>

        <View style={{width: 180, height: 90, backgroundColor: 'white', 
        borderWidth: 1, borderColor: '#D8D8D8',justifyContent: 'center',
        alignItems: 'center'}} >
          <TouchableHighlight onPress={this.first_function}>
            <Image
              style={styles.button}
              source={require('./src/up.png')}
          />
          </TouchableHighlight >
          <TouchableHighlight onPress={this.first_function}>
            <Text style={{fontSize: 20}}>On the Rise</Text>
          </TouchableHighlight>
        </View>
      </View> 
        

          <Text style={{textAlign:'center'}}>
            Channels</Text>
        <Lista/>                         
</Container>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
     
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 40, 
      height: 40,
     
    },
    countContainer: {
      alignItems: 'center',
      padding: 10
    },
    countText: {
      color: '#FF00FF'
    },
    icon: {
      color:"#fff",
      fontSize: 20,
   
  },
    
  })
  