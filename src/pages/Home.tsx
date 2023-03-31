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
import ButtonArrow from '../components/ButtonArrow';
import Card from '../components/Card';
import ModalComponent from "../components/DeleteModal";
import { StuffType } from "../types";

function Home() {
  const [newStuff, setNewStuff] = useState('');
  const [myStuff, setMyStuff] = useState<StuffType[]>([]);
  const [stuffObtained, setStuffObtained] = useState(0);
  const [warning, setWarning] = useState('');
  const [selectedStuffId, setSelectedStuffId] = useState('');

  
  /**
   * Handler functions
   */

  const addStuffHandler = () => {
    Keyboard.dismiss();

    if (newStuff === '') {
      setWarning(`"Nothing" can't be added`);
    }
    else if (myStuff.some(stuff => stuff.name === newStuff)) {
      setWarning(`Stuff already in the list`);
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

  const openDeleteModal = (id: string) => {
    setSelectedStuffId(id);
  }
  
  const deleteStuffById = (id: string) => {
    setMyStuff(oldStuff => oldStuff.filter(stuff => stuff.id !== id));
  }

  const changeStuffStatus = (index: number, status: boolean) => {
    const { id, name } = myStuff[index];

    setMyStuff(oldStuff => [
      ...oldStuff.slice(0,index),
      {id, name, selected: status},
      ...oldStuff.slice(index+1)
    ]);
  }

  const setSelectedStuffHandler = (id: string) => {
    setSelectedStuffId(id);
  }

  /**
   * Use Effect
   */

  useEffect(() => {
    setWarning('');
  }, [newStuff]);
  
  useEffect(() => {
    setSelectedStuffId('');
  },  [myStuff]);

  useEffect(() => {
    setStuffObtained(myStuff.reduce((sum, stuff) => {
      return sum + (stuff.selected? 1 : 0);
    }, 0));
  },  [myStuff])
  

  return <View style={styles.container}>
    <ModalComponent 
      selectedStuffId={selectedStuffId}
      setSelectedStuffHandler={setSelectedStuffHandler}
      deleteStuffById={deleteStuffById}
    />

    <Header stuffObtained={stuffObtained}/>
    
    <View style={{alignItems: 'center'}}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          placeholder="input"  
          placeholderTextColor='#555'
          onChangeText={setNewStuff}
          onSubmitEditing={(e) => addStuffHandler()}
        />

        <View style={styles.separator} />

        <ButtonArrow
          onPress={addStuffHandler}
          title='<'
        />
      </View>

      <Text style={{color: 'red'}}>{warning}</Text>
        
    </View>

    <Text style={[styles.title, {marginVertical: 40}]}>
      Stuff to get:
    </Text>

    <FlatList
      data={myStuff}
      keyExtractor={item => item.id}
      renderItem={({ item, index }) => <Card
          stuff={item}
          index={index}
          setSelectedStuffHandler={setSelectedStuffHandler}
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
  inputContainer: {
    flexDirection: 'row',
    marginTop: -29,
    borderRadius: 7,
  },
  input: {
    backgroundColor: '#1f1e24',
    color: '#fff',
    fontSize: 18,
    padding: 15,
    width: 200,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    //borderColor: '#1f1e24',
  },
  separator: {
    width: 1,
    backgroundColor: '#a370f7'
  }
});

export default Home;