import React from 'react';
import styles from './styles.module.less';

export type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <h3>{title}</h3>
    </div>
  );
};
