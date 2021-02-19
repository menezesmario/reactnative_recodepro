
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'


import TextCenter from '../components/TextCenter'
import BtnMenu from  '../components/BtnMenu'
import Products from '../components/Products'

const dados = [
  {
    id: Math.random(),
    img: "coffeebean.jpeg",
    title: "Café Carioca",
    description: "Café Arábica Boubon Amarelo",
    price: "18,00",
  },
  {
    id: Math.random(),
    img: "coffeebean.jpeg",
    title: "Café Cerra do Cipó",
    description: "Bourbon Vermelho",
    price: "18,00",
  },
  {
    id: Math.random(),
    img: "coffeebean.jpeg",
    title: "Café Alto Caparaó",
    description: "Bourbon Amarelo Frutas Tropicais",
    price: "18,00",
  },
  {
    id: Math.random(),
    img: "coffeebean.jpeg",
    title: "Café Chapada Diamantina",
    description: "Catuaí Vermelho",
    price: "18,00",
  }
]



const Produtos = (props) => {
    return (
        <View style={{flex: 1}}>
        <BtnMenu navigation={props.navigation}/>
        {/* <ImageBackground style={styles.background} source={Imgbckgd}>
        <Text style={styles.h1}>Veja nossos produtos</Text>
        </ImageBackground> */}
        <View style={styles.containerProducts}>
            <FlatList 
            data={dados}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({item}) => (
                <Products title={item.title} description={item.description} price={item.price}/>
            )}
            
            />
        </View>        
        </View>
    )
}

export default Produtos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'brown',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 500,
    paddingBottom: 50,
  }, 
  h1: {
    fontSize: 30,
    color: "#fff",
    fontFamily: "Helvetica",

  },
  containerProducts: {
    flex: 7, 
  }
});
