/* Card component */
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Colors, fontSize } from '../themes';
import { images } from '../common/assets/images';

const Cards = ({ item, onPress, index }) => {
    return (
        <View key={index} style={styles.card}>
            <Image
                style={styles.catImage}
                source={images.catPlaceholder}
                resizeMode='contain'
            />

            <View
                style={{
                    justifyContent: 'flex-start',
                    flex: 1,
                    paddingHorizontal: 10,
                }}
            >
                <Text
                    style={styles.title}
                    ellipsizeMode='tail'
                    numberOfLines={1}
                >
                    {item?.name}
                </Text>
                <Text
                    style={styles.breed}
                    ellipsizeMode='tail'
                    numberOfLines={1}
                >
                    {item?.breed}
                </Text>
                <Text
                    style={styles.description}
                    ellipsizeMode='tail'
                    numberOfLines={2}
                >
                    {item?.description}
                </Text>
            </View>

            <TouchableOpacity
                onPress={() => onPress(index)}
                style={{ padding: 5 }}
            >
                <Image
                    style={styles.menu}
                    source={images.menu}
                    resizeMode='contain'
                />
            </TouchableOpacity>
        </View>
    );
};

export { Cards };

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.white,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,

        borderRadius: 15,
    },
    catImage: {
        height: 80,
        width: 80,
        borderRadius: 30 / 2,
    },
    menu: {
        height: 25,
        width: 40,
    },
    title: { fontSize: fontSize.font16 },
    breed: { fontSize: fontSize.font14, paddingTop: 3 },
    description: { fontSize: fontSize.font12, paddingTop: 3 },
});
