import { makeStyles } from '@material-ui/core/styles';

const homeStyles = makeStyles((theme) => ({
  homeContainer: {
    margin: 'auto 0',
  },
  homeWrapper: {
    maxWidth: '100%',
    padding: theme.spacing(4, 1, 5, 1),
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeBtnWrapper: {
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: 12,
  },
  homeBtn: {
    height: 92,
    width: 92,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 12,
  },
  homeBtnLabel: {
    flexDirection: 'column',
  },
  homeIcon: {
    fontSize: '3.5em',
    display: 'inline-block',
  },
  homeAlarmBtn: {
    color: theme.palette.secondary.main,
    height: 92,
    width: 326,
    borderRadius: 12,
  },
  homeAlarmIcon: {
    color: theme.palette.secondary.main,
    height: 50,
    width: 50,
  },
  homeAlarmBadge: {
    position: 'absolute',
    bottom: 5,
    right: 20,
    width: '5.9rem',
  },
  homeAlarmBadgeTxt: {
    fontSize: '0.8em',
    textTransform: 'capitalize',
  },
}));

export default homeStyles;
