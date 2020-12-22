import React, { FunctionComponent } from 'react';
import * as Ant from 'antd';
import { Header, HeaderProps } from 'components/dashboard/card/header';
import { ColProps } from 'antd/lib/col';
import styles from './styles.module.less';

export type CardProps = HeaderProps & {
  xs?: ColProps['xs'];
  sm?: ColProps['sm'];
  md?: ColProps['md'];
  lg?: ColProps['lg'];
  xl?: ColProps['xl'];
  xxl?: ColProps['xxl'];
};

export const Card: FunctionComponent<CardProps> = ({ children, title, xs, sm, md, lg, xl, xxl }) => {
  return (
    <Ant.Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} className={styles.container}>
      <Ant.Card bodyStyle={{ padding: 0 }}>
        <Ant.Collapse collapsible="header" ghost>
          <Ant.Collapse.Panel header={<Header title={title} />} key={1}>
            {children}
          </Ant.Collapse.Panel>
        </Ant.Collapse>
      </Ant.Card>
    </Ant.Col>
  );
};
