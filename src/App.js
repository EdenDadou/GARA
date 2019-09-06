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
import { withCookies } from 'react-cookie';
import { configureStore } from "./redux/store";
import { loginUserSuccess } from "./redux/actions";



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




//if authUser (Login in localstorage) is true, display component, else redirect to login
const AuthRoute = ({ component: Component, authUser, ...rest }) => (

  <Route
    {...rest}
    render={props =>
      authUser ? (
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
    this.state = {
      AuthUser : true,
      Allow : ''
    }
    const direction = getDirection();
    if (direction.isRtl) {
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }
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
                    authUser={this.state.AuthUser}
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

const mapStateToProps = ({ settings }, state) => {
  const { user } = state;
  const { locale } = settings;
  return { user, locale };
};

// const mapStateToProps = ({state, settings}) => {
//   const { locale } = settings;
//   return { user: state.user, locale  };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    loginUserSuccess: () => {
      dispatch(loginUserSuccess());
    }
  }
}


export default withCookies(connect(mapStateToProps, mapDispatchToProps)(App));

