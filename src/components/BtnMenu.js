
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'       
       
       
const BtnMenu = (props) => {
    return (
        <View style={{alignItems: 'flex-end', padding: 20}}>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.openDrawer();
                    setTimeout(() => {
                       props.navigation.closeDrawer(); 
                    }, 2000);
                }}>
                    <Text style={{fontSize: 40}}> Menu </Text>
            </TouchableOpacity>
               
        </View>
    )
}

export default BtnMenu


       