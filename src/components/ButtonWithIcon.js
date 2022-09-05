/* Button With Icon component */
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import React from 'react';
import { fontSize } from '../themes';

const ButtonWithIcon = ({
    text,
    onPress,
    image,
    hasBorder,
    imageStyle,
    textStyle,
}) => {
    return (
        <>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                {image && (
                    <Image
                        source={image}
                        style={[styles.image, { ...imageStyle }]}
                        resizeMode='contain'
                    />
                )}
                <Text style={[styles.text, { ...textStyle }]}>{text}</Text>
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
