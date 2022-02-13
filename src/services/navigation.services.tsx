import {CommonActions} from '@react-navigation/native';

import React from 'react';

class NavigationServices {
  public navigationRef: any = React.createRef();
  public keyboardHandlingEnabled = true;

  getCurrentNavigation() {
    return this.navigationRef.current;
  }

  navigate = (page: string, screen?: string, params?: any) => {
    if (params) {
      this.getCurrentNavigation().navigate(page, params);
    } else if (screen && screen !== '') {
      this.navigateTo(page, screen);
    } else {
      this.navigateToScreen(page);
    }
  };

  navigateTo = (page: string, screen: string, extraProps: any = {}) => {
    this.getCurrentNavigation()?.navigate(page, {
      screen: screen,
      ...extraProps,
    });
  };

  navigateToScreen = (screen: string) => {
    this.getCurrentNavigation()?.navigate(screen, {});
  };

  goBack = () => {
    this.getCurrentNavigation()?.goBack();
  };

  getRouteName() {
    return this.getCurrentNavigation()?.getCurrentRoute()?.name;
  }
  push = (route: any) => {
    const commonAction = CommonActions.reset({
      index: 0,
      routes: [
        {
          name: route.page ? route.page : route,
          state: {
            routes: [{name: route.screen}],
          },
        },
      ],
    });
    this.getCurrentNavigation()?.dispatch(commonAction);
  };
}

export const navigationServices = new NavigationServices();
