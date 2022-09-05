/* Input component */
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { Colors, fontSize } from '../themes';

const Input = React.forwardRef(
    (
        { onChangeText, placeholder, label, value, styleInput, ...otherProps },
        ref
    ) => {
        return (
            <>
                {label && <Text style={styles.labelStyle}>{label}</Text>}
                <TextInput
                    ref={ref}
                    style={[styles.input, styleInput]}
                    onChangeText={onChangeText}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.offWhite}
                    {...otherProps}
                />
            </>
        );
    }
);

export { Input };

const styles = StyleSheet.create({
    input: {
        height: 50,
        marginVertical: 10,
        paddingHorizontal: 20,
        color: Colors.white,
        backgroundColor: Colors.offWhite,
        borderRadius: 25,
        fontSize: fontSize.font16,
    },
    labelStyle: {
        textAlign: 'left',
        color: Colors.white,
        textTransform: 'capitalize',
        marginLeft: 10,
        fontSize: fontSize.font14,
    },
});
