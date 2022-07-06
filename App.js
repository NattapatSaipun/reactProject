import { View, Text } from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import User from './components/User'
import LotsOfGreetings from './components/LotsOfGreetings'
import MyCustomTextWith from './components/MyCustomTextWith'

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Logo />
      <User /> */}
      {/* <LotsOfGreetings/> */}
      <MyCustomTextWith/>
    </View>
  )
}

export default App