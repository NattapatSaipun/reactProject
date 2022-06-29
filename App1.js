import {  Text, View ,Button} from 'react-native'
import React from 'react'
import Logo from './components/Logo';
import styles from './components/styles';
import stySheet from './components/stySheet';
import TextInputExample from './components/TextInputExample';
import Cat from './components/Cat';
import Cafe from './components/Cafe';


const App = () => {

  const showData =()=>{
    alert("hello Button")
  }


  return (
    <View style={stySheet.container}>
       <Text style={[stySheet.title]}>React Native</Text> 
      <Logo/>
      <Button
        onPress={showData}
        title='Click Me' 
      />
      {/* <stySheet/> */}
      {/* <TextInputExample/> */}
      {/* <Cat/> */}
      {/* <Cafe/> */}
    </View>
  )
}

export default App

