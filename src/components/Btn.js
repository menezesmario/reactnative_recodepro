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
        color: '#fff',
        fontSize: 20,
    },
    button: {
        height: 70,
        alignItems: 'center',
        backgroundColor: "#FF8C00",
        paddingHorizontal: 100,
        paddingVertical: 25,
        width: '80%',
        borderRadius: 50,
        color: '#fff',
        margin: 'auto',
        marginTop: 20,
        opacity: .8,
        marginBottom: 50,
    }
})