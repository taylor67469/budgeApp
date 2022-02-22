import { SetStateAction, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput,  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Sub from './Sub';
import Add from './Add';
export default function Total(props){
    const [total,setTotal]=useState(0);
    const [add,setAdd]=useState(0);
    const [sub,setSub]=useState(0);
    const [lStorage,setStorage]=useState(false);
    const storeData = async (value: string) => {
        try {
          await AsyncStorage.setItem('Balance', value)
        } catch (e) {
          // saving error
        }
      }
    const resetTotal=()=>{
        setTotal(0);
        setAdd(0);
        setSub(0);
    }
    const calculateTotal=()=>{
        setTotal(add-sub);
        setStorage(true)
    }
    const setBud=(data: SetStateAction<number>)=>{
        setAdd(data);
    }
    useEffect(()=>{
        calculateTotal();
        
    },[add,sub]);
    return(
    <div>
        <Text style={styles.budgetBalance}>${total}</Text>
        <Add addB={setBud}/>
        <Sub addE={setSub}/>
        <Pressable style={styles.presser} onPress={()=>storeData(JSON.stringify(total))}>
        <Text>Save balance</Text>
        </Pressable>
        <Pressable style={styles.presser} onPress={()=>resetTotal()}>
            <Text>Reset balance</Text>
        </Pressable>        
    </div>
    )
}
const styles = StyleSheet.create({
budgetBalance: {
    position: 'absolute',
    top: 140,
    fontSize:20,
    color:"black",
  },
  presser:{
      padding:10
  }
});