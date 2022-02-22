import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import Total from './Total';
export default function Add(props){
    const [add,setAdd]=useState(0);
    const [number, onChangeNumber] = useState('');
    const submit=(data)=>{
        setAdd(data);
        onChangeNumber('');
    }
    return(
        <div>
        <TextInput
        style={styles.input}
        value={number}
        placeholder="Add a budget"
        keyboardType="numeric"
        onChangeText={onChangeNumber}
      />
    <Pressable style={styles.myButtons} onPress={()=>submit(parseInt(number))}>
        <Text style={styles.myText}>Add budget</Text>
        <h1>{add}</h1>
        {useEffect(()=>{
        props.addB(add);
    },[add])}
        
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
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
  });