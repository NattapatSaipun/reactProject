import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import User from './components/User'
import LotsOfGreetings from './components/LotsOfGreetings'
import MyCustomTextWith from './components/MyCustomTextWith'
import Count from './components/Count'
import InputText from './components/InputText'
import UserNameandPassWord from './components/UserNameandPassWord'
import UserNamePassword from './components/UserNamePassword'
import AlertComponent from './components/AlertComponent'
import ImageWithTextInput from './components/ImageWithTextInput'
import ButtonExample from './components/ButtonExample'
import Touchable_Example from './components/Touchable_Example'
import TouchablePractice from './components/TouchablePractice'
import DynamicStyle from './components/DynamicStyle'
import ModelExample from './components/ModelExample'
const App = () => {
  return (
    <View style={styles.container}>
      {/* <Logo />
      <User /> */}
      {/* <LotsOfGreetings/> */}
      {/* <MyCustomTextWith/> */}
      {/* <Count/> */}
      {/* <InputText/> */}
      {/* <UserNameandPassWord/> */}
      {/* <UserNamePassword/> */}
      {/* <AlertComponent/> */}
      {/* <ImageWithTextInput/> */}
      {/* <ButtonExample/>  */}
      {/* <Touchable_Example/>   */}
      {/* <TouchablePractice/>  */}
      {/* <DynamicStyle/>  */}
      <ModelExample/>

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1, alignItems: 'center', justifyContent: 'center'
  }
})