import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const Copyright = () => {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

interface IFooterProps {
  description: string;
  title: string;
}

const Footer = (props: IFooterProps) => {
  const { description, title } = props;

  return (
    <Box component="footer">
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center" component="p">
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
