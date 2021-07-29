import { makeStyles } from '@material-ui/core/styles';

const footerStyles = makeStyles((theme) => ({
  footerWrapper: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: theme.spacing(1.5),
  },
}));

export default footerStyles;
