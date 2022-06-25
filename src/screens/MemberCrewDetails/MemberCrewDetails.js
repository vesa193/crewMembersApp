import { useNavigationState } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';

const MemberCrewDetails = () => {
    const navigatonState = useNavigationState((state) => state);
    const itemData = navigatonState.routes.find((state) => state.name === 'MemberCrewDetails');
    const itemDetails = itemData?.params?.data;
    const firstName = itemDetails?.name?.split(' ')[0];

    const handleNavigeteToExternalLink = (url) => {
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    };

    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <View>
                    <Image source={{ uri: itemDetails?.image }} style={styles.image} />
                </View>
                <View style={styles.descWrapper}>
                    <Text style={styles.text}>
                        {firstName} is one of member crew from {itemDetails?.agency} agency. Current
                        status is {itemDetails?.status}.
                    </Text>
                    <Text
                        style={styles.link}
                        onPress={() => handleNavigeteToExternalLink(itemDetails?.wikipedia)}
                    >
                        More info
                    </Text>
                </View>
            </View>
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
