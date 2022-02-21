import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Add from './Add';
import Sub from './Sub';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Zachary's Budget App</Text>
      <Add/>
      <Sub/>
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
});
