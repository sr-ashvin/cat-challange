import React from 'react';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';

import { store } from './store';
import { Navigation } from './navigation';

export default function App() {
    return (
        <Provider store={store}>
            <Navigation />
            <Toast />
        </Provider>
    );
}
