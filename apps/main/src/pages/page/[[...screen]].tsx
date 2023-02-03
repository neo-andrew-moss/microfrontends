import React from 'react';
import { useRouter } from 'next/router';

import thatScreen from '../../views/PageView/that-screen';
import thisScreen from '../../views/PageView/this-screen';

export interface PageServerSideProps {
  metadata: unknown;
}

export enum ScreenRoutes {
  this = 'this',
  that = 'that',
  invalid = 'invalid',
}

export const routeToModuleMap: Record<
  string,
  React.VFC<PageServerSideProps>
> = {
  [ScreenRoutes.this]: thisScreen,
  [ScreenRoutes.that]: thatScreen,
  [ScreenRoutes.invalid]: thatScreen,
};

const Screen: React.VFC<PageServerSideProps> = (props) => {
  const router = useRouter();
  const { screen } = router.query;
  const route = screen?.[0];

  const routeName =
    typeof route === 'string' &&
    Object.values(ScreenRoutes).includes(route as ScreenRoutes)
      ? route
      : ScreenRoutes.invalid;

  const Module = routeToModuleMap[routeName];

  return <Module metadata={props.metadata} />;
};

export async function getServerSideProps() {
  const getData = () => Promise.resolve('something');

  const _data = await getData();

  return { props: { metadata: _data } };
}

export default Screen;
