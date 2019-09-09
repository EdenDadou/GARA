import React, { Component } from "react";
import { Row, CardTitle, Card, CardBody,CustomInput, FormGroup, Label, Input, Spinner, Form, Button } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { Wizard, Steps, Step } from 'react-albus';
import { injectIntl } from 'react-intl';
import { BottomNavigation } from "../../components/wizard/BottomNavigation";
import { TopNavigation } from "../../components/wizard/TopNavigation";
import { Colxx } from "../../components/common/CustomBootstrap";
import { NavLink, withRouter } from "react-router-dom";
import { AvForm, AvField, AvGroup, AvInput} from 'availity-reactstrap-validation';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import CustomSelectInput from "../../components/common/CustomSelectInput";
import { getCountries } from "../../services/Country";
import { connect } from "react-redux";
import { configureStore } from "../../redux/store";
import { loginUser, registerUser } from "../../redux/actions";

import { Cookies } from 'react-cookie';
const cookies = new Cookies();
const store = configureStore();


let APIcountrieslist = []
let countrylist = []



class Register extends Component {
    constructor(props) {
        super(props);
   
        this.onClickNext = this.onClickNext.bind(this);
        this.onClickPrev = this.onClickPrev.bind(this);

        
        this.form0 = React.createRef();
        this.form1 = React.createRef();
        this.form2 = React.createRef();
        
        this.state = {
            bottomNavHidden: false,
            loading: true,
            topNavDisabled: false,
            firstName: '',
            lastName: '',
            email: '',
            birthday: null,
            selectedDate: null,
            country: '',
            selectedCountry: null,
            password: '',
            passwordConfirm: '',
            gender: 'Man',
            male : '',
            agreeToTermsOfUse: '',
            phoneNumber: '',
            statusPostDev: null,
            ResStatusOnLogin : null,
            token : null
        }
    }
    
    componentWillMount() {
        this.getCountrylistFromAPI();
        this.setState({ agreeToTermsOfUse: false });
    }

    /*componentWillUnMount() {
    }*/

 
/*Terms of Use change handler*/
    _onChange = () => {
        if (this.state.agreeToTermsOfUse === false) {
            this.setState({ agreeToTermsOfUse: true });

        } else {
            this.setState({ agreeToTermsOfUse: false });
        }
    }

    /*handle change Date*/
    handleChangeDate = (date) => {
        this.setState({ selectedDate: date });
        this.setState({ birthday: date.toISOString() });
    }

 /*Handle change Gender  */ 
    handleChangeGender = gender => {
        this.setState({ gender: gender});
        if(gender === 'Man'){
            this.setState({male: true})
        }else {
            this.setState({male : false})
        }
    };

/*Handle change Country*/
    handleChangeCountry = country => {
        this.setState({ selectedCountry: country });
        this.setState({ country: APIcountrieslist[country.key]});
    };

    /*Handle field change*/
    changeHandler = (input, value) => {
        this.setState({ [input]: value })
    }

