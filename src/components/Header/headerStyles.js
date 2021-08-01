import { makeStyles } from '@material-ui/core/styles';

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
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
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
  statusIcon: {
    marginRight: theme.spacing(0.5),
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
