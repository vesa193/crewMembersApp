import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MemberCrews from '../screens/MemberCrews/MemberCrews';
import Rockets from '../screens/Rockets/Rockets';
import MemberCrewDetails from '../screens/MemberCrewDetails/MemberCrewDetails';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Rockets" component={Rockets} />
            <Tab.Screen
                name="MemberCrews"
                options={{ title: 'Member Crews' }}
                component={MemberCrews}
            />
        </Tab.Navigator>
    );
}

export default function RouterManager() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{ headerShown: false }} component={TabNav} />
                <Stack.Screen
                    name="MemberCrewDetails"
                    options={({ route }) => ({ title: route.params.title })}
                    component={MemberCrewDetails}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
