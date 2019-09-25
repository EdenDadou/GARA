import React, { Component } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";

import { CardTitle, Row, Label, Input, CardBody, Card, FormGroup,  } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { addCompany, MobileMoneyPaid } from "../../redux/actions";
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';
import Select from "react-select";
import CustomSelectInput from "../../components/common/CustomSelectInput";
import { getCountries } from "../../services/Country";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";





//----------Stock service variables----------//
let APIcountrieslist = []
let countrylist = []


class UserAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adress: '',
            phoneNumber: localStorage.getItem('PhoneNumber'),
            country: '',
            zipCode: '',
            city: '',
            activeTab: '1',
            status: "default",
            message: "",
            messageShow: false,
            selectedDate: null,
        };
    }


    componentWillMount() {
        this.getCountrylistFromAPI();
    }


    //---------Service country --------// 

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

    /*handle change Date*/
    handleChangeDate = (date) => {
        this.setState({ selectedDate: date });
        this.setState({ birthday: date.toISOString() });
    }

    render() {
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

                            <CardTitle className="mb-4">
                                <IntlMessages id="user.account" />
                            </CardTitle>
                            <Card>
                                <CardBody className="wizard wizard-default">
                                    <AvForm>
                                        <Row>
                                    {/* ---------firstName--------- */}

                                    <Colxx sm={4} className="offset-1 mt-3">
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

                                    <Colxx sm={4} className="mt-3">
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

                                    <Colxx sm={8} className="offset-1">
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

                                    <Colxx sm={4} className="offset-1">
                                        <FormGroup className="has-float-label error-l-100 mb-0">
                                            <Label>Password</Label>
                                            <Input
                                                name="password"
                                                type="password"
                                                onChange={this.changeHandler2('password')}
                                                value={this.state.password} />
                                        </FormGroup>
                                    </Colxx>

                                    {/* ---------Password Confirm--------- */}

                                    <Colxx sm={4}>
                                        <FormGroup className="has-float-label tooltip-left-bottom mb-0">
                                            <Label>Confirm Password</Label>
                                            <Input
                                                name="confirmationPassword"
                                                type="password"
                                                onChange={this.changeHandler2('passwordConfirm')}
                                                value={this.state.passwordConfirm} />

                                        </FormGroup>
                                    </Colxx>

                                    </Row>
                                    </AvForm>
                                    <Separator  className="mb-2 mt-4 offset-1 col-10" />
                                    <AvForm>
                                    <Row>


                                    {/* --------Birthday---------- */}
                             
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
                          
                                    {/* -------Gender---------- */}

                                    <Colxx sm={5} >
                                        <FormGroup className="mb-0 mt-0">
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

                                    {/*--------- Phone Number-------- */}

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


                                    {/* ------------Country ---------*/}

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
                                    </AvForm>
                  
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
    )(UserAccount)
);
