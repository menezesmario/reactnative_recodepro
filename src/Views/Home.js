
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import TextCenter from '../components/TextCenter'

const Home = (props) => {
    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => {
                    props.navigation.openDrawer()
                }}>
                    Menu
                </TouchableOpacity>
            </View>
            <TextCenter text="Home" />
        </View>
    )
}

export default Home