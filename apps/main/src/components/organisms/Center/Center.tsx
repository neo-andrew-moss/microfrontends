import React from 'react';
import { Grid } from '@material-ui/core';

interface ICenterProps {
  [_: string]: unknown;
}

const Center = ({
  children,
  ...rest
}: React.PropsWithChildren<ICenterProps>): JSX.Element => (
  <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
  >
    <Grid item xs={3}>
      {children}
    </Grid>
  </Grid>
);

export default Center;
