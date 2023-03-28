import React, { useState, useEffect } from 'react';
import { 
    View,
    Text,
    StyleSheet,
} from 'react-native';

type Props = {
    stuffObtained: number
}

export function Header({ stuffObtained }: Props) {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const currentHour = new Date().getHours();
    
        if (currentHour < 12) {
          setGreeting('Good Morning!');
        } else if (currentHour < 18){
          setGreeting('Good Afternoon!');
        } else {
          setGreeting('Good Night!');
        }
    }, []);

    return <View style={styles.headerBackGround}>
        <Text style={styles.title}>React Native</Text>

        <Text style={styles.greetings}>
            {greeting} You have {stuffObtained} stuff!
        </Text>
    </View>
}

const styles = StyleSheet.create({
    headerBackGround: {
        backgroundColor: '#a370f7',
        height: 130,
        padding: 15,
        borderRadius: 7,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    greetings: {
        marginTop: 6,
        color: '#fff',
    },
})