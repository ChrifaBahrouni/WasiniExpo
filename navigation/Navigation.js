import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Chat from '../Screen/Chat';
import ChatScreen from '../Screen/ChatScreen';
import Tabs from './Tabs';

const Stack = createStackNavigator();
function Navigation(props) {
    return <NavigationContainer>

        <Stack.Navigator initialRouteName={Tabs}>

            <Stack.Screen
                name="Main"
                component={Tabs}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Chats"
                component={Chat}
                options={{
                    title: " Chat Screen  ",
                    headerStyle: {
                        //backgroundColor:"#1c1c1c"
                    },
                    headerTintColor: "black"

                }}
            /> 

        </Stack.Navigator>
    </NavigationContainer>
}

export default Navigation;
