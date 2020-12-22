import React from 'react';
import { Layout } from 'antd';

import styles from './styles.module.less';

export const Footer = () => {
  return <Layout.Footer className={styles.footer}>Copyright © 2020</Layout.Footer>;
};
