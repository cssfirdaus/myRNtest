import {all} from 'redux-saga/effects';
import {userSaga} from './user.saga';
import {dashboardSaga} from './dashboard.saga';

function* rootSaga() {
  yield all([userSaga(), dashboardSaga()]);
}

export default rootSaga;
