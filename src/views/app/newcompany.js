import React, { Component } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { Wizard, Steps, Step } from 'react-albus';
import { TabContent, TabPane, Nav, NavItem, NavLink, CardTitle, CardText, Col, Row, Label, Button, CardBody, Card, FormGroup, Popover, PopoverBody } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import classnames from 'classnames';
import { BottomNavigationNext } from "../../components/wizard/BottomNavigation";
import { TopNavigation } from "../../components/wizard/TopNavigation";
import { addCompany, MobileMoneyPaid } from "../../redux/actions";
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';
import Select from "react-select";
import CustomSelectInput from "../../components/common/CustomSelectInput";
import { getCountries } from "../../services/Country";
import { AgencyCountry, MobileMoneyOperator } from "../../services/MobileMoney";





//----------Stock service variables----------//
let APIcountrieslist = []
let countrylist = []

let APIAgencyCountrieslist = []
let AgencyCountrylist = []

let APIOperatorlist = []
let Operatorlist = []


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
      phoneNumber: localStorage.getItem('PhoneNumber'),
      country: '',
      zipCode: '',
      city: '',
      activeTab: '1',
      status: "default",
      message: "",
      messageShow: false
    };
  }

  //--------------Change tab-------------//
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  componentWillMount() {
    this.getCountrylistFromAPI();
    this.getMobileMoneyCountry()
  }


  //---------Service country and operator --------// 

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

  /*Get Mobil Money Country and store them*/
  async getMobileMoneyCountry() {
    let Token = localStorage.getItem('Token');
    console.log(Token)
    await AgencyCountry(Token)
      .then(res => res.data)
      .then((array) => {
        /*---Convert the list get from the back end to ahave the correct format with the index---*/
        AgencyCountrylist.push(...array.map(({ name }, index) => ({ label: name, value: name, key: index })));
        array.forEach((country) => { APIAgencyCountrieslist.push(country) });
        /*--Update the state to put the new format of the list---*/
        this.setState({ AgencyCountrylist: AgencyCountrylist });
      });
  }

  /*Get Mobil Money Operator and store them*/
  async getMobileMoneyOperator() {
    let Token = localStorage.getItem('Token')
    let CountryCode = localStorage.getItem('Code')
    Operatorlist = [];
    APIOperatorlist = [];
    await MobileMoneyOperator(Token, CountryCode)
      .then(res => res.data)
      .then((array) => {
        /*---Convert the list get from the back end to ahave the correct format with the index---*/
        Operatorlist.push(...array.map(({ telecom }, index) => ({ label: telecom, value: telecom, key: index })));
        array.forEach((country) => { APIOperatorlist.push(country) });

        /*--Update the state to put the new format of the list---*/
        this.setState({
          Operatorlist: Operatorlist
        });
      });
  }


  //-----------button Paid---------//
  handlePaidClick = () => {

    let paymentInfo = { action: "COMPANY_ACTIVATION", amount: 500, isCashIn: false, mobileMoneyServiceCode: this.state.Operator, phoneNumber: this.state.phoneNumber }
    localStorage.setItem('onProcess', false)
   

    this.props.MobileMoneyPaid(paymentInfo);
    this.setState({ status: "processing" })

    setTimeout(() => {
      this.props.payment !== 'error' ? (this.setState({ status: "success", messageShow: true, message: 'Initiate, waiting to confirmation from your Operator' }))
        : (this.setState({ status: "fail", messageShow: true, message: 'Something went wrong, please, retry' }))
    }, (this.props.paymentloading === false && 2000))

    setTimeout(() => {
      this.setState({messageShow: false,status: "default"},()=>{
        if(this.props.paiment !== null && this.props.paiment !== 'error')
        if(this.props.payment.status === 200){
          this.props.history.push('/app/company')
        }
      })}, 5000)    
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

  handleChangeOperatorCountry = agencyCountry => {
    this.setState({ selectedAgencyCountry: agencyCountry });
    localStorage.setItem('Code', APIAgencyCountrieslist[agencyCountry.key].countryCode)
    this.getMobileMoneyOperator()
  };

  handleChangeOperator = Operator => {
    this.setState({ Operator: APIOperatorlist[Operator.key].serviceCode });
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
      && this.state.companyName !== ''
      && this.state.description !== ''
      && this.state.adress !== ''
      && this.state.zipCode !== ''
      && this.state.city !== ''
      && this.state.country !== ''
    ) {
      let company = {
        adress: this.state.adress,
        city: this.state.city,
        country: this.state.country,
        description: this.state.description,
        name: this.state.companyName,
        zipCode: this.state.zipCode
      }
      this.hideNavigation()
      localStorage.setItem('onProcess', false)
      this.props.addCompany(company)

      setTimeout(() => {
        if (localStorage.getItem('companyAdded') === 'true') {
        this.setState({phoneNumber:localStorage.getItem('PhoneNumber')})
        goToNext();
        } else if (localStorage.getItem('companyAdded') === 'false') {
          window.location.reload()
        }
      }, this.props.loading === false && 800);


    }
    step.isDone = true;
    if (steps.length - 2 <= steps.indexOf(step)) {
    }
  }

  render() {
    console.log(this.props.payment)
    const COUNTRY = this.state.countrylist
    const MOBILEMONEYCOUNTRY = this.state.AgencyCountrylist
    const MOBILEMONEYOPERATOR = this.state.Operatorlist
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
                          <AvForm className="av-tooltip">
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
                                  <AvField
                                    name="Desciption"
                                    onChange={this.changeHandler2('description')}
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

                              {/* Tab navigation Items */}
                              <Nav tabs className="center">
                                <NavItem>
                                  <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' }) }
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

                              {/* Tab contents */}
                              <TabContent activeTab={this.state.activeTab}>
                                {/* -----------Mobile Money--------- */}
                                <TabPane tabId="1">
                                  <Row>
                                    <Col sm="12">
                                      <Card body>
                                        <CardTitle>Mobile Money Paiment</CardTitle>

                                        <Row>
                                          {/* ------------Select MM Country-------- */}
                                          <Colxx sm={5} className="offset-1">
                                            <FormGroup className="mb-3 mt-0">
                                              <Label className="form-group has-float-label size-1rem">
                                                <IntlMessages id="user.country" />
                                              </Label>
                                              <Select
                                                required
                                                components={{ Input: CustomSelectInput }}
                                                className="react-select"
                                                classNamePrefix="react-select"
                                                value={this.state.selectedAgencyCountry}
                                                onChange={this.handleChangeOperatorCountry}
                                                options={MOBILEMONEYCOUNTRY} />
                                            </FormGroup>
                                          </Colxx>

                                          {/* ------------Select MM Operator-------- */}

                                          <Colxx sm={5} className="">
                                            <FormGroup className="mb-3 mt-0">
                                              <Label className="form-group has-float-label size-1rem">
                                                <IntlMessages id="user.operator" />
                                              </Label>
                                              <Select
                                                required
                                                components={{ Input: CustomSelectInput }}
                                                className="react-select"
                                                classNamePrefix="react-select"
                                                value={this.state.selectedOperator}
                                                onChange={this.handleChangeOperator}
                                                options={MOBILEMONEYOPERATOR} />
                                            </FormGroup>
                                          </Colxx>

                                          {/* -------- Phone Number--------- */}

                                          <Colxx sm={5} className="offset-1">
                                            <AvGroup className="has-float-label tooltip-right-bottom">
                                              <Label>Phone Number</Label>
                                              <AvField name="phoneNumber"
                                                type="text"
                                                onChange={this.changeHandler2('phoneNumber')}
                                                value={this.state.phoneNumber}
                                                validate={{
                                                  required: { value: true, errorMessage: 'Please enter your phone number' },
                                                  minLength: { value: 5, errorMessage: 'Your name must be between 5 and 18 characters' },
                                                  maxLength: { value: 18, errorMessage: 'Your name must be between 5 and 18 characters' }
                                                }} />
                                            </AvGroup>
                                          </Colxx>
                                        </Row>
                                        <Row>
                                          {/* Bill recap */}
                                          <Colxx sm={5} className="offset-1">
                                            <Card body>
                                              <CardText>Amount : 20€</CardText>
                                              <CardText>Frais : 1.2%</CardText>
                                              <Separator className="mb-5" />
                                              <CardText>Total: 20€10</CardText>
                                            </Card>
                                          </Colxx>
                                          <Colxx sm={5} className="">
                                            <Card body>
                                              <CardText>Your account will be activated, just after that paiment will be validate by your operator</CardText>

                                              <span>
                                                <Button
                                                  id={"loadingButton"}
                                                  className={`btn-multiple-state  mb-3  ${classnames(
                                                    {
                                                      "show-spinner": this.state.status === "processing",
                                                      "show-success": this.state.status === "success",
                                                      "show-fail": this.state.status === "fail"
                                                    }
                                                  )}`}
                                                  color="primary"
                                                  onClick={this.handlePaidClick}
                                                  disabled={this.state.status !== "default"}
                                                >
                                                  <Popover
                                                    placement="top"
                                                    isOpen={this.state.messageShow}
                                                    target={"loadingButton"}
                                                  >
                                                    <PopoverBody>{this.state.message}</PopoverBody>
                                                  </Popover>
                                                  <span className="spinner d-inline-block">
                                                    <span className="bounce1" />
                                                    <span className="bounce2" />
                                                    <span className="bounce3" />
                                                  </span>
                                                  <span className="icon success">
                                                    <i className="simple-icon-check" />
                                                  </span>
                                                  <span className="icon fail">
                                                    <i className="simple-icon-exclamation" />
                                                  </span>
                                                  <span className="label">{"Paid"}</span>
                                                </Button>
                                              </span>

                                            </Card>
                                          </Colxx>
                                        </Row>

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

const mapStateToProps = ({ companyList, mobileMoney }) => {
  const { item, loading } = companyList;
  const { payment, paymentloading } = mobileMoney
  return { item, loading, paymentloading, payment }
};
export default injectIntl(
  connect(
    mapStateToProps,
    {
      MobileMoneyPaid, addCompany
    }
  )(NewCompany)
);
