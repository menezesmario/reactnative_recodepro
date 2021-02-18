import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, FlatList } from 'react-native';

import TextCenter from './src/components/TextCenter'
import Home from './src/Views/Home';
 
// import Form from './src/components/Form';

// import Imgbckgd from './assets/coffeebean.jpeg'
// import Products from './src/components/Products'

// const dados = [
//   {
//     id: Math.random(),
//     title: "Café 1",
//     description: "Café Um",
//     price: "18,00",
//   },
//   {
//     id: Math.random(),
//     title: "Café 2",
//     description: "Café Dois",
//     price: "18,00",
//   },
//   {
//     id: Math.random(),
//     title: "Café 3",
//     description: "Café Três",
//     price: "18,00",
//   },
//   {
//     id: Math.random(),
//     title: "Café 4",
//     description: "Café Quatro",
//     price: "18,00",
//   }
// ]


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
      <StatusBar style="auto" />


      {/* <ImageBackground style={styles.background} source={Imgbckgd}>
        <Text style={styles.h1}>Veja nossos produtos</Text>
      </ImageBackground>
      <View style={styles.containerProducts}>
        <FlatList 
          data={dados}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({item}) => (
            <Products title={item.title} description={item.description} price={item.price}/>
          )}
          
        />
      </View> */}
    </SafeAreaView>
  );
}

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
