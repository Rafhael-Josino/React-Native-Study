import React, { useEffect, useState } from 'react';
import {
    Keyboard,
    View,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native';
import CheckBox from 'expo-checkbox';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { StuffType } from '../types';

type Props = {
    stuff: StuffType,
    index: number,
    setSelectedStuffHandler: (id: string) => void
    changeStuffStatus: (index: number, status: boolean) => void
    changeStuffName: (index: number, name: string) => void
}

function Card(props: Props) {
    const { stuff, index, setSelectedStuffHandler, changeStuffStatus, changeStuffName } = props;
    const { name, selected, id } = stuff;
    const [editActive, setEditActive] = useState(false);
    const [newName, setNewName] = useState(name);

    
    useEffect(() => {
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setEditActive(false);
        });
      
        return () => {
            hideSubscription.remove();
        };
    }, [])

    useEffect(() => {
        if (!editActive) setNewName(name);
    }, [editActive])


    return <View style={[styles.card, index % 2? styles.cardOdd : styles.cardEven]}>
        <View style={styles.title}>
            <CheckBox
                disabled={false}
                value={selected}
                onValueChange={(newValue) => changeStuffStatus(index, newValue)}
            />
            
            {
                editActive?
                    <TextInput 
                        style={styles.editView}
                        value={newName}
                        onChangeText={setNewName}
                        onSubmitEditing={(e) => {if (name !== newName) changeStuffName(index, newName)}}
                        autoFocus={true}
                    />
                :
                    <Text style={[styles.stuffs, selected? styles.stuffObtained : {}]}>
                        {name}
                    </Text>    
            }      
        </View>

        <View style={styles.title}>
            {
                editActive?
                    <FontAwesome
                        name='stop'
                        size={30}
                        color='white'
                    />
                :
                    <FontAwesome 
                        name="edit" 
                        size={30} 
                        color="white"
                        onPress={() => setEditActive(!editActive)}
                    />
            }

            <Foundation
                name='trash' 
                size={30} 
                color='white' 
                onPress={() => setSelectedStuffHandler(id)} 
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#1f1e24',
        paddingLeft: 15,
        paddingRight: 8,
        borderRadius: 10,
    },
    cardEven: {
        backgroundColor: '#b2b0b0',
    },
    cardOdd: {
        backgroundColor: '#787878',
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 20,
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
    },
    stuffObtained: {
        textDecorationLine: 'line-through',
        color: 'green',
    },
    editView: {
        backgroundColor: '#666',
        color: 'white',
        fontSize: 22,
    }
})

export default Card;