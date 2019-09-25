import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const MyVideo = React.lazy(() =>
  import(/* webpackChunkName: "application-todo" */ './myvideo')
);
const AddVideo = React.lazy(() =>
  import(/* webpackChunkName: "application-survey" */ './addvideo')
);


const Applications = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/myvideo`} />
      <Route path={`${match.url}/myvideo`} render={props => <MyVideo {...props} />} isExact/>
      <Route path={`${match.url}/addvideo`} render={props => <AddVideo {...props} />} isExact />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Applications;
