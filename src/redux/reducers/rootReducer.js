import { combineReducers } from 'redux';
import memberCrewsReducer from './memberCrews/memberCrewsReducer';
import rocketsReducer from './rockets/rocketsReducer';

export const rootReducer = combineReducers({
    memberCrews: memberCrewsReducer,
    rockets: rocketsReducer,
});
