import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const MyEbooks = React.lazy(() =>
  import(/* webpackChunkName: "application-todo" */ './myebooks')
);
const AddEbook = React.lazy(() =>
  import(/* webpackChunkName: "application-survey" */ './addbook')
);


const Applications = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/myebooks`} />
      <Route path={`${match.url}/myebooks`} render={props => <MyEbooks {...props} />} isExact/>
      <Route path={`${match.url}/addbook`} render={props => <AddEbook {...props} />} isExact />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Applications;
