import React from 'react';
import { Layout } from 'antd';
import { Pages } from 'app/routes';
import { SideMenu } from 'components/template/sidemenu';

import styles from './styles.module.less';

const { Header, Footer, Content } = Layout;

export const Template = () => {
  return (
    <Layout className={styles.layout}>
      <SideMenu />
      <Layout>
        <Header>Header</Header>
        <Content>
          <Pages />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};
