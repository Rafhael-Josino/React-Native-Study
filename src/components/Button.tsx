import React from "react";
import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    StyleSheet,
} from 'react-native';

interface MyButtonType extends TouchableOpacityProps {
  title: string,
}

type Props = {
    setMyStuffHandler: () => void,
}

function Button({ title, ...rest }: MyButtonType) {
    return <TouchableOpacity 
      style={styles.button} 
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.buttonText}>
        {title}
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
        width: 200,
      },
      buttonText: {
        color: '#fff'
      },
});

export default Button;