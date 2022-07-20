import { StyleSheet, Text, View, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, SafeAreaView } from 'react-native'
import React from 'react'

const Touchable_Example = () => {
    const onPress = (msg) => {
        
        alert('Alert for' + msg)
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableNativeFeedback
                    style={styles.button}
                  onPress={() => onPress('TouchableNativeFeedback Press')}
                  > 
                        <Text>Touchable Native Feedback Only Android</Text>
                </TouchableNativeFeedback>
                <TouchableHighlight
                    style={styles.button}
                  onPress={() => onPress('TouchableHighlight Press')}
                  > 
                        <Text>Touchable Highlight Only Android</Text>
                </TouchableHighlight>
                <TouchableOpacity
                    style={styles.button}
                  onPress={() => onPress('TouchableOpacity Press')}
                  > 
                        <Text>Touchable Opacity Only Android</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Touchable_Example

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD', //color of button 
        padding: 10,
        width: 300
        , marginTop: 16,
    },
})