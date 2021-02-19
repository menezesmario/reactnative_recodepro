
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import TextCenter from '../components/TextCenter'
import BtnMenu from '../components/BtnMenu'
import Form from   '../components/Form'


const Login = (props) => {
    return (
        <View style={{flex: 1}}>
        <BtnMenu navigation={props.navigation}/>
        {/* <TextCenter text="Login" />  */}
        <Form />           
    </View>
    )
}

export default Login


