import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setCatDetail,
    getCatDetailById,
    clearCatDetailById,
    updateCatDetail,
} from './actions';
import { useEffect } from 'react';

const AddCat = ({ route, navigation }) => {
    const dispatch = useDispatch();
    console.log(route?.params?.id);
    const { item } = useSelector((state) => state?.addCat);

    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        dispatch(getCatDetailById(route?.params?.id));
        return () => {
            dispatch(clearCatDetailById());
            setName();
            setBreed();
            setDescription();
        };
    }, []);

    useEffect(() => {
        if (item) {
            setName(item?.name);
            setBreed(item?.breed);
            setDescription(item?.description);
        }
    }, [item]);

    const saveCat = () => {
        const params = {
            name,
            breed,
            description,
        };
        try {
            const dispatchAction = route?.params?.id
                ? updateCatDetail(params, route?.params?.id)
                : setCatDetail(params);

            dispatch(dispatchAction).then(() => {
                navigation.goBack();
            });
        } catch (e) {}
    };
    return (
        <View
            style={{
                alignItems: 'center',
            }}
        >
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder='name'
            />
            <TextInput
                style={styles.input}
                onChangeText={setBreed}
                value={breed}
                placeholder='breed'
            />
            <TextInput
                style={styles.input}
                onChangeText={setDescription}
                value={description}
                placeholder='description'
            />

            <TouchableOpacity onPress={saveCat} style={styles.button}>
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
    );
};

export { AddCat };

const styles = StyleSheet.create({
    input: {
        width: '80%',
        borderWidth: 1,
        height: 60,
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: 'red',
        width: '80%',
        borderWidth: 1,
        height: 60,
        marginVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
