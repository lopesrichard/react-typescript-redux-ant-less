import React from 'react';
import { Col, Layout, Row } from 'antd';

import styles from './styles.module.less';

const { Header } = Layout;

export const TopMenu = () => {
  return (
    <Header className={styles.header}>
      <Row justify="end" gutter={20}>
        <Col>Login</Col>
      </Row>
    </Header>
  );
};
