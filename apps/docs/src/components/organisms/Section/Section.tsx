import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8, 8),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 8),
    },
  },
  fullWidth: {
    maxWidth: '100%',
  },
  disablePadding: {
    padding: 0,
  },
  narrow: {
    maxWidth: 800,
  },
}));

interface SectionProps {
  className?: string;
  children?: JSX.Element;
  narrow?: boolean;
  fullWidth?: boolean;
  disablePadding?: boolean;
  [_: string]: unknown;
}

const Section = ({
  children,
  fullWidth,
  narrow,
  disablePadding,
  className,
  ...rest
}: SectionProps): JSX.Element => {
  const classes = useStyles();

  return (
    <section
      className={clsx(
        'section',
        classes.root,
        fullWidth ? classes.fullWidth : {},
        narrow ? classes.narrow : {},
        disablePadding ? classes.disablePadding : {},
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Section;
