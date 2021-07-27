import { makeStyles } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';

const appStyles = makeStyles((theme) => ({
  wrapper: {
    maxWidth: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 0,
    backgroundColor: deepPurple[800],
    color: theme.palette.primary.contrastText,
  },
}));

export default appStyles;
