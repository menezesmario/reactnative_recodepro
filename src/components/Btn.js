import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const Btn = ({text}) => {
    return (
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textBtn}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Btn


const styles = StyleSheet.create({
    textBtn:{
        color: 'brown',
        fontSize: 20,
    },
    button: {
        height: 70,
        alignItems: 'center',
        backgroundColor: "#fffa",
        paddingHorizontal: 100,
        paddingVertical: 25,
        width: '80%',
        borderRadius: 50,
        color: 'brown',
        margin: 'auto',
        marginTop: 20,
        opacity: .8,
    }
})