    /*Handle field change*/
    changeHandler2 = input => e => {
        this.setState({ [input]: e.target.value });
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
        
        hideNavigation() {
            this.setState({ bottomNavHidden: true, topNavDisabled: true });
        }

          /*create cookies whith the token that we get on return when we log (LoginDeveloper)*/
        setCookie() {
            cookies.set('token', this.state.token, { path: '/' });
        }
            
        /*Go Next*/
        onClickNext(goToNext, steps, step) {
            if (steps.length - 1 <= steps.indexOf(step)) {
                return;
            }
            if (steps.indexOf(step)=== 0 
            && this.state.firstName !== ''
            && this.state.lastName !== ''
            && this.state.email !== ''
            && this.state.password !== ''
            && this.state.passwordConfirm !== ''
            && this.state.passwordConfirm === this.state.password) {
                goToNext();
            }
            if (steps.indexOf(step)=== 1 
            && this.state.birthday !== ''
            && this.state.gender !== ''
            && this.state.phoneNumber !== ''
            && this.state.country!=='') {
                goToNext();
            }
            if(steps.indexOf(step)=== 2 && this.state.agreeToTermsOfUse===true){
                let {agreeToTermsOfUse, birthday, country ,email, firstName, lastName,male, password, phoneNumber} = this.state
                let developer =   {
                    "agreeToTermsOfUse": agreeToTermsOfUse,
                    "birthday": birthday,
                    "country": country,
                    "createDate": "2019-08-03T22:58:16.315Z",
                    "email": email,
                    "firstName": firstName,
                    "language": "English",
                    "lastName": lastName,
                    "male": male,
                    "modifiedDate": "2019-08-03T22:58:16.315Z",
                    "password":password,
                    "phoneNumber": phoneNumber
                }
                store.subscribe(() => {
                    this.setState({ loading: store.getState().authUser.loading });
                  });

                store.dispatch(registerUser(developer, this.props.history))
                this.hideNavigation();
               goToNext();
            
            }
        }
        
    /*Go Previous*/
    onClickPrev(goToPrev, steps, step) {
        if (steps.indexOf(step) <= 0) {
            return;
        }
        goToPrev();
    }


    render() {
        const { messages } = this.props.intl;
        const COUNTRY = this.state.countrylist
        const GENDER = [
            { value: 'Woman', label: 'Woman', key: 1 },
            { value: 'Man', label: 'Man', key: 2 },
        ];

        return (
            <Row className="h-100">
                <Colxx xxs="12" md="10" className="mx-auto my-auto">
                    <Card className="auth-card">

                        <div className="form-side">
                            <NavLink to={`/`} className="white">
                                <span className="logo-single" />
                            </NavLink>
                            <CardTitle className="mb-4">
                                <IntlMessages id="user.register" />
                            </CardTitle>
                            <Card>
                                <CardBody className="wizard wizard-default">
                                    <Wizard>
                                        <TopNavigation className="justify-content-center" disableNav={true} />
                                        <Steps>
                                            <Step id="step1" name={messages["wizard.step-name-1"]} desc={messages["wizard.step-desc-1"]}>
                                                <div className="wizard-basic-step">
                                                    <AvForm className="av-tooltip"
                                                        onSubmit={this.handleSubmit}>
                                                        <Row>

                                                            {/* ---------firstName--------- */}

                                                            <Colxx sm={5} className="offset-1 mt-3">
                                                                <AvGroup className="has-float-label tooltip-right-bottom">
                                                                    <Label>First Name</Label>
                                                                    <AvField name="firstName"
                                                                        type="text"
                                                                        onChange={this.changeHandler2('firstName')}
                                                                        value={this.state.firstName}
                                                                        validate={{
                                                                            required: { value: true, errorMessage: 'Please enter your first name' },
                                                                            pattern: { value: '^[A-Za-z]+$', errorMessage: 'Your name must be composed only with letters' },
                                                                            minLength: { value: 2, errorMessage: 'Your name must be between 2 and 16 characters' },
                                                                            maxLength: { value: 16, errorMessage: 'Your name must be between 2 and 16 characters' }
                                                                        }} />
                                                                </AvGroup>
                                                            </Colxx>


                                                            {/* ---------LastName-------- */}

                                                            <Colxx sm={5} className="mt-3">
                                                                <AvGroup className="has-float-label tooltip-left-bottom">
                                                                    <Label>Last Name</Label>
                                                                    <AvField name="lastName"
                                                                        type="text"
                                                                        onChange={this.changeHandler2('lastName')}
                                                                        value={this.state.lastName}
                                                                        validate={{
                                                                            required: { value: true, errorMessage: 'Please enter your last name' },
                                                                            pattern: { value: '^[A-Za-z]+$', errorMessage: 'Your name must be composed only with letters' },
                                                                            minLength: { value: 2, errorMessage: 'Your name must be between 2 and 16 characters' },
                                                                            maxLength: { value: 16, errorMessage: 'Your name must be between 2 and 16 characters' }
                                                                        }} />
                                                                </AvGroup>
                                                            </Colxx>

                                                            {/* ---------Email--------- */}

                                                            <Colxx sm={10} className="offset-1">
                                                                <AvGroup className="has-float-label tooltip-center-bottom">
                                                                    <Label>Email</Label>
                                                                    <AvField name="email"
                                                                        type="email"
                                                                        onChange={this.changeHandler2('email')}
                                                                        value={this.state.email}
                                                                        validate={{
                                                                            required: { value: true, errorMessage: 'Please enter your email address' },
                                                                            email: { value: true, errorMessage: 'Please enter a valid email address' },
                                                                        }} />
                                                                </AvGroup>
                                                            </Colxx>

                                                            {/* ---------Password--------- */}

                                                            <Colxx sm={5} className="offset-1 mb-3">
                                                                <AvGroup className="has-float-label error-l-100">
                                                                    <Label>Password</Label>
                                                                    <AvField
                                                                        name="password"
                                                                        type="password"
                                                                        onChange={this.changeHandler2('password')}
                                                                        value={this.state.password}
                                                                        validate={{
                                                                            required: { value: true, errorMessage: 'Please enter your password' },
                                                                            minLength: { value: 6, errorMessage: 'Your password must be between 6 and 16 characters' },
                                                                            maxLength: { value: 16, errorMessage: 'Your password must be between 6 and 16 characters' }
                                                                        }} />
                                                                </AvGroup>
                                                            </Colxx>

                                                            <Colxx sm={5}>
                                                                <AvGroup className="has-float-label tooltip-left-bottom">
                                                                    <Label>Confirm Password</Label>
                                                                    <AvField
                                                                        name="confirmationPassword"
                                                                        type="password"
                                                                        onChange={this.changeHandler2('passwordConfirm')}
                                                                        value={this.state.passwordConfirm}
                                                                        validate={{
                                                                            match: { value: 'password', errorMessage: 'Your inputs does not match' },
                                                                            required: { value: true, errorMessage: 'Please enter your password again' }
                                                                        }} />

                                                                </AvGroup>
                                                            </Colxx>
                                                        </Row>
                                                    </AvForm>
                                                </div>
                                            </Step>
                                            <Step id="step2" name={messages["wizard.step-name-2"]} desc={messages["wizard.step-desc-2"]}>
                                                <div className="wizard-basic-step">
                                                    <Form>
                                                        <FormGroup>

                                                            {/* --------Birthday---------- */}

                                                            <Row className="mt-3">
                                                                <Colxx sm={5} className="offset-1">
                                                                    <FormGroup className="mb-0 mt-0">
                                                                        <Label className="form-group has-float-label size-1rem">
                                                                            <IntlMessages id="user.birthday" />
                                                                        </Label>
                                                                        <DatePicker
                                                                            required
                                                                            selected={this.state.selectedDate}
                                                                            onChange={this.handleChangeDate}
                                                                            placeholderText={this.state.birthday} />
                                                                    </FormGroup>
                                                                </Colxx>

                                                                {/* Gender */}

                                                                <Colxx sm={5} >
                                                                    <FormGroup className="mb-0">
                                                                        <Label className="form-group has-float-label size-1rem">
                                                                            <IntlMessages id="user.gender" />
                                                                        </Label>
                                                                        <Select
                                                                            required
                                                                            name={'gender'}
                                                                            components={{ Input: CustomSelectInput }}
                                                                            className="react-select"
                                                                            classNamePrefix="react-select"
                                                                            value={this.state.gender}
                                                                            onChange={this.handleChangeGender}
                                                                            options={GENDER} />
                                                                    </FormGroup>
                                                                </Colxx>

                                                                {/* Phone Number */}

                                                                <Colxx sm={10} className="offset-1">
                                                                    <FormGroup className="mb-0 mt-0">
                                                                        <Label className="form-group has-float-label size-1rem">
                                                                            <IntlMessages id="user.phone" />
                                                                        </Label>
                                                                        <Input type="number"
                                                                            required
                                                                            name="phoneNumber"
                                                                            value={this.state.phoneNumber}
                                                                            onChange={this.changeHandler2('phoneNumber')} />
                                                                    </FormGroup>
                                                                </Colxx>


                                                                {/* Country */}


                                                                <Colxx sm={10} className="offset-1">
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
                                                        </FormGroup>
                                                    </Form>
                                                </div>
                                            </Step>
                                            <Step id="step3" name={messages["wizard.step-name-3"]} desc={messages["wizard.step-desc-3"]}>
                                                <div className="wizard-basic-step">
                                                <AvForm>
                                                    <AvGroup>
                                                        <Label>Terms of Uses</Label>
                                                        <AvInput
                                                            type="textarea"
                                                            name="UsesTerms"
                                                            style={{maxHeight: 130, minHeight: 130}}
                                                            readOnly
                                                            placeholder="Qu'est-ce que le Lorem Ipsum?
                                                            Le Lorem Ipsum est simplement du faux texte employé dans la composition
                                                            et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard
                                                             de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla
                                                              ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
                                                               Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique
                                                               informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans
                                                               les années 1960 grâce à la vente de feuilles Letraset contenant des passages
                                                               du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications
                                                               de mise en page de texte, comme Aldus PageMaker." />
                                                    </AvGroup>
                                                    </AvForm>
                                                    {/* -------User agrement */}

                                                    <Colxx sm={8} className="mt-3 mb-3">
                                                        <CustomInput
                                                            type="checkbox"
                                                            required
                                                            id="agreeToTermsOfUse"
                                                            name="agreeToTermsOfUse"
                                                            onChange={this._onChange} >
                                                            <Label>
                                                                <IntlMessages id="user.agrement" />
                                                            </Label>
                                                        </CustomInput>

                                                    </Colxx>
                                                </div>
                                            </Step>
                                            <Step id="step4" hideTopNav={true}>
                                                <div className="wizard-basic-step text-center pt-3">
                                                       {
                                                          this.state.loading ? (
                                               <div>
                                                        <Spinner color="primary" className="mb-1" />
                                                         <p><IntlMessages id="message.wait" /></p>
                                               </div>
                                                    ) : ( this.state.statusPostDev === 200? (
                                                        <div>
                                                        <div>
                                                            <h2 className="mb-2"><IntlMessages id="wizard.content-thanks" /></h2>
                                                            <p><IntlMessages id="wizard.registered" /></p>
                                                        
                                                        </div>
                                                        <Button onClick = {this.Login()}>Login</Button>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                                <div>
                                                            <h2 className="mb-2"><IntlMessages id="register.error.title" /></h2>
                                                            <p><IntlMessages id="register.error.text" /></p>
                                                        
                                                        </div>
                                                        <NavLink to="/user/register">
                                                        <Button>
                                                           Retry
                                                        </Button>
                                                        </NavLink>
                                                        <NavLink to="/user/login">
                                                        <Button>
                                                           Login
                                                        </Button>
                                                        </NavLink>
                                                        </div>))}
                                                </div>
                                             </Step>
                                        </Steps>
                                        <BottomNavigation onClickNext={this.onClickNext} onClickPrev={this.onClickPrev} className={"justify-content-center " + (this.state.bottomNavHidden && "invisible")} prevLabel={messages["wizard.prev"]} nextLabel={messages["wizard.next"]} />
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
  

export default withRouter(injectIntl(connect(
    mapStateToProps,
    {
      registerUser, loginUser
    }
  )(Register)));