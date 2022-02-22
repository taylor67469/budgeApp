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
    const [testBol,setBol]=useState();
    const [test,setTest]=useState();
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
    // useEffect(()=>{
    //     setTotal(pro)
        
    // },[add,sub]);
    const setStor=(data)=>{
        setTest(data);
        console.log("working");
        
    }
    useEffect(()=>{
        setStor(props.myVal)
        console.log("asdasdas");
        setBol(true);
    },[testBol]);
    // useEffect(()=>{
    //     const fetchData = async () => {
    //         try {
    //         //   const response = await fetch("https://api.coincap.io/v2/assets/bitcoin")
    //         //   const result = await response.json()
    //         //   const bitcoinPrice = (+result?.data?.priceUsd).toFixed(2)
    //           setTest(props.myBol)
    //         } catch (error) {
    //           console.log("error", error)
    //         }
    //       }
    //       fetchData()
    //     try{
    //     setTest(props.myBol)
    //     console.log(props.myBol);
    // }
    // catch (error) {
    //     console.log("error", error)
    //   }
    // },[]);
    return(
    <div>
        {props.myBol?<Text style={styles.budgetBalance}>${``}</Text>:<Text style={styles.budgetBalance}>${total}</Text>}
        <Add addB={setBud}/>
        <Sub addE={setExp}/>
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