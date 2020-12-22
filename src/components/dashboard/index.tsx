import React, { FunctionComponent } from 'react';
import { Row } from 'antd';
import { Card, CardProps } from 'components/dashboard/card';
import { Lang } from 'lang';
import styles from './styles.module.less';

const t = Lang.create('components.dashboard');

export type Card = CardProps & {
  title: string;
  content: JSX.Element;
};

export type DashboardProps = {
  cards: Card[];
};

export const Dashboard: FunctionComponent<DashboardProps> = ({ cards }) => {
  return (
    <Row className={styles.row} gutter={20}>
      {cards.map(({ content, ...props }) => (
        <Card {...props}>{content}</Card>
      ))}
    </Row>
  );
};
