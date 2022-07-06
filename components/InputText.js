import { StyleSheet, Text, View , TextInput} from 'react-native'
import React ,{useState}from 'react'

const InputText = () => {

const [userName, setUserName] = useState('');
  return (
    <View style={{flex:1,marginTop:20,alignItems:"center"}}>
      <Text>Insert any text in below input</Text>
     <TextInput
     value={userName}
     onChangeText = {(userName)=>{setUserName(userName)}}
     style ={styles.TextInput}
     placeholder='please input usernme'
     />
     <Text style={{color:'blue',fontSize:20}}>{userName}</Text>
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({
    TextInput :{
        width:250,
        height:45,
        padding:10,
        marginTop:20,
        marginBottom:10,
        backgroundColor:'#e8e8e8'
        
    }
})