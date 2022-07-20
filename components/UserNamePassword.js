import { StyleSheet, Text, View ,TextInput ,Button} from 'react-native'
import React,{useState} from 'react'

const UserNamePassword = () => {
    const [textInputName, settextInputName] = useState('');
    const [textInputEmail, settextInputEmail] = useState('');
const checkTextInput= () => {
    if (!textInputName.trim()) 
    {alert('Please Enter Name');
    return;}
    if (!textInputEmail.trim()) 
    {alert('Please Enter Email');
    return;}
    if (textInputName.trim() &&textInputEmail.trim()) 
    {alert('Checked Successfully');
    return;}
    
}

  return (
    <View style={{ flex: 1, marginTop: 20, alignItems: "center" }}>
    <TextInput
        value={textInputName}
        onChangeText={(textInputName) => { settextInputName(textInputName) }}
        style={styles.textInputStyle}
        placeholder='username'
    />
    <TextInput
        value={textInputEmail}
        onChangeText={(textInputEmail) => { settextInputEmail(textInputEmail) }}
        style={styles.textInputStyle}
        placeholder='Email'
    />

    <View style= {{ marginTop: 20,  }}>
    <Button
       
        title='Submit'
        onPress={checkTextInput}
        
    /></View>
  
   
</View>

  )
}

const styles = StyleSheet.create({
    container: 
        {
            flex: 1,
            padding: 35,
        },
    textInputStyle: 
        {
            width: '100%',
            height: 40,
            paddingHorizontal: 5,
            borderWidth: 0.5,
            marginTop: 15,
        },
})
export default UserNamePassword

