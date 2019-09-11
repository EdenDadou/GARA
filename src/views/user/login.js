import React, { Component } from "react";
import { Row, Card, CardBody, CardTitle, Form, Label, Input, Spinner, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions";
import { Colxx } from "../../components/common/CustomBootstrap";
import IntlMessages from "../../helpers/IntlMessages";



class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      Error: '',
    };
  }



  componentDidMount() {
    //If Allow that we initialize on App.js ComponentWillMount/VerifToken function its true, redirect to app 
    if (localStorage.getItem('Allow')) {
      this.props.history.push('/app')
    }
    // else if (localStorage.getItem('Allow') && localStorage.getItem('CurrentWorkingCompany') === null) {
    //   this.props.history.push('/app/company')
    // }
  }


  /*Handle field change*/
  changeHandler = input => e => {
    this.setState({ [input]: e.target.value });
  }


  //On submit Login Form
  handleSubmit = () => {
    if (this.state.email !== "" && this.state.password !== "") {

      let user = { email: this.state.email, password: this.state.password }

      localStorage.setItem('onProcess', 'false')

      //Call Redux from props
      this.props.loginUser(user, this.props.history)
    }
  }


  render() {
    return (
      <Row className="h-100">
        <Colxx xxs="8" md="6" className="mx-auto my-auto">
          <Card className="auth-card">
            <div className="form-side">
              <NavLink to={`/`} className="white">
                <span className="logo-single" />
              </NavLink>
              <CardTitle className="mb-4">
                <IntlMessages id="user.login-title" />
              </CardTitle>
              <Card>
                <CardBody className="wizard wizard-default">
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
                      <Row>

                        {/* If there is a Error, display Error message, else, display only the forget password part */}

                        {this.props.user === 'Error' &&
                          <div  className="ml-3">
                            <p><IntlMessages id="register.error.mismatch" /></p>
                          </div>
                         }

                      </Row>
                    </div>
                    <div className="wizard-basic-step text-center pt-3">

                      {/* If it's loading, diplay spinner, else display the login button */}

                      {(this.props.loading) ? (
                        <div>
                          <Spinner color="primary" className="mb-1" />
                          <p><IntlMessages id="message.wait" /></p>
                        </div>
                      ) : (<div>
                        <div>
                          <Button size="lg" className="mb-2" onClick={this.handleSubmit}> Login </Button>
                        </div>
                      </div>)}
                    </div>
                    <div>
                        <NavLink to={`/forgot-password`}>
                                  <IntlMessages id="user.forgot-password-question" />
                        </NavLink>
                    </div>

                    <p>You don't have any account. Click <NavLink to={`/user/register`}>here</NavLink></p>
                  </Form>
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

export default connect(
  mapStateToProps,
  {
    loginUser
  }
)(Login);


