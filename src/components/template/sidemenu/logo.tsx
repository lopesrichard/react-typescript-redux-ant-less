import React from 'react';
import { Image } from 'antd';
import styles from './styles.module.less';
import { Link } from 'components/router/link';

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <Image src="/images/logo.png" width={100} preview={false} />
      </Link>
    </div>
  );
};
