import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getMemberCrewsRequest } from '../../redux/reducers/memberCrews/memberCrewsReducer';

const Item = ({ title, image, onPress }) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
        <Image source={{ uri: image }} style={{ height: 50, width: 50 }} />
    </TouchableOpacity>
);

const MemberCrews = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const memberCrewsList = useSelector((state) => state?.memberCrews?.memberCrewsList);

    useEffect(() => {
        dispatch(getMemberCrewsRequest());
    }, []);

    const renderItem = ({ item }) => (
        <Item
            title={item.name}
            image={item.image}
            onPress={() =>
                navigation.navigate('MemberCrewDetails', { data: item, title: item?.name })
            }
        />
    );

    return (
        <View style={styles.mainWrapper}>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={memberCrewsList}
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#005288',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        color: '#eee',
        fontSize: 24,
    },
});

export default MemberCrews;
