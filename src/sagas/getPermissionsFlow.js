import { call, put, take } from 'redux-saga/effects';
import api from '../api/api';
import {
    requestUserPermissions,
    setCameraPermissionSuccess,
    setPermissionsFailed,
    setReadExternalStoragePermissionSuccess,
    setWriteExternalStoragePermissionSuccess,
} from '../redux/reducers/common/commonReducer';
import { getRocketsRequest } from '../redux/reducers/rockets/rocketsReducer';

// getPermissionsFlow saga handler
export function* getPermissionsFlow() {
    const cameraResponse = yield call(api.requestCameraPermission);
    yield put(setCameraPermissionSuccess(cameraResponse));

    const readStorageResponse = yield call(api.requestReadExternalStoragePermission);
    yield put(setReadExternalStoragePermissionSuccess(readStorageResponse));
    yield put(setPermissionsFailed(e.message));

    const writeStorageResponse = yield call(api.requestWriteExternalStoragePermission);
    yield put(setWriteExternalStoragePermissionSuccess(writeStorageResponse));
    yield put(setPermissionsFailed(e.message));
}

export function* getPermissionsFlowWatcher() {
    yield take(requestUserPermissions.type, getPermissionsFlow);
}
