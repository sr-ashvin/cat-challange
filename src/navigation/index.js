import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '../common/constants';
import { Home, AddCat } from '../screens';

const Navigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={NAVIGATION.Home}
                    component={Home}
                    options={{ title: 'Home' }}
                />
                <Stack.Screen
                    name={NAVIGATION.AddCats}
                    component={AddCat}
                    options={{ title: 'Cats' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export { Navigation };
