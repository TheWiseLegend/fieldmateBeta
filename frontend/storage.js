import AsyncStorage from '@react-native-async-storage/async-storage';

const isWeb = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

export const storeData = async (key, value) => {
    if (isWeb) {
        localStorage.setItem(key, value);
    } else {
        await AsyncStorage.setItem(key, value);
    }
};

export const getData = async (key) => {
    if (isWeb) {
        return localStorage.getItem(key);
    } else {
        return await AsyncStorage.getItem(key);
    }
};
