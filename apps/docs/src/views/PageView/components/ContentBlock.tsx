import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';

interface IContentBlockProps {
  variant?: 'primary' | 'secondary';
}

import Box from '@material-ui/core/Box';

const useStyles = makeStyles<Theme, IContentBlockProps>((theme) => ({
  root: {
    height: 300,
    backgroundColor: ({ variant }) =>
      variant ? theme.palette[variant].main : undefined,
  },
}));

const ContentBlock = ({ variant }: IContentBlockProps): JSX.Element => {
  const classes = useStyles({ variant });
  return <Box className={clsx(classes.root)} />;
};

export default ContentBlock;
