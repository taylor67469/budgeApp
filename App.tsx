import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import Total from './Total'
import { useState, useEffect, SetStateAction } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
export default function App() {
  const  [total,getTotal]=useState();
  const [lStorage,setStorage]=useState(0);
  const [myStorage,setMyStorage]=useState(false);
  const setStorages=(data: SetStateAction<number>)=>{
    setStorage(data);
    console.log(lStorage);
    
}

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Zachary's Budget App</Text>
      <Text style={styles.budgetBalanceHeader}>Budget Balance</Text>
      <Total/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    // position: 'absolute',
    top: 30,
    fontSize:20,
    color:"white",
    padding:"20px"
  },
  budgetBalanceHeader: {
    // position: 'absolute',
    top: 90,
    fontSize:20,
    color:"black",
  },
  budgetBalance: {
    // position: 'absolute',
    top: 140,
    fontSize:20,
    color:"black",
  },
});
