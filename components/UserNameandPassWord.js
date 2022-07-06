import { StyleSheet, Text, View, TextInput ,Button} from 'react-native'
import React, { useState } from 'react'

const UserNameandPassWord = () => {
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
   
    return (

        <View style={{ flex: 1, marginTop: 20, alignItems: "center" }}>
            <TextInput
                value={userName}
                onChangeText={(userName) => { setUserName(userName) }}
                style={styles.TextInput}
                placeholder='usernme'
            />
            <TextInput
                value={passWord}
                onChangeText={(passWord) => { setPassWord(passWord) }}
                style={styles.TextInput}
                placeholder='password'
            />
            <Button
                title='Click Me'
                onPress={()=> alert(userName+
                    '\n'+passWord)}
            />
        </View>

    )
}

export default UserNameandPassWord

const styles = StyleSheet.create({
    TextInput: {
        width: 300,
        height: 45,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#e8e8e8'
    }
})