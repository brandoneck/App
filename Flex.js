import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet,TouchableHighlight,Image,Text, Alert, Dialog } from 'react-native';

export default class Flex extends Component {

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

static navigationOptions ={
        title: "Welcome to StackNavigator"
    }

  render() {
    const { navigate } = this.props.navigation;

    return (

        <View style={{flex: 1, flexDirection: 'row',
        justifyContent: 'center', padding: 10}}>

        <View style={{width: 180, height: 90, backgroundColor: 'white', 
        borderWidth: 1, borderColor: '#D8D8D8',justifyContent: 'center',
        alignItems: 'center'}} >
          <TouchableHighlight onPress={() => navigate('screenTwo', {screen: 'screenTwo'})}>
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
    )
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
  }
})
