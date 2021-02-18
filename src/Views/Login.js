
import React from 'react'
import { View, Text } from 'react-native'

import TextCenter from '../components/TextCenter'

const Login = () => {
    return (
        <View>
            <TouchableOpacity onPress={() => {
                    props.navigation.openDrawer()
                }}>
                    Menu
                </TouchableOpacity>
            <TextCenter text="Login" />
        </View>
    )
}

export default Login