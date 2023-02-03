import React from 'react';
import { Container as _Container } from '@material-ui/core';

interface IContainerProps {
  [_: string]: unknown;
}

const Container = ({
  children,
  ...rest
}: React.PropsWithChildren<IContainerProps>): JSX.Element => (
  <_Container maxWidth="lg" {...rest}>
    {children}
  </_Container>
);

export default Container;
