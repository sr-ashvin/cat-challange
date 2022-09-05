/*
 * Home Screen, Display the Cat animal listing
 */
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
/**********Custom Import ************/
import { NAVIGATION } from '../../../common/constants';
import {
    deleteCatItem,
    getFilterData,
    clearFilterData,
} from '../../AddCats/actions';
import {
    AbsoluteButton,
    ButtonWithIcon,
    Cards,
    EmptyData,
    SearchInput,
} from '../../../components';
import { Colors } from '../../../themes';
import { images } from '../../../common/assets/images';
import { notifyMessage } from '../../../common/utils';

const Home = ({ navigation }) => {
    const dispatch = useDispatch();
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [searchValue, setSearchValue] = useState('');

    const toggleModal = (index) => {
        setModalVisible(!isModalVisible);
        setSelectedIndex(index);
    };
    const { list, filterList } = useSelector((state) => state?.addCat);

    useEffect(() => {
        return () => {
            dispatch(clearFilterData());
        };
    }, []);

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
        setSearchValue(text);
        dispatch(getFilterData(text));
    };
    const renderItem = ({ item, index }) => (
        <Cards item={item} index={index} onPress={toggleModal} />
    );
    const data = searchValue ? filterList : list;

    return (
        <View style={styles.container}>
            {list.length > 0 ? (
                <SearchInput onPress={onPressSearch} value={searchValue} />
            ) : null}
            <FlatList
                data={data}
                renderItem={renderItem}
                removeClippedSubviews
                keyExtractor={(item, index) => index}
                extraData={list}
                ListEmptyComponent={<EmptyData />}
                style={styles.marginBottom}
                showsHorizontalScrollIndicator={false}
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
                        imageStyle={{ tintColor: Colors.red }}
                        textStyle={{ color: Colors.red }}
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
    marginBottom: { marginBottom: 100 },
});
