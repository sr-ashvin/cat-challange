/* Empty record component */
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { images } from '../common/assets/images';
import { Colors, fontSize } from '../themes';

const EmptyData = () => {
    return (
        <View style={styles.noData}>
            <Image
                style={styles.placeholder}
                source={images.catPlaceholder}
                resizeMode='contain'
            />
            <Text style={styles.text}>No record found</Text>
        </View>
    );
};

export { EmptyData };

const styles = StyleSheet.create({
    noData: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    placeholder: {
        width: 100,
        height: 100,
    },
    text: {
        fontSize: fontSize.font16,
        color: Colors.white,
        padding: 10,
    },
});
