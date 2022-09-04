import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import React from 'react';
import { Colors, fontSize } from '../themes';

const ButtonWithIcon = ({ text, onPress, image, hasBorder }) => {
    return (
        <>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                {image && (
                    <Image
                        source={image}
                        style={styles.image}
                        resizeMode='contain'
                    />
                )}
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
            {hasBorder && <View style={styles.border} />}
        </>
    );
};

export { ButtonWithIcon };

const styles = StyleSheet.create({
    text: {
        fontSize: fontSize.font16,
        paddingHorizontal: 20,
    },
    image: {
        height: 35,
        width: 35,
    },
    button: {
        paddingVertical: 15,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    border: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'grey',
    },
});
