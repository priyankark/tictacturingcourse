import React from 'react';
import {Route,IndexRoute} from 'react-router';
import Template from '../containers/template';
import PropTypes from 'prop-types';
import Home from '../containers/home';
import Profile from '../containers/profile';


const createRoutes=()=>{
  return(
    <Route path="/" component={Template}>
      <IndexRoute component={Home} />
      <Route path={"/profile"} component={Profile} />
    </Route>
  )
}

const Routes=createRoutes();
export default Routes;