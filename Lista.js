import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image,Button, Body, Alert } from 'react-native';
import { List, ListItem, colors } from 'react-native-elements'
import { Container } from 'native-base';

export default class Lista extends Component {

  first_function = () =>{
    Alert.alert(
        'Vaya',
        "Apuesto a que estás leyendo esto justo ahora"
    );}

    
  
  render() {
    return (

      
      <List containerStyle={{marginBottom: 150}}>
      {
        
        list.map((l, i) => (
          <ListItem
            avatar={l.avatar_url}
            key={i}
            title={l.name}
            onPress={ () =>{
              Alert.alert(
                  l.name,
                  l.nota,
              );}}


            
          />
        ))
      }
    </List>
    
    )
  }
}


const 



list = [
  {
    name: 'Comedia',
    avatar_url: require('./src/comedy.png'),
    nota: "La vida sonriendo es mejor",
    
  },
  {
    name: 'Art & Experimental',
    avatar_url: require('./src/art.png'),
    nota: "El arte es la representación de los sentidos",
  
  },
  {
    name: 'Mascotas',
    avatar_url: require('./src/mas.png'),
    nota: "La mejor compañía",
  
  },
  {
    name: 'Musica',
    avatar_url: require('./src/mus.png'),
    nota: "Notas entrelazadas que expresan tu sentir",
  
  },
]



styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 2
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 30, 
        height: 30, 
        padding: 30,
       
      },
      text: {
        marginLeft: 12,
        fontSize: 16,
      },
      photo: {
        height: 40,
        width: 40,
        borderRadius: 20,
      },
  })