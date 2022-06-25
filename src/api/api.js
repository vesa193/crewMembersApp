import axios from 'axios';
import { PermissionsAndroid } from 'react-native';

const fetchMemberCrews = async () => {
    const res = await axios.get('https://api.spacexdata.com/v4/crew');
    const memberCrewsList = res.data;
    return memberCrewsList;
};

const fetchRockets = async () => {
    const res = await axios.get('https://api.spacexdata.com/v4/rockets');
    const RocketsList = res.data;
    return RocketsList;
};

const requestCameraPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
            title: 'App Camera Permission',
            message:
                'Cool Photo App needs access to your camera ' +
                'so you can access to awesome Member Crew Detail screen.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
        });
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

const api = {
    fetchMemberCrews,
    fetchRockets,
    requestCameraPermission,
    requestReadExternalStoragePermission,
    requestWriteExternalStoragePermission,
};

export default api;
