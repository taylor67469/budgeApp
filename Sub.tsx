import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
export default function Sub(){
    const [sub,setSub]=useState(0);
    const [number, onChangeNumber] = useState();
    return(
    <div>
        <TextInput
        style={styles.input}
        value={number}
        placeholder="Subtract an Expense"
        keyboardType="numeric"
      />
    <Pressable style={styles.myButtons} onPress={()=>setSub(sub+1)}>
        <Text style={styles.myText}>Subtract an expense</Text>
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