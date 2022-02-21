import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
export default function Add(){
    const [add,setAdd]=useState(0);
    const [number, onChangeNumber] = useState();
    return(
        <div>
        <TextInput
        style={styles.input}
        value={number}
        placeholder="Add a budget"
        keyboardType="numeric"
      />
    <Pressable style={styles.myButtons} onPress={()=>setAdd(add+1)}>
        <Text style={styles.myText}>Add budget</Text>
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