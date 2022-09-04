import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setCatDetail,
    getCatDetailById,
    clearCatDetailById,
    updateCatDetail,
} from './actions';
import { useEffect } from 'react';
import { Button, Input } from '../../components';
import { Colors } from '../../themes';
import { notifyMessage } from '../../common/utils';

const AddCat = ({ route, navigation }) => {
    const dispatch = useDispatch();
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
        if (!name) {
            notifyMessage('Enter cat name', 'error');
            return;
        }
        if (!breed) {
            notifyMessage('Enter cat breed', 'error');
            return;
        }
        if (!description) {
            notifyMessage('Enter cat description', 'error');
            return;
        }

        try {
            let message = '';
            if (typeof route?.params?.id != 'undefined') {
                updateCatDetail(params, route?.params?.id);
                message = 'successfully updated';
            } else {
                setCatDetail(params);
                message = 'successfully added';
            }
            const dispatchAction =
                typeof route?.params?.id != 'undefined'
                    ? updateCatDetail(params, route?.params?.id)
                    : setCatDetail(params);

            dispatch(dispatchAction).then(() => {
                navigation.goBack();
                notifyMessage(message);
            });
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View style={styles.container}>
            <Input
                onChangeText={setName}
                value={name}
                placeholder='Enter Name'
                label='name'
                returnKeyType='next'
            />

            <Input
                onChangeText={setBreed}
                value={breed}
                placeholder='Enter Breed'
                label='Breed'
                returnKeyType='next'
            />

            <Input
                onChangeText={setDescription}
                value={description}
                placeholder='Enter Description'
                label='Description'
                multiline={true}
                styleInput={styles.description}
                returnKeyType='go'
            />

            <Button
                onPress={saveCat}
                text={
                    typeof route?.params?.id != 'undefined' ? 'Update' : 'Save'
                }
            />
        </View>
    );
};

export { AddCat };

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    description: {
        height: 150,
        textAlignVertical: 'top',
        paddingTop: 15,
        borderRadius: 20,
    },
});
