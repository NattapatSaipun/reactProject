import { View, Text } from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import User from './components/User'

const App = () => {
  return (
    <View style={{marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: "#20232a",
      borderRadius: 6,
      backgroundColor: "#61dafb",
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
  }}>
      <Logo />
      <User />
    </View>
  )
}

export default App