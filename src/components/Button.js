import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors, fontSize } from '../themes';

const Button = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

export { Button };

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.purple,
        width: '100%',
        height: 50,
        marginVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
    text: {
        color: Colors.white,
        fontSize: fontSize.font16,
    },
});
