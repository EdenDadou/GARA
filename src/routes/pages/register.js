import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardTitle, Form, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

import { Colxx } from "Components/CustomBootstrap";

import FormUserDetails from "Components/FormUserRegistration/FormUserDetails"
import FormPersonalDetails from "Components/FormUserRegistration/FormPersonalDetails"
import Confirm from "Components/FormUserRegistration/Confirm"

import { connect } from "react-redux";
import { registerUser } from "Redux/actions";

class RegisterLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      firstName: '',
      lastName: '',
      email: '',
      birthday: '',
      country:'',
      password: '',
      gender: '',
      agreeToTermsOfUse: '',
      phoneNumber: ''
    };
  }
  onUserRegister() {
    if (this.state.email !== "" && this.state.password !== "") {
      // this.props.registerUser(this.state, this.props.history);
      this.props.history.push("/");
    }
  }

  componentDidMount() {
    document.body.classList.add("background");
    console.log(this.state)
  }


  componentWillUnmount() {
    document.body.classList.remove("background");
  }

  //Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    console.log(this.state.step)
    this.setState({ step: step + 1 });
  }


  //Go back to previous step
  previousStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 })
  }

  //Handle field change
  changeHandler = input => e => {
    this.setState({ [input]: e.target.value })
  }

  //Handle field change
  changeHandler2 = (input,value) => {
    this.setState({ [input]: value })
  }



  render() {
    console.log(this.state)
    const { step } = this.state;
    
    const { firstName,
      lastName,
      email,
      birthday,
      country,
      password,
      agreeToTermsOfUse,
      phoneNumber,
      gender } = this.state
      
      
      
      const values = {
        firstName,
        lastName,
        email,
        birthday,
        country,
        password,
        agreeToTermsOfUse,
        phoneNumber,
        gender
      }
      
      
      return (
        
        <Fragment>
        <div className="fixed-background" />
        <main>
          <div className="container">
            <Row className="h-100">
              <Colxx xxs="12" md="10" className="mx-auto my-auto">
                <Card className="auth-card">
                  <div className="position-relative image-side ">
                    <p className="text-white h2">MAGIC IS IN THE DETAILS</p>
                    <p className="white mb-0">
                      Please use this form to register. <br />
                      If you are a member, please{" "}
                      <NavLink to={`/login`} className="white">
                        login
                      </NavLink>
                      .
                    </p>
                  </div>
                  <div className="form-side">
                    <NavLink to={`/`} className="white">
                      <span className="logo-single" />
                    </NavLink>
                    <CardTitle className="mb-4">
                      <IntlMessages id="user.register" />
                    </CardTitle>
                    {(() => {
                      switch (step) {
                        case 1:
                          return (
                            <FormUserDetails
                              nextStep={this.nextStep}
                              changeHandler={this.changeHandler}
                              values={values} />
                          )

                        case 2:
                          return (
                            <FormPersonalDetails
                              nextStep={this.nextStep}
                              previousStep={this.previousStep}
                              changeHandler={this.changeHandler}
                              changeHandler2={this.changeHandler2}
                              values={values}/>
                          )
                          case 3:
                            return(<Confirm
                              nextStep={this.nextStep}
                              previousStep={this.previousStep}
                              changeHandler={this.changeHandler}
                              changeHandler2={this.changeHandler2}
                              values={values}/>
                              )
                      };

                    })()}

                  </div>
                </Card>
              </Colxx>
            </Row>
          </div>
        </main>
      </Fragment>
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
    registerUser
  }
)(RegisterLayout);
