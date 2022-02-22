import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import Total from './Total';
export default function Sub(props){
    const [sub,setSub]=useState(0);
    const [number, onChangeNumber] = useState('');
    const submit=(data)=>{
        setSub(data);
        onChangeNumber('');
    }
    return(
    <div>
        <TextInput
        style={styles.input}
        value={number}
        onChangeText={onChangeNumber}
        placeholder="Subtract an Expense"
        keyboardType="numeric"
      />
    <Pressable style={styles.myButtons} onPress={()=>submit(parseInt(number))}>
        <Text style={styles.myText}>Subtract an expense</Text>
        <h1>{"-"+sub}</h1>
        {useEffect(()=>{
        props.addE(sub);
    },[sub])}
    </Pressable>
    </div>
    );

}
const styles = StyleSheet.create({
    myButtons:{
        padding:20,
      },
      myText:{
        color:'black',
        marginLeft:0,
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
  });