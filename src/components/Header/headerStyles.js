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
    padding: theme.spacing(5, 4),
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
  statusNotificationOn: {
    marginLeft: theme.spacing(2),
    color: green[500],
  },
  statusNotificationOff: {
    marginLeft: theme.spacing(2),
    color: red[500],
  },
  statusIcon: {
    marginRight: theme.spacing(0.5),
    color: theme.palette.secondary.dark,
  },
  statusNotificationIcon: {
    marginLeft: theme.spacing(1.5),
    color: theme.palette.secondary.dark,
  },
  statusIconOffline: {
    fontSize: '1.6rem',
    marginRight: theme.spacing(0.5),
    color: red[500],
    animationName: '$blinker',
    animationDuration: '2s',
    animationTimingFunction: 'ease-in-out;',
    animationIterationCount: 'infinite',
  },
  statusIconOnline: {
    fontSize: '1.6rem',
    marginRight: theme.spacing(0.5),
    color: green[500],
    animationName: '$blinker',
    animationDuration: '2s',
    animationTimingFunction: 'ease-in-out;',
    animationIterationCount: 'infinite',
  },
  '@keyframes blinker': {
    from: { opacity: 0 },
    '30%': { opacity: 0.85 },
    '50%': { opacity: 1 },
    to: { opacity: 0 },
  },
  menuListItems: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(3, 0),
  },
  menuListIconOn: {
    color: green[500],
  },
  menuListIconOff: {
    color: red[500],
  },
}));

export default headerStyles;
