import { View, Text } from 'react-native'
import React from 'react'

const Fname = ({ fName1, fName2, lname1, lname2 }) => {
    return (

        <View >
            <Text>Your First Name is {fName1} {fName2}! and Last Name is {lname1}{lname2} </Text>
        </View>

    )
};

const MyCustomTextWith = () => {
    return (
        
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Fname fName1='Nattapat' lname1='Saipun' />
                <Fname fName2='krittin' lname2='kamkar' />
            </View>
        

    )
}

export default MyCustomTextWith