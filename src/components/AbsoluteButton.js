/* Absolute button component */
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../themes';

const AbsoluteButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
    );
};

export { AbsoluteButton };

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 50,
        right: 30,
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: Colors.purple,
        shadowColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    buttonText: {
        fontSize: 25,
        textAlign: 'center',
        padding: 8,
        color: Colors.white,
    },
});
