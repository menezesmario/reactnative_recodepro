import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const Input = ({ type, placeholder, ...props }) => {
    return (
        <View style={styles.input}>
            <TextInput style={styles.txtInput} KeyboardType={type} {...props} placeholder={placeholder} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        width: '80%',
        alignItems: 'center',
        height: 70,
        padding: 25,
        borderRadius: 50,
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 'auto',
        fontSize: 16,
        opacity: .9,
        fontFamily: 'Helvetica',
        fontWeight: "100",
    },
    txtInput: {
        fontSize: 20,
        marginLeft: 20,
        fontFamily: 'Helvetica',
        fontWeight: "100",
        opacity: .6 ,
    }
})
