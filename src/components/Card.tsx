import React from 'react';
import {
    Text,
    TouchableOpacity, 
    StyleSheet 
} from 'react-native';

type Props = {
    myStuff: string[],
}

function Card(props: Props) {
    const { myStuff } = props;

    const renderedStuff = myStuff.map((stuff, index) => <TouchableOpacity 
                style={styles.buttonStuff}
                key={index}
            >
            <Text style={styles.stuffs}>
                {stuff}
            </Text>
        </TouchableOpacity>
    );

    return <>{renderedStuff}</>
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