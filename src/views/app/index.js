import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';

const Dashboards = React.lazy(() => import(/* webpackChunkName: "dashboards" */ './dashboards'));
const Pages = React.lazy(() => import(/* webpackChunkName: "pages" */ './pages'));
const Applications = React.lazy(() => import(/* webpackChunkName: "applications" */ './applications'));
const Ui = React.lazy(() => import(/* webpackChunkName: "ui" */ './ui'));
const Menu = React.lazy(() => import(/* webpackChunkName: "menu" */ './menu'));
const Company = React.lazy(() => import(/* webpackChunkName: "blank-page" */ './company'));
const Ebooks = React.lazy(() => import(/* webpackChunkName: "blank-page" */ './ebooks'));
const Music = React.lazy(() => import(/* webpackChunkName: "blank-page" */ './music'));
const Video = React.lazy(() => import(/* webpackChunkName: "blank-page" */ './video'));
const UserAccount = React.lazy(() => import(/* webpackChunkName: "blank-page" */ './useraccount'));


const AuthRoute = ({ component: Component, CurrentWorkingCompany, authUser, ...rest }) => (
  
  <Route
  {...rest}
  render={props =>

  
    CurrentWorkingCompany === 'null' || false?
    (<Redirect to={{ pathname: '/app/company/welcomepage', state: { from: props.location } }} />)
    :(CurrentWorkingCompany === 'false'?
    (<Redirect to={{ pathname: '/app/company/mycompany', state: { from: props.location } }} />)
    :(<Component {...props} />))
    
  }
  />
  );

class App extends Component {
  render() {
    const { match } = this.props;

    return (
      <AppLayout>
        <div className="dashboard-wrapper">
          <Suspense fallback={<div className="loading" />}>
            <Switch>
              <AuthRoute
                path={`${match.url}/dashboards`}
                component={Dashboards}
                CurrentWorkingCompany={localStorage.getItem('CurrentWorkingCompany')}
                history={this.props.history}
              />
              <AuthRoute
                path={`${match.url}/applications`}
                component={Applications}
                CurrentWorkingCompany={localStorage.getItem('CurrentWorkingCompany')}
                history={this.props.history}
              />
              <AuthRoute
                path={`${match.url}/pages`}
                component={Pages}
                CurrentWorkingCompany={localStorage.getItem('CurrentWorkingCompany')}
                history={this.props.history}
              />
              <AuthRoute
                path={`${match.url}/ui`}
                component={Ui}
                CurrentWorkingCompany={localStorage.getItem('CurrentWorkingCompany')}
                history={this.props.history}
              />
              <AuthRoute
                path={`${match.url}/menu`}
                component={Menu}
                CurrentWorkingCompany={localStorage.getItem('CurrentWorkingCompany')}
                history={this.props.history}
              />
              <AuthRoute
                path={`${match.url}/ebooks`}
                component={Ebooks}
                CurrentWorkingCompany={localStorage.getItem('CurrentWorkingCompany')}
                history={this.props.history}
              />
              <AuthRoute
                path={`${match.url}/music`}
                component={Music}
                CurrentWorkingCompany={localStorage.getItem('CurrentWorkingCompany')}
                history={this.props.history}
              />
              <AuthRoute
                path={`${match.url}/video`}
                component={Video}
                CurrentWorkingCompany={localStorage.getItem('CurrentWorkingCompany')}
                history={this.props.history}
              />
              <Route
                path={`${match.url}/company`}
                render={props => <Company {...props} />}
              />
              <Route
                path={`${match.url}/useraccount`}
                render={props => <UserAccount {...props} />}
              />
              <Redirect to="/error" />
            </Switch>
          </Suspense>
        </div>
      </AppLayout>
    );
  }
}
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(App)
);
