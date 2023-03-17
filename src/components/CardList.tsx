import React from 'react';
import {
    Text,
    TouchableOpacity, 
    StyleSheet,
    FlatList,
} from 'react-native';

type Props = {
    myStuff: string[],
}

function Card(props: Props) {
    const { myStuff } = props;

    const renderedStuff = (stuff: string) => <TouchableOpacity 
        style={styles.buttonStuff}
    >
        <Text style={styles.stuffs}>
            {stuff}
        </Text>
    </TouchableOpacity>

    return <FlatList
        data={myStuff}
        keyExtractor={item => item}
        renderItem={({ item }) => renderedStuff(item) }
    />
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