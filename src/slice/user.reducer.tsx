import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// import { UserModel } from '../interface/user.interface';
// import { resetAllData } from '../sagas/common.saga';

const userDetails: any = {
  username: 'remark',
  password: 'testtest',
  isLogin: false,
};

const initialState = {
  user: userDetails,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.user.isLogin = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const {setIsLogin} = userSlice.actions;
