import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements'

export default class Search extends Component {


  render() {
    return (
      

      <SearchBar
      lightTheme
      cancelButtonTitle="Cancel"
      placeholder='Search people or tags...' />
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
     paddingTop: 23
  },
  input: {
     margin: 15,
     height: 40,
     borderColor: '#7a42f4',
     borderWidth: 1
  },
  submitButton: {
     backgroundColor: '#7a42f4',
     padding: 10,
     margin: 15,
     height: 40,
  },
  submitButtonText:{
     color: 'white'
  }
})