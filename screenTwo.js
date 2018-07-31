import React, { Component } from 'react';
import {  View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { Container,Header, Title, Body, Left,Right } from 'native-base';
import {StackNavigator} from 'react-navigation'
import screenOne from './screenOne';


const App = StackNavigator({
  screenOne: {screen: screenOne},
})



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

    const {goBack} = this.props.navigation;

    const { navigate } = this.props.navigation;    
    return ( 
      <Container>
      <Header style={{backgroundColor:"#76B486"}} 
        iosBarStyle="light-content">
            <Left>
              <TouchableHighlight onPress={() => navigate('screenOne', {screen: 'screenOne'})}>
                  <Image
                    style={styles.button}
                    source={require('./src/back.png')}/>
              </TouchableHighlight>
            </Left>

            
            <Body>
                <Title style={{textAlign:'center', fontSize: 25}}>Popular Now</Title>
            </Body>

        </Header>






      <View style={{alignItems: 'center', justifyContent:'center', padding: 20}}>

        <View style={{width: 300, height: 90, backgroundColor: 'white', 
        borderWidth: 1, borderColor: '#D8D8D8',justifyContent: 'center',
        alignItems: 'center'}} >
          



     
        <Imag
              style={styles.button}
              source={require('./src/star.png')}
          />
        <Text style={{fontSize: 20}}>Popular Now</Text>
        </View>

        <View style={{width: 300, height: 400, backgroundColor: 'white', 
        borderWidth: 2, borderColor: '#D8D8D8',justifyContent: 'center',
        alignItems: 'center', marginTop:20}} >
        <Image source={require('./src/wall.jpg')}/>
        <Text>Popular</Text>
        </View>

      </View>




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
    width: 30, 
    height: 30,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  },
  
})
