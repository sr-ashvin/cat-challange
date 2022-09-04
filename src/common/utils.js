import Toast from 'react-native-toast-message';

export const notifyMessage = (message, type) => {
    Toast.show({
        type: type || 'success',
        text1: message,
        visibilityTime: 2000,
    });
};
