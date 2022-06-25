import { call, put, take } from 'redux-saga/effects';
import api from '../api/api';
import {
    getRocketsRequest,
    setRocketsFailed,
    setRocketsSuccess,
} from '../redux/reducers/rockets/rocketsReducer';

// getRocketsFlow saga handler
export function* getRocketsFlow() {
    while (true) {
        yield take(getRocketsRequest.type);
        try {
            const response = yield call(api.fetchRockets);
            yield put(setRocketsSuccess(response));
        } catch (e) {
            yield put(setRocketsFailed(e.message));
        }
    }
}
