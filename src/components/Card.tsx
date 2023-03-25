import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import CheckBox from 'expo-checkbox';

interface Props {
    name: string
    removeStuffHandlerById: () => void;
}

function Card(props: Props) {
    const { name, removeStuffHandlerById } = props;
    const [toggleCheckBox, setToggleCheckbox] = useState(false);

    return <View style={styles.card}>
        <View style={styles.title}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckbox(newValue)}
            />
            
            <Text style={[styles.stuffs, toggleCheckBox? styles.stuffGotten : {}]}>
                {name}
            </Text>
        </View>

        <Icon name='trash' size={30} color='white' onPress={removeStuffHandlerById} />
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
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 8,
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
    stuffGotten: {
        textDecorationLine: 'line-through',
        color: 'green',
    }
})

export default Card;