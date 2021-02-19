import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Btn from './Btn'

const Product = ({title, description, price}) => {
  return (
    <View style={styles.container}>
        <Text>Produto: {title}</Text>
        <Text>Descrição: {description}</Text>
        <Text>Preço: {price}</Text>
        <Btn text='Comprar'/>


    </View>
  )
}

export default Product;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#fff",
        margin: 20,
    }
})