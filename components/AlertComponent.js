import { StyleSheet, Text, View, Button , Alert} from 'react-native'
import React from 'react'

const AlertComponent = () => {

    const simpleAlerthendle = () => {
        alert('Hello I am Simple Alert from javascript');
       
    }
    const twoOptionAlerthendle = () =>{
        Alert.alert(
            //title
            'Hello',
            //body
            'I am two Option alert from reactNative',
            [
                {
                    text:'Yes',
                    onPress: ()=> alert('yes Pressed')
                },

                {
                    text:'No',
                    onPress: ()=> alert('No Pressed'),
                    style:'cancel'
                }
            ],
            {cancelable : false}
        );
    }
    return (
        <View style={styles.container}>
            <Button
                title='Simple Alert'
                onPress={simpleAlerthendle}
            />
            <Button
                title='Alert with Two Option'
                onPress={twoOptionAlerthendle}
            />
        </View>
    )
}

export default AlertComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#ecf0f1',
    },
})