import React from 'react';
import { Link as ReactRouterLink, LinkProps, useParams } from 'react-router-dom';

export type DefaultRouteParams = {
  account: string;
};

export const Link = ({ to, ...props }: LinkProps) => {
  const params = useParams<DefaultRouteParams>();
  const account = params.account;
  return <ReactRouterLink to={`/${account + to}`} {...props} />;
};
