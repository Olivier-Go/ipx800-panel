import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';

const headerStyles = makeStyles((theme) => ({
  menuBurger: {
    marginRight: theme.spacing(2),
  },
  menuClose: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(0),
  },
  menuList: {
    padding: theme.spacing(5),
    minWidth: '75vw',
    [theme.breakpoints.up('sm')]: {
      minWidth: '50vw',
    },
    [theme.breakpoints.up('md')]: {
      minWidth: '20vw',
    },
  },
  status: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  statusIconOffline: {
    marginRight: theme.spacing(0.5),
    color: red[500],
  },
  statusIconOnline: {
    marginRight: theme.spacing(0.5),
    color: green[500],
    animationName: '$blinker',
    animationDuration: '2s',
    animationTimingFunction: 'ease-in-out;',
    animationIterationCount: 'infinite',
  },
  '@keyframes blinker': {
    from: { opacity: 0 },
    '50%': { opacity: 0.8 },
    to: { opacity: 0 },
  },
}));

export default headerStyles;
