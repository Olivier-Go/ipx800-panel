// == Import npm
import React from 'react';

// == Import components
import { yellow, red } from '@material-ui/core/colors';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Zoom from '@material-ui/core/Zoom';
import Badge from '@material-ui/core/Badge';

// == Import styles
import homeStyles from './homeStyles';

// == Composant
const Home = () => {
  const classes = homeStyles();

  return (
    <>
      <Grid container className={classes.homeContainer}>
        <Grid item xs={12}>
          <Zoom in>
            <Grid container className={classes.homeWrapper} spacing={3}>
              {/* {[0, 1, 2].map((value) => (
                <Grid key={value} item>
                  <Paper className={classes.homeBtnWrapper} elevation={5}>
                    <Button classes={{ root: classes.homeBtn, label: classes.homeBtnLabel }} size="large">
                      <EmojiObjectsIcon className={classes.homeIcon} color="disabled" />
                      <Typography color="textSecondary" variant="caption">
                        Cours
                      </Typography>
                    </Button>
                  </Paper>
                </Grid>
              ))} */}
              <Grid item>
                <Paper className={classes.homeBtnWrapper} elevation={5}>
                  <Button disableElevation classes={{ root: classes.homeBtn, label: classes.homeBtnLabel }} size="large">
                    <EmojiObjectsIcon className={classes.homeIcon} color="disabled" />
                    <Typography color="textSecondary" variant="caption">
                      Pré
                    </Typography>
                  </Button>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.homeBtnWrapper} elevation={5}>
                  <Button disableElevation classes={{ root: classes.homeBtn, label: classes.homeBtnLabel }} size="large">
                    <EmojiObjectsIcon className={classes.homeIcon} style={{ color: yellow[700] }} />
                    <Typography color="textPrimary" variant="caption">
                      Piscine
                    </Typography>
                  </Button>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.homeBtnWrapper} elevation={5}>
                  <Button disableElevation classes={{ root: classes.homeBtn, label: classes.homeBtnLabel }} size="large">
                    <EmojiObjectsIcon className={classes.homeIcon} color="disabled" />
                    <Typography color="textSecondary" variant="caption">
                      Cours
                    </Typography>
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </Zoom>
          <Zoom in style={{ transitionDelay: '300ms' }}>
            <Grid container className={classes.homeWrapper} spacing={3}>
              <Button
                className={classes.homeAlarmBtn}
                style={{ backgroundColor: red[800] }}
                startIcon={<NotificationsActiveIcon className={classes.homeAlarmIcon} />}
              >
                <Typography variant="subtitle2" color="secondary">
                  Alarme activée
                </Typography>
                <Badge
                  color="primary"
                  badgeContent={3}
                  max={9}
                  className={classes.homeAlarmBadge}
                >
                  <Typography color="secondary" className={classes.homeAlarmBadgeTxt}>
                    Déclenchements
                  </Typography>
                </Badge>
              </Button>
            </Grid>
          </Zoom>
        </Grid>
      </Grid>
    </>
  );
};

// == Export
export default Home;
