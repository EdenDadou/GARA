import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Company = React.lazy(() =>
  import(/* webpackChunkName: "application-todo" */ './mycompany')
);
const NewCompany = React.lazy(() =>
  import(/* webpackChunkName: "application-survey" */ './newcompany')
);
const EditCompany = React.lazy(() =>
  import(/* webpackChunkName: "application-survey" */ './editcompany')
);
const WelcomePage = React.lazy(() =>
  import(/* webpackChunkName: "application-survey" */ './welcomepage')
);


const Applications = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/mycompany`} />
      <Route path={`${match.url}/mycompany`} render={props => <Company {...props} />} isExact/>
      <Route path={`${match.url}/newcompany`} render={props => <NewCompany {...props} />} isExact />
      <Route path={`${match.url}/editcompany`} render={props => <EditCompany {...props} />} isExact />
      <Route path={`${match.url}/welcomepage`} render={props => <WelcomePage {...props} />} isExact />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Applications;
