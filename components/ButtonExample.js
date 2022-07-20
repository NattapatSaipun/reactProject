import {
    StyleSheet,
    Text,
    View,
    Button,
    SafeAreaView
} from 'react-native'
import React from 'react'

const Separator = () => (
    <View style={styles.separator} />
)


const ButtonExample = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>
                    The title and onPress handler are require.It is recommended to set accessibilityLable to help make your app usable by every one.
                </Text>
                <Button
                    title='Press Me'
                    onPress={() => alert('Simple Button Press')}
                />
            </View>
            <Separator />
            <View>
                <Text style={styles.title}>
                    The title and onPress handler are require.It is recommended to set accessibilityLable to help make your app usable by every one.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </Text>
                <Button
                    title='Press Me'
                    onPress={() => alert('Button With Adjust Color')}
                    color='pink'
                />
            </View>
            <Separator />
            <View>
                <Text style={styles.title}>
                    The title and onPress handler are require.
                </Text>
                <Button
                    title='Press Me'
                    disabled
                />
            </View>
            <Separator />
            <View>
                <Text style={styles.title}>
                    The title and onPress handler are require.It is recommended to set accessibilityLable to help make your app usable by every one.
                </Text>

                <View style={styles.fixToText}>
                    <Button
                        title='Left Button'
                        onPress={() => alert('Left Button Press')}
                    />
                     <Button
                        title='Right Button'
                        onPress={() => alert('Right Button Press')}
                    />
                </View>

            </View>
            

        </SafeAreaView>
    )
}

export default ButtonExample

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
})