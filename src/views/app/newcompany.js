import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { Wizard, Steps, Step } from 'react-albus';
import {
  Row,
  Label,
  Button,
  CardBody, Card,
  ButtonGroup, FormGroup, CardTitle
} from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";

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
    this.state = {
      companyName: "",
      description: "",
      adress: "",
      country: "",
      zipCode: "",
      city: "",
    };
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
    if (steps.indexOf(step) === 0) {
      // this.hideNavigation()
      goToNext();
    }
    step.isDone = true;
    if (steps.length - 2 <= steps.indexOf(step)) {
    }
  }
  onClickPrev(goToPrev, steps, step) {
    if (steps.indexOf(step) <= 0) {
      return;
    }
    goToPrev();
  }

  //--------Submit Forms-------//
  handleSubmit() {

  }

  render() {
    const COUNTRY = this.state.countrylist
    console.log(this.state.companyName)
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
                              </Row>
                            </AvForm>
                          </div>
                        </Step>

                        <Step id="step2" name={"Activate"}>
                          <div className="wizard-basic-step">
                            <AvForm>
                              <div className='button-paiment'>
                                <ButtonGroup className="mb-2 mr-1">
                                  <Button color="primary">CB</Button>
                                  <Button color="primary">Paypal</Button>
                                  <Button color="primary">MobileMoney</Button>
                                </ButtonGroup>
                              </div>

                              {/* <Button type={'submit'}>Activate</Button> */}



                            </AvForm>
                          </div>
                        </Step>
                      </Steps>
                      <BottomNavigationNext onClickNext={this.onClickNext} className={"justify-content-center mb-4" + (this.state.bottomNavHidden && "invisible")} nextLabel={"Create"} />
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
