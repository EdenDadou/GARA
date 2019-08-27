import React, { Component } from 'react';
import { Button, FormGroup, Label, Row, Input, Form } from "reactstrap";
import IntlMessages from "Util/IntlMessages";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Colxx } from "Components/CustomBootstrap";
import Select from "react-select";
import CustomSelectInput from "Components/CustomSelectInput";
import { getCountries } from "Services/Country";

let APIcountries = getCountries()
let APIcountrieslist = []
let countrylist = []



export default class FormUserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeDate = this.handleChangeDate.bind(this);

        this.state = {
            country: '',
            gender: '',
            birthday: null,
            countrylist: []
        };
    }

    componentDidMount() {
        document.body.classList.add("background");
        this.getCountrylistFromAPI()
    }


    componentWillUnmount() {
        document.body.classList.remove("background");
    }

    handleChangeDate(date) {
        this.setState({ birthday: date });
        this.props.changeHandler2('birthday', date.format('DD-MMMM-YYYY'))
    }

    handleChangeGender = gender => {
        this.setState({ gender });
        this.props.changeHandler2('gender', gender.value)
    };

    handleChangeCountry = country => {
        this.setState({ country });
        this.props.changeHandler2('country', country.value)
    };

    submitHandler = (e) => {
        e.preventDefault()
        this.props.nextStep()
    };

    goBack = (e) => {
        e.preventDefault()
        this.props.previousStep()
    };

    async getCountrylistFromAPI() {
        await APIcountries
            .then((array) => {
                //Convert the list get from the back end to ahave the correct format with the index
                countrylist.push(...array.map(({ name }, index) => ({ label: name, value: name, key: index })));
                array.forEach((country) => { APIcountrieslist.push(country) });

                //Update the state to put the new format of the list
                this.setState({
                    countrylist: countrylist
                });
            });

    }


    render() {
        const { values } = this.props;
        const { changeHandler } = this.props;

        const GENDER = [
            { value: 'Woman', label: 'Woman', key: 1 },
            { value: 'Man', label: 'Man', key: 2 },

        ];

        const COUNTRY = this.state.countrylist

        return (

            <Form onSubmit={this.submitHandler}>
                <FormGroup>


                    {/* Birthday */}

                    <Row>
                        <Colxx sm={5}>
                            <FormGroup className="mb-0 mt-0">
                                <Label className="form-group has-float-label size-1rem">
                                    <IntlMessages id="users.birthday" />
                                </Label>
                                <DatePicker
                                    required
                                    selected={this.state.birthday}
                                    onChange={this.handleChangeDate}
                                    placeholderText={values.birthday} />
                            </FormGroup>
                        </Colxx>


                        {/* Gender */}


                        <Colxx sm={5}>
                            <FormGroup className="mb-0 mt-0">
                                <Label className="form-group has-float-label size-1rem">
                                    <IntlMessages id="users.gender" />
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

                        <Colxx sm={10}>
                            <FormGroup className="mb-0 mt-0">
                                <Label className="form-group has-float-label size-1rem">
                                    <IntlMessages id="users.phone" />
                                </Label>
                                <Input type="text"
                                    required
                                    name="phoneNumber"
                                    value={values.phoneNumber}
                                    onChange={changeHandler('phoneNumber')} />
                            </FormGroup>
                        </Colxx>


                        {/* Country */}


                        <Colxx sm={10}>
                            <FormGroup className="mb-3 mt-0">
                                <Label className="form-group has-float-label size-1rem">
                                    <IntlMessages id="forms.country" />
                                </Label>
                                <Select
                                    required
                                    components={{ Input: CustomSelectInput }}
                                    className="react-select"
                                    classNamePrefix="react-select"
                                    value={this.state.country}
                                    onChange={this.handleChangeCountry}
                                    options={COUNTRY} />
                            </FormGroup>
                        </Colxx>
                    </Row>
                    <Row>
                        <Colxx sm={4} >
                            <Button
                            className=""
                                color="outline-primary"
                                className="btn-shadow"
                                size="lg"
                                type='button'
                                onClick={this.goBack}
                            >
                                <IntlMessages id="button.previous" />
                            </Button>
                        </Colxx>
                        <Colxx sm={4} className="offset-2">
                            <Button
                            
                                color="primary"
                                className="btn-shadow"
                                size="lg"
                                type='submit'
                            >
                                <IntlMessages id="button.next" />
                            </Button>
                        </Colxx>
                    </Row>
                </FormGroup>
            </Form>

        );
    }
}
