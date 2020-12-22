import React, { FunctionComponent } from 'react';
import { Layout } from 'antd';
import styles from './styles.module.less';

const { Content } = Layout;

export const Container: FunctionComponent = ({ children }) => {
  return <Content className={styles.container}>{children}</Content>;
};
