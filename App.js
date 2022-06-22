import {  Text, View } from 'react-native'
import React from 'react'
import Logo from './components/Logo';
import styles from './components/styles';
import stySheet from './components/stySheet';


const App = () => {
  return (
    <View style={stySheet.container}>
      <Text style={[stySheet.title]}>Hello React Native</Text>
      {/*<Logo/>*/}
      <stySheet/>
    </View>
  )
}

export default App

