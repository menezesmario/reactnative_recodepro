import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Form from './src/components/Form';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Form />
      <StatusBar style="auto" />
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
});
