import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, FlatList } from 'react-native';
import Form from './src/components/Form';

import Products from './assets/coffeebean.jpeg'

const data = [
  {
    id: Math.random(),
    title: "Café 1",
    description: "Café Um",
    price: "18,00",
  },
  {
    id: Math.random(),
    title: "Café 2",
    description: "Café Dois",
    price: "18,00",
  },
  {
    id: Math.random(),
    title: "Café 3",
    description: "Café Três",
    price: "18,00",
  },
  {
    id: Math.random(),
    title: "Café 4",
    description: "Café Quatro",
    price: "18,00",
  }
]


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} source={Products}>
        <Text style={styles.h1}>Veja nossos produtos</Text>
      </ImageBackground>
      <View style={styles.containerProducts}>

      </View>
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
