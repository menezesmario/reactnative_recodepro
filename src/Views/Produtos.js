
import React from 'react'
import { View, Text } from 'react-native'

import TextCenter from '../components/TextCenter'

const Produtos = () => {
    return (
        <View>
            <TouchableOpacity onPress={() => {
                    props.navigation.openDrawer()
                }}>
                    Menu
                </TouchableOpacity>
            <TextCenter text="Produtos" />
        </View>
    )
}

export default Produtos