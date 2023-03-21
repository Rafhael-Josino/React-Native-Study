import React from 'react';
import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    StyleSheet,
    FlatList,
} from 'react-native';
import { StuffType } from '../types';

interface CardType extends TouchableOpacityProps {
    name: string,
}

function Card({ name, ...rest }: CardType) {
    return <TouchableOpacity 
        style={styles.buttonStuff}
        {...rest}
    >
        <Text style={styles.stuffs}>
            {name}
        </Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
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

export default Card;