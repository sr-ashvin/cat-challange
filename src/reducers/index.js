// This file contains root reducer: it combines all other reducers

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import AddCatReducer from '../screens/AddCats/reducer';

const persistConfig = {
    key: 'auth',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
};

const appReducer = combineReducers({
    addCat: persistReducer(persistConfig, AddCatReducer),
});

export default appReducer;
