
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import TextCenter from '../components/TextCenter'
import BtnMenu from '../components/BtnMenu'


const Login = (props) => {
    return (
        <View style={{flex: 1}}>
        <BtnMenu navigation={props.navigation}/>
        <TextCenter text="Login" />            
    </View>
    )
}

export default Login


