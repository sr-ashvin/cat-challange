/* search input component */
import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Input } from './Input';

const SearchInput = ({ onPress, value }) => {
    return (
        <Input placeholder='Search..' onChangeText={onPress} value={value} />
    );
};

export { SearchInput };

const styles = StyleSheet.create({});
