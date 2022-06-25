import React, { useEffect, useState } from 'react';
import { useNavigationState } from '@react-navigation/native';
import { Image, Linking, PermissionsAndroid, StyleSheet, Text, View } from 'react-native';

const MemberCrewDetails = () => {
    const navigatonState = useNavigationState((state) => state);
    const itemData = navigatonState.routes.find((state) => state.name === 'MemberCrewDetails');
    const itemDetails = itemData?.params?.data;
    const firstName = itemDetails?.name?.split(' ')[0];
    const [hasCameraAccess, setHasCameraAccess] = useState(false);

    const handleNavigeteToExternalLink = (url) => {
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    };

    const checkCameraPermission = async () => {
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA).then((response) => {
            if (response === true) {
                //Open scanner
                setHasCameraAccess(true);
            } else if (response === false) {
                console.log('Please enable camera permission in device settings.');
                setHasCameraAccess(false);
            }
        });
    };

    useEffect(() => {
        checkCameraPermission();
    }, []);

    return (
        <View style={styles.container}>
            {hasCameraAccess ? (
                <View style={styles.item}>
                    <View>
                        <Image source={{ uri: itemDetails?.image }} style={styles.image} />
                    </View>
                    <View style={styles.descWrapper}>
                        <Text style={styles.text}>
                            {firstName} is one of member crew from {itemDetails?.agency} agency.
                            Current status is {itemDetails?.status}.
                        </Text>
                        <Text
                            style={styles.link}
                            onPress={() => handleNavigeteToExternalLink(itemDetails?.wikipedia)}
                        >
                            More info
                        </Text>
                    </View>
                </View>
            ) : (
                <Text style={styles.image}>
                    You need to enable camera permission to acces the data of the screen.
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: '#eee',
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        height: 250,
        width: 250,
    },
    descWrapper: {
        padding: 10,
        width: 250,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        color: '#777',
        paddingTop: 5,
    },
    link: {
        color: '#005288',
        fontWeight: '700',
        paddingTop: 20,
    },
});

export default MemberCrewDetails;
