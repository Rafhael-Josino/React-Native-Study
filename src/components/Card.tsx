import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native';
import CheckBox from 'expo-checkbox';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { StuffType } from '../types';

type Props = {
    stuff: StuffType,
    index: number,
    setSelectedStuffHandler: (id: string) => void
    changeStuffStatus: (index: number, status: boolean) => void
}

function Card(props: Props) {
    const { stuff, index, setSelectedStuffHandler, changeStuffStatus } = props;
    const { name, selected, id } = stuff;
    const [editActive, setEditActive] = useState(false);
    const [stuffName, setStuffName] = useState(name);

    
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
                        onChangeText={setStuffName}
                        value={stuffName}
                    />
                :
                    <Text style={[styles.stuffs, selected? styles.stuffObtained : {}]}>
                        {name}
                    </Text>    
            }

            
        </View>

        <View style={styles.title}>
            <FontAwesome 
                name="edit" 
                size={30} 
                color="white"
                onPress={() => setEditActive(!editActive)}
                />

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
        paddingLeft: 5,
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
        columnGap: 10,
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
        backgroundColor: 'gray',
        color: 'white',
    }
})

export default Card;