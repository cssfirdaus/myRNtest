import React, {useEffect, useState} from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {useAppDispatch, useAppSelector} from './hooks';
import Login from './screens/login';
import Dashboard from './screens/dashboard';
const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <React.Fragment>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="dashboard" component={Dashboard} />
      </Stack.Navigator>
    </React.Fragment>
  );
};
export default Navigation;
