import React from "react";
import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    StyleSheet,
} from 'react-native';

interface MyButtonType extends TouchableOpacityProps {
  title: '>' | '<';
}

export default function ButtonArrow({ title, ...rest }: MyButtonType) {
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
        backgroundColor: '#1f1e24',
        padding: 15,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        alignItems: 'center',
      },
      buttonText: {
        fontSize: 20,
        color: '#a370f7'
      },
});