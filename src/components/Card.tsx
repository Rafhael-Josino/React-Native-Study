import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import CheckBox from 'expo-checkbox';

type Props = {
    name: string,
    selected: boolean,
    index: number,
    removeStuffHandlerById: () => void,
    changeStuffStatus: (index: number, status: boolean) => void
}

function Card(props: Props) {
    const { name, selected, index, removeStuffHandlerById, changeStuffStatus } = props;
    
    return <View style={[styles.card, index % 2? styles.cardOdd : styles.cardEven]}>
        <View style={styles.title}>
            <CheckBox
                disabled={false}
                value={selected}
                onValueChange={(newValue) => changeStuffStatus(index, newValue)}
            />
            
            <Text style={[styles.stuffs, selected? styles.stuffObtained : {}]}>
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
    cardEven: {
        backgroundColor: '#b2b0b0',
    },
    cardOdd: {
        backgroundColor: '#787878',
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
    stuffObtained: {
        textDecorationLine: 'line-through',
        color: 'green',
    }
})

export default Card;