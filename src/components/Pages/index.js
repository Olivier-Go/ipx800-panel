import React, { useState } from 'react';
import {
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';

// == Import components
import Home from 'src/containers/Pages/Home';
import Login from 'src/containers/Pages/Login';


const Pages = () => {
  const { pathname } = useLocation();
  const [loader, setLoader] = useState(true);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
};


export default Pages;
