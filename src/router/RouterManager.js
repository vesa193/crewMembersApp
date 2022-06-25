import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PermissionsAndroid } from 'react-native';
import MemberCrewDetails from '../screens/MemberCrewDetails/MemberCrewDetails';
import MemberCrews from '../screens/MemberCrews/MemberCrews';
import Rockets from '../screens/Rockets/Rockets';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Rockets"
                component={Rockets}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require('./../assets/icons/rocket.png')}
                            style={{ width: 20, height: 20 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="MemberCrews"
                options={{
                    title: 'Member Crews',
                    tabBarIcon: () => (
                        <Image
                            source={require('./../assets/icons/members.png')}
                            style={{ width: 25, height: 25 }}
                        />
                    ),
                }}
                component={MemberCrews}
            />
        </Tab.Navigator>
    );
}

export default function RouterManager() {
    const [hasCameraAccess, setHasCameraAccess] = useState(false);
    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'App Camera Permission',
                    message:
                        'Cool Photo App needs access to your camera ' +
                        'so you can access to awesome Member Crew Detail screen.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the camera');
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const requestReadExternalStoragePermission = async () => {
        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
            title: 'Get Read External Storage Access',
            message: 'get read external storage access for detecting screenshots',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
        });
    };

    const requestWriteExternalStoragePermission = async () => {
        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
            title: 'Get Read External Storage Access',
            message: 'get read external storage access for detecting screenshots',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
        });
    };

    const checkCameraPermission = async () => {
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA).then((response) => {
            if (response === true) {
                //Open scanner
                console.log('YOU HAVE ACCESS!');
                setHasCameraAccess(true);
            } else if (response === false) {
                console.log('Please enable camera permission in device settings.');
                setHasCameraAccess(false);
            }
        });
    };

    useEffect(() => {
        requestCameraPermission();
        requestReadExternalStoragePermission();
        requestWriteExternalStoragePermission();
    }, []);

    useEffect(() => {
        checkCameraPermission();
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{ headerShown: false }} component={TabNav} />
                <Stack.Screen
                    name="MemberCrewDetails"
                    options={({ route }) => ({
                        title: hasCameraAccess ? route.params.title : 'Member Crew Detail',
                    })}
                    component={MemberCrewDetails}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
