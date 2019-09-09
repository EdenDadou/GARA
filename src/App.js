import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import AppLocale from './lang';
import ColorSwitcher from './components/common/ColorSwitcher';
import NotificationContainer from './components/common/react-notifications/NotificationContainer';
import { isMultiColorActive } from './constants/defaultValues';
import { getDirection } from './helpers/Utils';
import { VerifToken, DeveloperInfo} from './services/Developer';




const ViewMain = React.lazy(() =>
  import(/* webpackChunkName: "views" */ './views')
);
const ViewApp = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ './views/app')
);
const ViewUser = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ './views/user')
);
const ViewError = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ './views/error')
);




//if localStorage.getItem('Allow')  is true, display component, else redirect to login
const AuthRoute = ({ component: Component, authUser, ...rest }) => (

  <Route
    {...rest}
    render={props =>
      localStorage.getItem('Allow') ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: '/user/login',
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

class App extends Component {
  constructor(props) {
    super(props);
    const direction = getDirection();
    if (direction.isRtl) {
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }
  }  

  componentWillMount(){

  //On mounting, after verification that we stock a token
    if(localStorage.getItem('token')!==null){
      //Send it to API for validity verification
      VerifToken(localStorage.getItem('token'))
      .then(res => {
        if(res.status === 200){
          //If res.status === 200, then change Allow value to true
          localStorage.setItem('Allow', true)
        }else{
          localStorage.setItem('Allow', false)
        }
      })
      .then(error => {
        localStorage.setItem('Allow', false)
      })

      
    }
    DeveloperInfo(localStorage.getItem('token'))
    .then(res => console.log(res))
    .catch(error => console.log(error))
  }
  


  render() {
    const { locale } = this.props;
    const currentAppLocale = AppLocale[locale];
    return (

      <div className="h-100">
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <React.Fragment>
            <NotificationContainer />
            {isMultiColorActive && <ColorSwitcher />}
            <Suspense fallback={<div className="loading" />}>
              <Router>
                <Switch>
                  {/* authUser stock Login from localstorage */}
                  <AuthRoute
                    path="/app"
                    component={ViewApp}
                  />
                  <Route
                    path="/user"
                    render={props => <ViewUser {...props} />}
                  />
                  <Route
                    path="/error"
                    exact
                    render={props => <ViewError {...props} />}
                  />
                  <Route
                    path="/"
                    exact
                    render={props => <ViewMain {...props} />}
                  />
                  <Redirect to="/error" />
                </Switch>
              </Router>
            </Suspense>
          </React.Fragment>
        </IntlProvider>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, settings }) => {
  const { user: loginUser } = authUser;
  const { locale } = settings;
  return { loginUser, locale };
};
const mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
