import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { purple, pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: purple[500],
      light: purple[400],
    },
    secondary: {
      main: pink[500],
      light: pink[400],
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
