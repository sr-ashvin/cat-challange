import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '../common/constants';
import { Home, AddCat } from '../screens';
import { Colors } from '../themes';

// Screen Navigation
const Navigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Colors.primary,
                    },
                    headerTintColor: Colors.white,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen
                    name={NAVIGATION.Home}
                    component={Home}
                    options={{
                        title: 'Home',
                    }}
                />
                <Stack.Screen
                    name={NAVIGATION.AddCats}
                    component={AddCat}
                    options={({ route }) => ({ title: route.params.name })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export { Navigation };
