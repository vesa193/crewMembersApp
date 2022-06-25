import { all, fork } from 'redux-saga/effects';
import { getMemberCrewsFlow } from './getMemberCrewsFlow';
import { getRocketsFlow } from './getRocketsFlow';

export default function* rootSaga() {
    yield all([yield fork(getMemberCrewsFlow)]);
    yield all([yield fork(getRocketsFlow)]);
    // code after all-effect
}
