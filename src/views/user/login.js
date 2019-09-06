import React, { Component } from "react";
import { Row, Card, CardBody, CardTitle, Form, Label, Input, Spinner } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  loginUser, LOGIN_USER,
  LOGIN_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  LOGOUT_USER
} from "../../redux/actions";
import { configureStore } from "../../redux/store";
import { Wizard, Steps, Step } from 'react-albus';
import { BottomNavigationNext } from "../../components/wizard/BottomNavigation";
import { Colxx } from "../../components/common/CustomBootstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { withRouter, Redirect } from 'react-router-dom';
var store = configureStore()

class Login extends Component {

  constructor(props) {
    super(props);
    this.onClickNext = this.onClickNext.bind(this);

    this.state = {
      email: "",
      password: "",
      token: '',
      loading: '',
      ResStatusOnLogin: '',
    };
  }

  /*Handle field change*/
  changeHandler = input => e => {
    this.setState({ [input]: e.target.value });
  }

  /*Go Next*/
  onClickNext(goToNext, steps, step) {

    let user = {
      email: this.state.email, password: this.state.password
    }
    if (steps.length - 1 <= steps.indexOf(step)) {
      return;
    }
    if (steps.indexOf(step) === 0) {

      store.subscribe(() => {
        this.setState({ loading: store.getState().authUser.loading });
      });

      store.dispatch(loginUser(user, this.props.history));
      goToNext();
    }

    if (steps.indexOf(step) === 1) {
      window.location.reload();
    }
  }


  render() {
    return (
      <Row className="h-100">
        <Colxx xxs="12" md="10" className="mx-auto my-auto">
          <Card className="auth-card">
            <div className="position-relative image-side ">
              <p className="text-white h2">MAGIC IS IN THE DETAILS</p>
              <p className="white mb-0">
                Please use your credentials to login.
                <br />
                If you are not a member, please{" "}
                <NavLink to={`/register`} className="white">register</NavLink>.
              </p>
            </div>
            <div className="form-side">
              <NavLink to={`/`} className="white">
                <span className="logo-single mb-5 pb-5" />
              </NavLink>
              <CardTitle className="mb-4">
                <IntlMessages id="user.login-title" />
              </CardTitle>
              <Card>
                <CardBody className="wizard wizard-default">
                  <Wizard>
                    <Steps>
                      <Step id="step1">
                        <Form>
                          <Label className="form-group has-float-label mb-4">
                            <Input type="email" defaultValue={this.state.email}
                              onChange={this.changeHandler('email')} />
                            <IntlMessages id="user.email" />
                          </Label>
                          <Label className="form-group has-float-label mb-4">
                            <Input type="password"
                              onChange={this.changeHandler('password')} />
                            <IntlMessages id="user.password" />
                          </Label>
                          <div className="d-flex justify-content-between align-items-center">
                            <NavLink to={`/forgot-password`}>
                              <IntlMessages id="user.forgot-password-question" />
                            </NavLink>
                          </div>
                        </Form>
                      </Step>
                      <Step id="step2">
                        <div className="wizard-basic-step text-center pt-3">
                          {(this.state.loading) ? (
                            <div>
                              <Spinner color="primary" className="mb-1" />
                              <p><IntlMessages id="message.wait" /></p>
                            </div>
                          ) : (<div>
                            <div>
                              <h2 className="mb-2"><IntlMessages id="register.error.text" /></h2>
                              <p><IntlMessages id="register.error.tryagain" /></p>
                            </div>
                          </div>)}
                        </div>
                      </Step>
                    </Steps>
                    <BottomNavigationNext onClickNext={this.onClickNext} className={"justify-content-center "} nextLabel={'Login'} />
                  </Wizard>
                </CardBody>
              </Card>
            </div>
          </Card>
        </Colxx>
      </Row>
    );
  }
}


const mapStateToProps = ({ authUser }) => {
  const { user, loading } = authUser;
  return { user, loading };
};

export default withRouter(connect(
  mapStateToProps,
  {
    loginUser
  }
)(Login));


