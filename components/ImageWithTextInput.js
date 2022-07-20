import { StyleSheet, Text, View ,Image,TextInput} from 'react-native'
import React from 'react'


const ImageWithTextInput = () => {
  return (
    <View style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.sectionStyle}>
            <Image 
            source={require('../assets/input_username.png')}
            style={styles.imageStyle}
            />
            <TextInput
            placeholder='Enter yourname'
            style={{flex:1}}
            />
        </View>
        <View  style={styles.sectionStyle}> 
            <Image 
            source={require('../assets/input_phone.png')}
            style={styles.imageStyle}
            />
            <TextInput
            placeholder='Enter yourPhoneNuumber'
            style={{flex:1}}
            />
        </View>
           
       
      </View>
    </View>
  )
}

export default ImageWithTextInput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10,
    }, 
    imageStyle: {
            padding: 10,
            margin: 5,
            height: 25,
            width: 25,
     }

    
})