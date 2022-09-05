import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    Alert,
    Image,
} from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
/**********Custom Import ************/
import { NAVIGATION } from '../../common/constants';
import { deleteCatItem, getFilterData } from '../AddCats/actions';
import {
    AbsoluteButton,
    ButtonWithIcon,
    Cards,
    EmptyData,
    SearchInput,
} from '../../components';
import { Colors } from '../../themes';
import { images } from '../../common/assets/images';
import { notifyMessage } from '../../common/utils';

const Home = ({ navigation }) => {
    const dispatch = useDispatch();
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const toggleModal = (index) => {
        setModalVisible(!isModalVisible);
        setSelectedIndex(index);
    };
    const { list, filterList } = useSelector((state) => state?.addCat);
    console.log('------filterList------>', filterList);

    const onPressDelete = () => {
        Alert.alert('Cattify', 'Are you sure to delete?', [
            { text: 'NO' },
            {
                text: 'YES',
                onPress: () => {
                    dispatch(deleteCatItem(selectedIndex)).then(() => {
                        setModalVisible(!isModalVisible);
                        setSelectedIndex(null);
                        notifyMessage('Successfully Deleted');
                    });
                },
            },
        ]);
    };
    const onPressUpdate = () => {
        setModalVisible(!isModalVisible);
        navigation.navigate(NAVIGATION.AddCats, {
            id: selectedIndex,
            name: 'Update Cat',
        });
    };
    const onPressSearch = (text) => {
        getFilterData(text);
    };
    const renderItem = ({ item, index }) => (
        <Cards item={item} index={index} onPress={toggleModal} />
    );
    return (
        <View style={styles.container}>
            {list && <SearchInput onPress={(text) => onPressSearch(text)} />}
            <FlatList
                data={list}
                renderItem={renderItem}
                removeClippedSubviews
                keyExtractor={(item, index) => index}
                extraData={list}
                ListEmptyComponent={<EmptyData />}
            />
            <AbsoluteButton
                onPress={() =>
                    navigation.navigate(NAVIGATION.AddCats, {
                        name: 'Add New Cat',
                    })
                }
            />
            <Modal
                isVisible={isModalVisible}
                swipeDirection={['up', 'left', 'right', 'down']}
                onBackdropPress={toggleModal}
                style={styles.view}
            >
                <View style={styles.modalView}>
                    <ButtonWithIcon
                        text='Update'
                        onPress={onPressUpdate}
                        image={images.edit}
                        hasBorder
                    />
                    <ButtonWithIcon
                        text='Delete'
                        onPress={onPressDelete}
                        image={images.delete}
                    />
                </View>
            </Modal>
        </View>
    );
};

export { Home };

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: Colors.primary,
        paddingHorizontal: 20,
    },
    view: {
        justifyContent: 'flex-end',
        margin: 5,
    },
    modalView: {
        height: 180,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingTop: 10,
    },
});
