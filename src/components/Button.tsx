import React from "react";
import {
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

type Props = {
    setMyStuffHandler: () => void,
}

function Button(props: Props) {
    const { setMyStuffHandler } = props;

    return <TouchableOpacity 
    style={styles.button} 
    activeOpacity={.7}
    onPress={setMyStuffHandler}
  >
    <Text style={styles.buttonText}>
      Add a new stuff
    </Text>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#a370f7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
      },
      buttonText: {
        color: '#fff'
      },
});

export default Button;