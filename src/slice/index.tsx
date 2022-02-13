import {userReducer} from './user.reducer';
import {dashboardReducer} from './dashboard.reducer';

const allReducers = {
  user: userReducer,
  dashboard: dashboardReducer,
};
export default allReducers;
