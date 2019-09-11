import React, { Component } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { Wizard, Steps, Step } from 'react-albus';
import {
  TabContent, TabPane, Nav, NavItem, NavLink, CardTitle, CardText, Col,
  Row, Label, Button, CardBody, Card, ButtonGroup, FormGroup
} from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import classnames from 'classnames';

import { BottomNavigationNext } from "../../components/wizard/BottomNavigation";
import { TopNavigation } from "../../components/wizard/TopNavigation";

import { Colxx } from "../../components/common/CustomBootstrap";
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import Select from "react-select";
import CustomSelectInput from "../../components/common/CustomSelectInput";
import { getCountries } from "../../services/Country";



let APIcountrieslist = []
let countrylist = []


class NewCompany extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.onClickNext = this.onClickNext.bind(this);

    this.state = {
      bottomNavHidden: false,
      topNavDisabled: false,
      companyName: '',
      description: '',
      adress: '',
      country: '',
      zipCode: '',
      city: '',
      activeTab: '1'
    };
  }


  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  componentWillMount() {
    this.getCountrylistFromAPI();
  }

  /*Get country and store them*/
  async getCountrylistFromAPI() {
    await getCountries()
      .then((array) => {
        /*---Convert the list get from the back end to ahave the correct format with the index---*/
        countrylist.push(...array.map(({ name }, index) => ({ label: name, value: name, key: index })));
        array.forEach((country) => { APIcountrieslist.push(country) });

        /*--Update the state to put the new format of the list---*/
        this.setState({
          countrylist: countrylist
        });
      });
  }

  /*Get country and store them*/
  async getMobileMoneyOperator() {
    await getCountries()
      .then((array) => {
        /*---Convert the list get from the back end to ahave the correct format with the index---*/
        countrylist.push(...array.map(({ name }, index) => ({ label: name, value: name, key: index })));
        array.forEach((country) => { APIcountrieslist.push(country) });

        /*--Update the state to put the new format of the list---*/
        this.setState({
          countrylist: countrylist
        });
      });
  }



  // -------Handle field change-----------//
  changeHandler = (input, value) => {
    this.setState({ [input]: value })
  }

  changeHandler2 = input => e => {
    this.setState({ [input]: e.target.value });
  }

  handleChangeCountry = country => {
    this.setState({ selectedCountry: country });
    this.setState({ country: APIcountrieslist[country.key] });
  };


  //---------Navigation------//

  hideNavigation() {
    this.setState({ bottomNavHidden: true, topNavDisabled: true });
  }

  onClickNext(goToNext, steps, step) {

    if (steps.length - 1 <= steps.indexOf(step)) {
      return;
    }
    if (steps.indexOf(step) === 0
      // && this.state.companyName!==''
      // && this.state.description!==''
      // && this.state.adress!==''
      // && this.state.zipCode!==''
      // && this.state.city!==''
      // && this.state.country!==''
    ) {
      this.getMobileMoneyOperator();
      this.hideNavigation()
      goToNext();
    }
    step.isDone = true;
    if (steps.length - 2 <= steps.indexOf(step)) {
    }
  }


  //--------Submit Forms-------//
  handleSubmit() {

  }

  render() {

    const COUNTRY = this.state.countrylist
    const MOBILEMONEYOPERATOR = this.state.countrylist
    return (
      <Row className="h-100">
        <Colxx xxs="12" md="10" className="mx-auto my-auto">
          <Card className="auth-card">

            <div className="form-side">

              <CardTitle className="mb-4">
                <IntlMessages id="create.company" />
              </CardTitle>
              <Card>
                <CardBody className="wizard wizard-default">
                  <Wizard>
                    <TopNavigation className="justify-content-center" disableNav={true} />

                    <Steps>
                      <Step id="step1" name={"Create"}>
                        <div className="wizard-basic-step">
                          <AvForm className="av-tooltip"
                            onSubmit={this.handleSubmit}>
                            <Row>

                              {/* -------- Company Name--------- */}

                              <Colxx sm={8} className="offset-2 mt-5">
                                <AvGroup className="has-float-label tooltip-right-bottom">
                                  <Label>Company Name</Label>
                                  <AvField name="companyName"
                                    type="text"
                                    onChange={this.changeHandler2('companyName')}
                                    value={this.state.companyName}
                                    validate={{
                                      required: { value: true, errorMessage: 'Please enter your company name' },
                                      minLength: { value: 2, errorMessage: 'Your name must be between 2 and 16 characters' },
                                      maxLength: { value: 30, errorMessage: 'Your name must be between 2 and 16 characters' }
                                    }} />
                                </AvGroup>
                              </Colxx>

                              {/* -------- Description--------- */}

                              <Colxx sm={8} className="offset-2 mt-3">
                                <AvGroup className="has-float-label tooltip-right-bottom">
                                  <Label>Desciption</Label>
                                  <AvInput
                                    name="Desciption"
                                    onChange={this.changeHandler2('description')}
                                    value={this.state.description}
                                    style={{ maxHeight: 130, minHeight: 130 }}
                                    validate={{
                                      required: { value: true, errorMessage: 'Please enter your company description' },
                                      minLength: { value: 10, errorMessage: 'Description must be between 20 and 100 characters' },
                                      maxLength: { value: 100, errorMessage: 'Your name must be between 20 and 100 characters' }
                                    }} />
                                </AvGroup>
                              </Colxx>

                              {/* ---------country--------- */}

                              <Colxx sm={8} className="offset-2">
                                <FormGroup className="mb-3 mt-0">
                                  <Label className="form-group has-float-label size-1rem">
                                    <IntlMessages id="user.country" />
                                  </Label>
                                  <Select
                                    required
                                    components={{ Input: CustomSelectInput }}
                                    className="react-select"
                                    classNamePrefix="react-select"
                                    value={this.state.selectedCountry}
                                    onChange={this.handleChangeCountry}
                                    options={COUNTRY} />
                                </FormGroup>
                              </Colxx>

                              {/* ---------Adress-------- */}

                              <Colxx sm={8} className="offset-2 mt-3">
                                <AvGroup className="has-float-label tooltip-left-bottom">
                                  <Label>Adresse</Label>
                                  <AvField name="adress"
                                    type="text"
                                    onChange={this.changeHandler2('adress')}
                                    value={this.state.adress}
                                    validate={{
                                      required: { value: true, errorMessage: 'Please enter your adress' },
                                    }} />
                                </AvGroup>
                              </Colxx>

                              {/* ---------ZipCode--------- */}

                              <Colxx sm={3} className="offset-2">
                                <AvGroup className="has-float-label tooltip-center-bottom">
                                  <Label>ZipCode</Label>
                                  <AvField name="zipCode"
                                    type="text"
                                    onChange={this.changeHandler2('zipCode')}
                                    value={this.state.zipCode}
                                    validate={{
                                      required: { value: true, errorMessage: 'Please enter your zipCode' },
                                    }} />
                                </AvGroup>
                              </Colxx>

                              {/* ---------City--------- */}

                              <Colxx sm={5}>
                                <AvGroup className="has-float-label error-l-100">
                                  <Label>City</Label>
                                  <AvField
                                    name="city"
                                    onChange={this.changeHandler2('city')}
                                    value={this.state.city}
                                    validate={{
                                      required: { value: true, errorMessage: 'Please enter your city' },
                                    }} />
                                </AvGroup>
                              </Colxx>

                            </Row>
                          </AvForm>
                        </div>
                      </Step>

                      <Step id="step2" name={"Activate"}>
                        <div className="wizard-basic-step">
                          <AvForm>

                            <div>
                              <Nav tabs className="button-paiment">
                                <NavItem>
                                  <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}>
                                    MobileMoney
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}>
                                    Paypal
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink
                                    className={classnames({ active: this.state.activeTab === '3' })}
                                    onClick={() => { this.toggle('3'); }}>
                                    CB
                                  </NavLink>
                                </NavItem>
                              </Nav>
                              <TabContent activeTab={this.state.activeTab}>
                                {/* -----------Mobile Money--------- */}
                                <TabPane tabId="1">
                                  <Row>
                                    <Col sm="12">
                                      <Card body>
                                        <CardTitle>Mobile Money Paiment</CardTitle>
                                        <CardText>This will take 22$ on you Mobile Money account at number: {localStorage.getItem('PhoneNumber')}</CardText>
                                        <CardText>Please select your Mobile Money Operator.</CardText>
                                        <Colxx sm={8} className="offset-2">
                                          <FormGroup className="mb-3 mt-0">
                                            <Label className="form-group has-float-label size-1rem">
                                              <IntlMessages id="user.country" />
                                            </Label>
                                            <Select
                                              required
                                              components={{ Input: CustomSelectInput }}
                                              className="react-select"
                                              classNamePrefix="react-select"
                                              value={this.state.selectedCountry}
                                              onChange={this.handleChangeCountry}
                                              options={MOBILEMONEYOPERATOR} />
                                          </FormGroup>
                                        </Colxx>

                                        <Button>Activate</Button>
                                      </Card>
                                    </Col>
                                  </Row>
                                </TabPane>
                                {/* -----------PayPal--------- */}
                                <TabPane tabId="2">
                                  <Row>
                                    <Col sm="6">
                                      <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button>Go somewhere</Button>
                                      </Card>
                                    </Col>
                                    <Col sm="6">
                                      <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button>Go somewhere</Button>
                                      </Card>
                                    </Col>
                                  </Row>
                                </TabPane>
                                {/* -----------CB--------- */}
                                <TabPane tabId="3">
                                  <Row>
                                    <Col sm="6">
                                      <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button>Go somewhere</Button>
                                      </Card>
                                    </Col>
                                    <Col sm="6">
                                      <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button>Go somewhere</Button>
                                      </Card>
                                    </Col>
                                  </Row>
                                </TabPane>
                              </TabContent>
                            </div>
                          </AvForm>
                        </div>
                      </Step>
                    </Steps>
                    {this.state.bottomNavHidden ? (<div></div>) : (
                      <BottomNavigationNext onClickNext={this.onClickNext} className={"justify-content-center mb-4" + (this.state.bottomNavHidden && "invisible")} nextLabel={"Create"} />)}
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
const mapStateToProps = ({ surveyListApp }) => {
  return {
    surveyListApp
  };
};
export default injectIntl(
  connect(
    mapStateToProps,
    {

    }
  )(NewCompany)
);
