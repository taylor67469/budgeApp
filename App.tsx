import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import Total from './Total'
import { useState, useEffect, SetStateAction } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
export default function App() {
  const  [total,getTotal]=useState();
  const [lStorage,setStorage]=useState(false);
  // const setTotes=(data: SetStateAction<number>)=>{
  //   getTotal(data);
  // }
  // const storeData = async (value: string) => {
  //   try {
  //     <Total totals={setTotes}/>
  //     value=JSON.stringify(total);
  //     await AsyncStorage.setItem('Balance', value)
  //   } catch (e) {
  //     // saving error
  //   }
  // }
  const getData = async () => {
    
    try {
      const value = await AsyncStorage.getItem('Balance')
      if(value !== null) {
        <Total myVal={parseInt(value)} myBol={lStorage}/>
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Zachary's Budget App</Text>
      <Text style={styles.budgetBalanceHeader}>Budget Balance</Text>
      <Total/>
      <Pressable onPress={()=>getData()}>
      <Text>Load previous budget</Text>
      </Pressable>

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
    position: 'absolute',
    top: 30,
    fontSize:20,
    color:"white",
  },
  budgetBalanceHeader: {
    position: 'absolute',
    top: 90,
    fontSize:20,
    color:"black",
  },
  budgetBalance: {
    position: 'absolute',
    top: 140,
    fontSize:20,
    color:"black",
  },
});
