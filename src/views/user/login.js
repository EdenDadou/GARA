import React, { Component } from "react";
import { Row, Card, CardBody, CardTitle, Form, Label, Input, Spinner } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser, loginUserSuccess } from "../../redux/actions";
import { LoginDeveloper, VerifToken } from "../../services/Developer";
import { Wizard, Steps, Step } from 'react-albus';
import { BottomNavigationNext } from "../../components/wizard/BottomNavigation";
import { Colxx } from "../../components/common/CustomBootstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { Cookies } from 'react-cookie';
import { withRouter, Redirect } from 'react-router-dom';
const cookies = new Cookies()

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

  componentWillMount(){
   
    console.log(localStorage.getItem('Login'))
    if(localStorage.getItem('Login')){
      this.props.history.push('/app')

    }
  }


  /*Handle field change*/
  changeHandler = input => e => {
    this.setState({ [input]: e.target.value });
  }

  /*Go Next*/
  onClickNext(goToNext, steps, step) {
    let user = {
      "email": this.state.email,
      "password": this.state.password
    }
    if (steps.length - 1 <= steps.indexOf(step)) {
      return;
    }
    if (steps.indexOf(step) === 0) {
      this.setState({ loading: true }, () => {
        LoginDeveloper(user)
          .then(res => {
            //if the promise is resolved, stock the token and the status that we get back on the state
            this.setState({loading: false, token: res.data, ResStatusOnLogin: res.status });
            console.log(this.state)
            console.log(res)

            // create cookies with the token that we get on return when we log (LoginDeveloper)
            cookies.set('token', this.state.token)
            localStorage.setItem('Login', true);
            console.log(this.state)
          })
          .catch(error => { console.log(error); this.setState({ loading: false }) });
        //when mounting component, if there is a token in the cookies, send it to API VerifToken (http://ns3140923.ip-54-38-94.eu:8080/gara-web/api/secure/mobilemoneyoperator)

          goToNext();

      })
    }
    if(steps.indexOf(step) === 1){
      window.location.reload();
    }
  }


  render() {
    return (
      <Row className="h-100">
        <Colxx xxs="8" md="6" className="mx-auto my-auto">
          <Card className="auth-card">
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
                          {
                            this.state.loading ? (
                              <div>
                                <Spinner color="primary" className="mb-1" />
                                <p><IntlMessages id="message.wait" /></p>
                              </div>
                            ) : (this.state.token  && this.state.ResStatusOnLogin === 200 ? (
                              <div>
                                <Redirect to="/app" />
                              </div>
                            ) : (this.state.ResStatusOnLogin === 402 || 403 ? (
                              <div>
                                <div>
                                  <h2 className="mb-2"><IntlMessages id="register.error.text" /></h2>
                                  <p><IntlMessages id="register.error.mismatch" /></p>
                                </div>
                              </div>
                            ) : (this.state.ResStatusOnLogin === 500 ? (
                              <div>
                                <div>
                                  <h2 className="mb-2"><IntlMessages id="register.error.text" /></h2>
                                  <p><IntlMessages id="register.error.contact" /></p>
                                </div>
                              </div>

                            ) : <div>
                                <div>
                                  <h2 className="mb-2"><IntlMessages id="register.error.text" /></h2>
                                  <p><IntlMessages id="register.error.tryagain" /></p>
                                </div>
                              </div>)))}
                        </div>
                      </Step>
                      <Step id="step3">
                        <div className="wizard-basic-step text-center pt-3">
                 
                              <div>
                                <Redirect to="/user/login" />
                              </div>
                       
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


export default withRouter(connect(mapStateToProps, { loginUser })(Login));


