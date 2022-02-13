import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// import { UserModel } from '../interface/user.interface';
// import { resetAllData } from '../sagas/common.saga';

const initialState = {
  dashboard: {movies: []},
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialState,
  reducers: {
    setDashboardData: (state, action: PayloadAction<any>) => {
      state.dashboard.movies = action.payload;
    },
  },
});

export const dashboardReducer = dashboardSlice.reducer;
export const {setDashboardData} = dashboardSlice.actions;
