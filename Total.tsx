import { SetStateAction, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput,  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Sub from './Sub';
import Add from './Add';
export default function Total(){
    const [total,setTotal]=useState(0);
    const [add,setAdd]=useState(0);
    const [sub,setSub]=useState(0);
    const [lStorage,setStorage]=useState(false);
    const [testBol,setBol]=useState();
    const [test,setTest]=useState();
    let myBol=false;
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
    const setExp=(data: SetStateAction<number>)=>{
        setSub(data);
    }
    useEffect(()=>{
        calculateTotal();
        
    },[add,sub]);
   
    const getData = async () => {
    
        try {
          const value = await AsyncStorage.getItem('Balance')
          if(value !== null) {
            console.log("my value!"+parseInt(value));

            setTotal(parseInt(value));
            myBol=true;
            // value previously stored
          }
        } catch(e) {
          // error reading value
        }
      }

    
    return(
    <div>
        {myBol?<Text style={styles.budgetBalance}>${``}</Text>:<Text style={styles.budgetBalance}>${total}</Text>}
        <Add addB={setBud}/>
        <Sub addE={setExp}/>
        <Pressable style={styles.presser} onPress={()=>storeData(JSON.stringify(total))}>
        <Text>Save balance</Text>
        </Pressable>
        <Pressable style={styles.presser} onPress={()=>resetTotal()}>
            <Text>Reset balance</Text>
        </Pressable>
        <Pressable onPress={()=>getData()}>
      <Text style={styles.presser}>Load previous budget</Text>
      </Pressable>     
    </div>
    )
}
const styles = StyleSheet.create({
budgetBalance: {
    // position: 'absolute',
    top: 140,
    fontSize:20,
    color:"black",
    textAlign:"center",
    marginLeft:"10px",
  },
  presser:{
      padding:10,   
      marginLeft:"10px",
  }
});