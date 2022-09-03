import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    Alert,
} from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
/**********Custom Import ************/
import { NAVIGATION } from '../../common/constants';
import { deleteCatItem } from '../AddCats/actions';

const Home = ({ navigation }) => {
    const dispatch = useDispatch();
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const toggleModal = (index) => {
        setModalVisible(!isModalVisible);
        setSelectedIndex(index);
    };
    const { list } = useSelector((state) => state?.addCat);

    const onPressDelete = () => {
        Alert.alert('App', 'Are you sure to delete?', [
            { text: 'NO' },
            {
                text: 'YES',
                onPress: () => {
                    dispatch(deleteCatItem(selectedIndex)).then(() => {
                        setModalVisible(!isModalVisible);
                        setSelectedIndex(null);
                    });
                },
            },
        ]);
    };
    const onPressUpdate = () => {
        setModalVisible(!isModalVisible);
        navigation.navigate(NAVIGATION.AddCats, { id: selectedIndex });
    };

    const renderItem = ({ item, index }) => (
        <View key={index} style={{ flexDirection: 'row' }}>
            <Text>{item.name}</Text>
            <Text>{item.breed}</Text>
            <Text>{item.description}</Text>
            <TouchableOpacity
                onPress={() => {
                    toggleModal(index);
                }}
                style={{ padding: 10, backgroundColor: 'red' }}
            >
                <Text>option</Text>
            </TouchableOpacity>
        </View>
    );
    return (
        <View style={{ flexGrow: 1 }}>
            <FlatList
                data={list}
                renderItem={renderItem}
                removeClippedSubviews
                keyExtractor={(item, index) => index}
                extraData={list}
            />
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    bottom: 30,
                    right: 30,
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: 'red',
                }}
                onPress={() => navigation.navigate(NAVIGATION.AddCats)}
            >
                <Text
                    style={{
                        fontSize: 25,
                        textAlign: 'center',

                        padding: 8,
                        color: 'white',
                    }}
                >
                    +
                </Text>
            </TouchableOpacity>
            <Modal
                isVisible={isModalVisible}
                swipeDirection={['up', 'left', 'right', 'down']}
                onBackdropPress={toggleModal}
                style={styles.view}
            >
                <View
                    style={{
                        height: 200,
                        borderWidth: 1,
                        backgroundColor: 'white',
                    }}
                >
                    <TouchableOpacity
                        onPress={onPressUpdate}
                        style={styles.button}
                    >
                        <Text>Update</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={onPressDelete}
                        style={styles.button}
                    >
                        <Text>Delete</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

export { Home };

const styles = StyleSheet.create({
    view: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    button: {
        borderWidth: 1,
        paddingVertical: 20,
        alignContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
});
