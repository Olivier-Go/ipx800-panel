// == Import npm
import React, { useState } from 'react';

// == Import components
import { blueGrey } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import BackspaceIcon from '@material-ui/icons/Backspace';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import IconButton from '@material-ui/core/IconButton';

// == Import styles
import IPX800Logo from '../../../assets/favicon.png';
import loginStyles from './loginStyles';

// == Composant
const Login = () => {
  const classes = loginStyles();
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const pinInputs = [1, 2, 3, 4];
  const [userInputs, setUserInputs] = useState(0);

  return (
    <>
      <Grid container className={classes.loginContainer}>
        <Grid item xs={12}>
          <Grid container className={classes.loginWrapper} spacing={3}>
            <Card className={classes.loginPin} elevation={0}>
              <CardMedia
                component="img"
                alt="IPX800 Logo"
                className={classes.loginLogo}
                image={IPX800Logo}
                title="IPX800 Panel"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" color="secondary" component="h1" align="center">
                  IPX800 Panel
                </Typography>
                <Typography variant="body2" color="secondary" component="p" align="center">
                  Saisir le code d'accès
                </Typography>
              </CardContent>
              <CardActions>
                <div className={classes.loginCode}>
                  {pinInputs.map((value) => (
                    (userInputs >= value) ? (
                      <FiberManualRecordIcon key={value} color="secondary" className={classes.loginDotFull} />
                    ) : (
                      <RadioButtonUncheckedIcon key={value} color="secondary" className={classes.loginDotEmtpy} />
                    )
                  ))}
                </div>
              </CardActions>
            </Card>
            {numbers.map((value) => (
              <Grid key={value} item xs={4}>
                <Fab size="large" color="secondary" aria-label="number" onClick={() => setUserInputs(userInputs + 1)}>
                  <Typography variant="h5">
                    {value}
                  </Typography>
                </Fab>
              </Grid>
            ))}
            <IconButton aria-label="back" className={classes.loginBack}>
              <BackspaceIcon style={{ color: blueGrey[300] }} fontSize="large" onClick={() => setUserInputs(userInputs - 1)} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

// == Export
export default Login;
