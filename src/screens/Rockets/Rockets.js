import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    Image,
    Linking,
    PermissionsAndroid,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketsRequest } from '../../redux/reducers/rockets/rocketsReducer';

const Item = ({ title, description, image, wikipedia }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.description}>{description}</Text>
        <Text
            style={styles.link}
            onPress={() =>
                Linking.openURL(wikipedia).catch((err) => console.error('An error occurred', err))
            }
        >
            More info
        </Text>
    </View>
);

const Rockets = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const rocketsList = useSelector((state) => state?.rockets?.rocketsList);

    useEffect(() => {
        dispatch(getRocketsRequest());
    }, []);

    const renderItem = ({ item }) => (
        <Item
            title={item.name}
            image={item.flickr_images[0]}
            description={item.description}
            wikipedia={item.wikipedia}
            onPress={() => navigation.navigate('MemberCrewDetails', { data: item })}
        />
    );

    return (
        <View style={styles.mainWrapper}>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={rocketsList}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#005288',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        color: '#eee',
        fontSize: 32,
        marginBottom: 10,
    },
    description: {
        color: '#eee',
        fontSize: 14,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
    link: {
        color: '#ccc',
        fontWeight: '700',
        paddingTop: 20,
    },
});

export default Rockets;
