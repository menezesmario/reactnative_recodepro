import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function TextCenter({text}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    )
}

export default TextCenter;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        // backgroundColor: '#000',
        // opacity: .5,

    },
    text: {
        fontSize: 50,
        color: '#fff'
    }
})
