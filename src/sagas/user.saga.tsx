import {createAction} from '@reduxjs/toolkit';
import {call, put, select, takeEvery} from 'redux-saga/effects';
import {setIsLogin} from '../slice/user.reducer';

export function* fetchUserDetail(action?: any): Generator<any> {
  try {
  } catch (e: any) {}
}
export const fetchUserDetailAction = createAction<any>('fetchUserDetailAction');
export function* userSaga() {
  yield takeEvery(fetchUserDetailAction.type, fetchUserDetail);
}

export default userSaga;
