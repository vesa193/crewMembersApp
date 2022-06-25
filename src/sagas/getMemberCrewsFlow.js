import { call, put, take } from 'redux-saga/effects';
import api from '../api/api';
import {
    getMemberCrewsRequest,
    setMemberCrewsFailed,
    setMemberCrewsSuccess,
} from '../redux/reducers/memberCrews/memberCrewsReducer';

// getMemberCrewsFlow saga handler
export function* getMemberCrewsFlow() {
    while (true) {
        yield take(getMemberCrewsRequest.type);
        try {
            const response = yield call(api.fetchMemberCrews);
            yield put(setMemberCrewsSuccess(response));
        } catch (e) {
            yield put(setMemberCrewsFailed(e.message));
        }
    }
}
