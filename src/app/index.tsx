/** @format */

import 'assets/less/global.less';

import React from 'react';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import { Routes } from 'app/routes';
import { store } from 'app/store';

export const App = () => (
  <Provider store={store}>
    <ConfigProvider>
      <Routes />
    </ConfigProvider>
  </Provider>
);
