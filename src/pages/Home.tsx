import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput,
  TouchableOpacity
} from 'react-native';

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

    <TouchableOpacity 
      style={styles.button} 
      activeOpacity={.7}
      onPress={setMyStuffHandler}
    >
      <Text style={styles.buttonText}>
        Add a new stuff
      </Text>
    </TouchableOpacity>

    <Text style={[styles.title, {marginVertical: 50}]}>
      My Stuff
    </Text>

    {
      myStuff.map((stuff, index) => <TouchableOpacity 
          style={styles.buttonStuff}
          key={index}
        >
          <Text style={styles.stuffs}>
            {stuff}
          </Text>
        </TouchableOpacity>
      )
    }
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
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff'
  },
  buttonStuff: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 5,
  },
  stuffs: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  }
})

export default Home;