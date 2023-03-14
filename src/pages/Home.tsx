import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput,
  TouchableOpacity
} from 'react-native';
import Button from '../components/Button';
import Card from '../components/Card';

function Home() {
  const [newStuff, setNewStuff] = useState("Potato");
  const [myStuff, setMyStuff] = useState(["Potato"]);

  const setMyStuffHandler = () => {
    setMyStuff(oldStuff => [...oldStuff, newStuff]);
  }

  return <View style={styles.container}>
    <Text style={styles.title}>React Native</Text>

    <TextInput 
      style={styles.input}
      placeholder="input"  
      placeholderTextColor='#555'
      onChangeText={setNewStuff}
    />

    <Button setMyStuffHandler={setMyStuffHandler} />

    <Text style={[styles.title, {marginVertical: 50}]}>
      My Stuff
    </Text>

    <Card myStuff={myStuff} />
  </View>
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e24',
    color: '#fff',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7,
  },
});

export default Home;