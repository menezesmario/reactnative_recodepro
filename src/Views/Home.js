
import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

import TextCenter from '../components/TextCenter'
import BtnMenu from  '../components/BtnMenu'
import Background from '../../assets/coffeebean.jpeg'


const Home = (props) => {
    return (
        <View style={{flex: 1}}>
           
            <BtnMenu navigation={props.navigation}/>
            <ImageBackground style={styles.background} source={Background}>
                            <TextCenter text="Os melhores Cafés do Brasil" />            
            </ImageBackground>
        </View>
    );
};

export default Home

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