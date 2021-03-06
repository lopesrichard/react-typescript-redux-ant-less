import React from 'react';
import { Dashboard } from 'components/dashboard';
import { Header } from 'components/pages/header';
import { Lang } from 'lang';
import { Line, Pie } from '@ant-design/charts';

const t = Lang.create('features.home');

export const Home = () => {
  return (
    <div>
      <Header title={t('title')} />
      <Dashboard
        cards={[
          {
            sm: 8,
            title: t('dashboard.card.title'),
            content: (
              <Line
                data={[
                  { year: '1991', value: 3 },
                  { year: '1992', value: 4 },
                  { year: '1993', value: 3.5 },
                  { year: '1994', value: 5 },
                  { year: '1995', value: 4.9 },
                  { year: '1996', value: 6 },
                  { year: '1997', value: 7 },
                  { year: '1998', value: 9 },
                  { year: '1999', value: 13 },
                ]}
                height={200}
                xField="year"
                yField="value"
                point={{ size: 5, shape: 'diamond' }}
              />
            ),
          },
          {
            sm: 8,
            title: t('dashboard.card.title'),
            content: (
              <Pie
                data={[
                  { year: '1991', value: 3 },
                  { year: '1992', value: 4 },
                  { year: '1993', value: 3.5 },
                  { year: '1994', value: 5 },
                ]}
                height={200}
                appendPadding={10}
                angleField="value"
                colorField="year"
              />
            ),
          },
          {
            sm: 8,
            title: t('dashboard.card.title'),
            content: (
              <p>
                ============================================================
                ============================================================
                ============================================================
                ============================================================
                ============================================================
                ============================================================
              </p>
            ),
          },
          {
            sm: 8,
            title: t('dashboard.card.title'),
            content: (
              <p>
                ============================================================
                ============================================================
                ============================================================
                ============================================================
                ============================================================
                ============================================================
              </p>
            ),
          },
          {
            sm: 8,
            title: t('dashboard.card.title'),
            content: (
              <p>
                ============================================================
                ============================================================
                ============================================================
                ============================================================
                ============================================================
                ============================================================
              </p>
            ),
          },
          {
            sm: 8,
            title: t('dashboard.card.title'),
            content: (
              <p>
                ============================================================
                ============================================================
                ============================================================
                ============================================================
                ============================================================
                ============================================================
              </p>
            ),
          },
          {
            sm: 8,
            title: t('dashboard.card.title'),
            content: (
              <p>
                ============================================================
                ============================================================
                ============================================================
                ============================================================
                ============================================================
                ============================================================
              </p>
            ),
          },
          {
            sm: 8,
            title: t('dashboard.card.title'),
            content: (
              <p>
                ============================================================
                ============================================================
                ============================================================
                ============================================================
                ============================================================
                ============================================================
              </p>
            ),
          },
          {
            sm: 8,
            title: t('dashboard.card.title'),
            content: (
              <p>
                ============================================================
                ============================================================
                ============================================================
                ============================================================
                ============================================================
                ============================================================
              </p>
            ),
          },
        ]}
      />
    </div>
  );
};
