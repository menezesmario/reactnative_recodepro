import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Btn from './Btn'

const Product = ({title, description, price, img}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.img} source={require('../../assets/coffeebean.jpeg')}/>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{price}</Text>
        <Btn text='Comprar'/>


    </View>
  )
}

export default Product;

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        flex: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#fff",
        margin: 20,
        alignItems: 'center',
    },
    img: {
      width: 150,
      height: 150,
      borderRadius: '50%',
      alignItems: 'center',
      margin: 40,
    }
    
})