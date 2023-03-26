import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput,
  FlatList,
  Keyboard,
} from 'react-native';
import { Header } from "../components/Header";
import Button from '../components/Button';
import Card from '../components/Card';
import { StuffType } from "../types";

function Home() {
  const [newStuff, setNewStuff] = useState('');
  const [myStuff, setMyStuff] = useState<StuffType[]>([]);

  const addStuffHandler = () => {
    const data = {
      id: String(new Date().getTime()),
      name: newStuff,
    }

    Keyboard.dismiss();

    setMyStuff(oldStuff => [...oldStuff, data]);
  }

  const removeStuffHandler = (id: string) => {
    setMyStuff(oldStuff => oldStuff.filter(stuff => stuff.id !== id))
  }

  return <View style={styles.container}>
    <Header />
    
    <View style={{alignItems: 'center'}}>
      <TextInput 
        style={styles.input}
        placeholder="input"  
        placeholderTextColor='#555'
        onChangeText={setNewStuff}
        onSubmitEditing={(e) => addStuffHandler()}
        />

      <Button
        onPress={addStuffHandler}
        title='Add new stuff!'
      />
    </View>

    <Text style={[styles.title, {marginVertical: 40}]}>
      Stuff to get:
    </Text>

    <FlatList
      data={myStuff}
      keyExtractor={item => item.id}
      renderItem={({ item, index }) => <Card
          name={item.name}
          index={index}
          removeStuffHandlerById={() => removeStuffHandler(item.id)}
        />
      }
      ItemSeparatorComponent={() => <View style={{height: 10}} />}
    />
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
    marginTop: -29,
    width: 200,
    borderRadius: 7,
  },
});

export default Home;