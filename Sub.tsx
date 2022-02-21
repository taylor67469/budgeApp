import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
export default function Sub(){
    const [sub,setSub]=useState(0);
    return(<Pressable style={styles.myButtons} onPress={()=>setSub(sub+1)}>
        <Text style={styles.myText}>Add expense</Text>
    </Pressable>);

}
const styles = StyleSheet.create({
    myButtons:{
        padding:20,
      },
      myText:{
        color:'black',
      },
  });