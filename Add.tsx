import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
export default function Add(){
    const [add,setAdd]=useState(0);
    return(
    <Pressable style={styles.myButtons} onPress={()=>setAdd(add+1)}>
        <Text style={styles.myText}>Add budget</Text>
    </Pressable>
    );

}
const styles = StyleSheet.create({
    myButtons:{
        padding:20,
      },
      myText:{
        color:'black',
      },
  });