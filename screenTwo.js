import React, { Component } from 'react';
import {  View, Text, Image, Title, StyleSheet } from 'react-native';

export default class screenTwo extends Component {

    static navigationOptions ={
        title: "Popular Now",
        headerTintColor: 'white',
        fontSize: 25,
        alignItems: 'center',
        passProps: {myProp: 'foo'},
        headerStyle: {
            backgroundColor:"#76B486",
        },
        headerTitleStyle:{textAlign: 'center',alignSelf:'center'},
    }
  render() {
    const { navigate } = this.props.navigation;
    return (

      <View style={{alignItems: 'center', justifyContent:'center', padding: 20}}>

        <View style={{width: 300, height: 90, backgroundColor: 'white', 
        borderWidth: 1, borderColor: '#D8D8D8',justifyContent: 'center',
        alignItems: 'center'}} >
          



     
        <Image
              style={styles.button}
              source={require('./src/star.png')}
          />
        <Text style={{fontSize: 20}}>Popular Now</Text>
        </View>

        <View style={{width: 300, height: 90, backgroundColor: 'white', 
        borderWidth: 1, borderColor: '#D8D8D8',justifyContent: 'center',
        alignItems: 'center', marginTop:20}} >
        <Text>Popular</Text>
        </View>

      </View>
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
    width: 60, 
    height: 60,
   
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  },
  
})
