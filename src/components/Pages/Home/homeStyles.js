import { makeStyles } from '@material-ui/core/styles';
import { yellow, grey } from '@material-ui/core/colors';

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
  homeIconEnabled: {
    fontSize: '3.8em',
    display: 'inline-block',
    color: yellow[700],
  },
  homeIconDisabled: {
    fontSize: '3.8em',
    display: 'inline-block',
    color: grey[500],
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
}));

export default homeStyles;
