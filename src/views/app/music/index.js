import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const MyMusic = React.lazy(() =>
  import(/* webpackChunkName: "application-todo" */ './mymusic')
);
const AddMusic = React.lazy(() =>
  import(/* webpackChunkName: "application-survey" */ './addmusic')
);


const Applications = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/mymusic`} />
      <Route path={`${match.url}/mymusic`} render={props => <MyMusic {...props} />} isExact/>
      <Route path={`${match.url}/addmusic`} render={props => <AddMusic {...props} />} isExact />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Applications;
