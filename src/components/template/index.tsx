import React from 'react';
import { Layout } from 'antd';
import { Pages } from 'app/routes';
import { SideMenu } from 'components/template/sidemenu';
import { TopMenu } from 'components/template/topmenu';
import { Container } from 'components/template/container';
import { Footer } from 'components/template/footer';

import styles from './styles.module.less';

export const Template = () => {
  return (
    <Layout className={styles.layout}>
      <SideMenu />
      <Layout>
        <TopMenu />
        <Container>
          <Pages />
        </Container>
        <Footer />
      </Layout>
    </Layout>
  );
};
