import {createAction} from '@reduxjs/toolkit';
import {call, put, select, takeEvery} from 'redux-saga/effects';
import {setIsLogin} from '../slice/user.reducer';
import {setDashboardData} from '../slice/dashboard.reducer';
import {httpService} from '../services/http.services';

export function* fetchDashboardDetail(action?: any): Generator<any> {
  try {
    const response: any = yield call(
      httpService.getCall,
      'http://www.omdbapi.com/?apikey=811ab233&s=car',
    );
    // .then(data => {
    console.log(response.data.Search);
    // })
    // .catch(e => {
    //   console.log(e);
    // });
    yield put(setDashboardData(response.data.Search));
  } catch (e: any) {}
}
export const fetchDashboardDetailAction = createAction<any>(
  'fetchDashboardDetail',
);
export function* dashboardSaga() {
  yield takeEvery(fetchDashboardDetailAction.type, fetchDashboardDetail);
}

export default dashboardSaga;
