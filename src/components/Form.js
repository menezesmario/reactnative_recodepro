import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

import Input from './Input'
import Btn from './Btn'

import Background from '../../assets/coffeebean.jpeg'

const Form = () => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={Background}>
                <Text style={styles.h1}>
                    Entre
                </Text>
            </ImageBackground>
            <View style={styles.containerInput}>
                {/* <Input placeholder='Digite seu nome'/> */}
                <Input type="email-address" placeholder="Digite seu email" />
                {/* <Input type="phone-pad" placeholder="Digite seu telefone" /> */}
                <Input secureTextEntry placeholder="Digite sua senha" />
                <Btn text='Entrar'/>
            </View>
        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    h1: {
        fontSize: 24,
        color: '#fff',
        marginTop: 70,
        fontFamily: 'Helvetica',
        fontWeight: "100",
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 500,
        height: '100vh'
    },
    containerInput:{
        flex:2.5,
        alignItems: 'stretch',
        width: 500,
    }

})