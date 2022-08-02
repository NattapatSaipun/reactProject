import { StyleSheet, Text, View, Button, SafeAreaView, Modal } from 'react-native'
import React, { useState } from 'react'

const ModalPractice = () => {
    const [showModal, setShowModal] = useState();
  return (
    <SafeAreaView style = {{flex:1}}>

    <View style = {styles.centeredView}>

        <Modal 
            animationType='slide'
            transparent = {false}
            visible={showModal} >
        <View style = {styles.centeredView}>

                <View style = {styles.modalText}>
                    <Text style = {styles.textStyle}>ไฟในห้องปิดอยู่</Text>
                    <View style = {styles.button}>
                    <Button title='กรุณากดปุ่มเพื่อเปิดไฟ'
                    onPress={()=>setShowModal(!showModal)}
                    />
                </View>

            </View>
        </View>
        </Modal>
<View style = {{
        marginTop: 300,}}>
    
<View style = {styles. modalView}>
                <Text> คุณลืมปิดไฟในห้อง!!! </Text>
          <View style = {styles.button}>
             <Button title='กรุณากดปุ่มเพื่อปิดไฟ'
                 color = '#F194FF'
                 onPress={()=>setShowModal(!showModal)} 
                 />

            </View>

          </View>
</View>
    </View>
</SafeAreaView>
)

}

export default ModalPractice

const styles = StyleSheet.create({

    centeredView: {flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})