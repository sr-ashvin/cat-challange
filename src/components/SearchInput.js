import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Input } from './Input';

const SearchInput = ({ onPress }) => {
    const onChangeText = (text) => {
        onPress(text);
    };
    return <Input placeholder='Search..' onChangeText={onChangeText} />;
};

export { SearchInput };

const styles = StyleSheet.create({});
