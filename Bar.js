import React, { Component } from 'react';
import {StyleSheet, Image, TouchableHighlight,Alert} from 'react-native';
import { Header,Left,Body,Right,Button,Text,Title } from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome"

export default class Bar extends Component {

    first_function = () =>{
        Alert.alert(
            'Acceso a Cámara',
            "Hemos detectado que tu dispositivo no tiene cámara"
        );
    }


  render() {
    return (
        <Header style={{backgroundColor:"#76B486"}} 
        iosBarStyle="light-content">
            <Left>
                <Button transparent>
                    <Icon name="bars" style={styles.icon}/>
                </Button>
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
    )
  }
}

const styles = StyleSheet.create({
    icon: {
        color:"#fff",
        fontSize: 20,
     
    },
    headerText: {
        color:"#fff",
        fontSize:20,
    },


    button: {
        
        width: 20, 
        height: 20, 
        padding: 20,
       
      },
});