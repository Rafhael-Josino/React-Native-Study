import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

interface Props {
    name: string
    removeStuffHandlerById: () => void;
}

function Card(props: Props) {
    const { name, removeStuffHandlerById } = props;

    return <View style={styles.card}>
        <Text style={styles.stuffs}>
            {name}
        </Text>

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