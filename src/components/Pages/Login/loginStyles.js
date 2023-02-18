import { makeStyles } from '@material-ui/core/styles';

const loginStyles = makeStyles((theme) => ({
  loginContainer: {
    maxWidth: 260,
    margin: 'auto',
    padding: theme.spacing(1, 0, 4, 0),
  },
  loginWrapper: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  loginBack: {
    position: 'absolute',
    bottom: 12,
    right: 20,
  },
  loginPin: {
    width: '100%',
    background: 'none',
    marginBottom: theme.spacing(4),
  },
  loginLogo: {
    opacity: '0.8',
    width: 50,
    margin: '1rem auto 0.3rem auto',
    [theme.breakpoints.up('321')]: {
      width: 130,
    },
  },
  loginCode: {
    width: 130,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 auto',
  },
  loginDotEmtpy: {
    fontSize: '1.4em',
    margin: theme.spacing(0.35),
  },
  loginDotFull: {
    fontSize: '1.8em',
  },
  loginKey: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default loginStyles;
