// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import components
import { yellow, red } from '@material-ui/core/colors';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Zoom from '@material-ui/core/Zoom';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

// == Import styles
import homeStyles from './homeStyles';

const StyledBadge = withStyles({
  colorSecondary: {
    backgroundColor: yellow[700],
  },
})(Badge);

// == Composant
const Home = ({
  fetchStatus,
  fetchOutputs,
  outputs,
  setOutput,
}) => {
  const classes = homeStyles();

  useEffect(() => {
    fetchStatus();
    fetchOutputs();
  }, []);

  return (
    <>
      <Grid container className={classes.homeContainer}>
        <Grid item xs={12}>
          <Zoom in>
            <Grid container className={classes.homeWrapper} spacing={3}>
              <Grid item onClick={() => setOutput(0)}>
                <StyledBadge color="secondary" overlap="circular" invisible={!outputs.OUT1} variant="dot">
                  <Paper className={classes.homeBtnWrapper} elevation={5}>
                    <Button disableElevation classes={{ root: classes.homeBtn, label: classes.homeBtnLabel }} size="large">
                      <EmojiObjectsIcon className={`${!outputs.OUT1 ? classes.homeIconDisabled : classes.homeIconEnabled}`} />
                      <Typography color="textPrimary" variant="caption">
                        Pré
                      </Typography>
                    </Button>
                  </Paper>
                </StyledBadge>
              </Grid>
              <Grid item onClick={() => setOutput(1)}>
                <StyledBadge color="secondary" overlap="circular" invisible={!outputs.OUT2} variant="dot">
                  <Paper className={classes.homeBtnWrapper} elevation={5}>
                    <Button disableElevation classes={{ root: classes.homeBtn, label: classes.homeBtnLabel }} size="large">
                      <EmojiObjectsIcon className={`${!outputs.OUT2 ? classes.homeIconDisabled : classes.homeIconEnabled}`} />
                      <Typography color="textPrimary" variant="caption">
                        Piscine
                      </Typography>
                    </Button>
                  </Paper>
                </StyledBadge>
              </Grid>
              <Grid item onClick={() => setOutput(2)}>
                <StyledBadge color="secondary" overlap="circular" invisible={!outputs.OUT3} variant="dot">
                  <Paper className={classes.homeBtnWrapper} elevation={5}>
                    <Button disableElevation classes={{ root: classes.homeBtn, label: classes.homeBtnLabel }} size="large">
                      <EmojiObjectsIcon className={`${!outputs.OUT3 ? classes.homeIconDisabled : classes.homeIconEnabled}`} />
                      <Typography color="textPrimary" variant="caption">
                        Cours
                      </Typography>
                    </Button>
                  </Paper>
                </StyledBadge>
              </Grid>
            </Grid>
          </Zoom>
          <Zoom in style={{ transitionDelay: '300ms' }}>
            <Grid container className={classes.homeWrapper} spacing={3}>
              <Button
                className={classes.homeAlarmBtn}
                style={{ backgroundColor: red[`${!outputs.OUT4 ? 500 : 800}`] }}
                startIcon={
                  outputs.OUT4 === 1 ? (
                    <LockIcon className={classes.homeAlarmIcon} />
                  ) : (
                    <LockOpenIcon className={classes.homeAlarmIcon} />
                  )
                }
                onClick={() => setOutput(3)}
              >
                <Typography variant="subtitle2" color="secondary">
                  Alarme {outputs.OUT4 ? ('activée') : ('désactivée')}
                </Typography>
              </Button>
            </Grid>
          </Zoom>
        </Grid>
      </Grid>
    </>
  );
};

Home.propTypes = {
  fetchStatus: PropTypes.func.isRequired,
  fetchOutputs: PropTypes.func.isRequired,
  outputs: PropTypes.object.isRequired,
  setOutput: PropTypes.func.isRequired,
};

// == Export
export default Home;
