import React, { useEffect, useState } from "react";
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
  const [stuffObtained, setStuffObtained] = useState(0);
  const [emptyStuffWarning, setEmptyStuffWarning] = useState(false);

  
  /**
   * Handler functions
   */

  const addStuffHandler = () => {
    Keyboard.dismiss();

    if (newStuff === '') {
      setEmptyStuffWarning(true);
    } 
    else {
      const data = {
        id: String(new Date().getTime()),
        name: newStuff,
        selected: false,
      }
         
      setMyStuff(oldStuff => [...oldStuff, data]);
    }
  }

  const removeStuffHandler = (id: string) => {
    setMyStuff(oldStuff => oldStuff.filter(stuff => stuff.id !== id))
  }

  const changeStuffStatus = (index: number, status: boolean) => {
    const { id, name } = myStuff[index];

    setMyStuff(oldStuff => [
      ...oldStuff.slice(0,index),
      {id, name, selected: status},
      ...oldStuff.slice(index+1)
    ]);
  }

  /**
   * Use Effect
   */

  useEffect(() => {
    setEmptyStuffWarning(false);
  }, [newStuff]);

  useEffect(() => {
    setStuffObtained(myStuff.reduce((sum, stuff) => {
      return sum + (stuff.selected? 1 : 0);
    }, 0));
  },  [myStuff])

  return <View style={styles.container}>
    <Header stuffObtained={stuffObtained}/>
    
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

      {emptyStuffWarning?
          <Text style={{color: 'red'}}>
            "Nothing" can't be added
          </Text>
        :
          null
      }
    </View>

    <Text style={[styles.title, {marginVertical: 40}]}>
      Stuff to get:
    </Text>

    <FlatList
      data={myStuff}
      keyExtractor={item => item.id}
      renderItem={({ item, index }) => <Card
          name={item.name}
          selected={item.selected}
          index={index}
          removeStuffHandlerById={() => removeStuffHandler(item.id)}
          changeStuffStatus={changeStuffStatus}
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