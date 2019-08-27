import React, { Component } from 'react';
import { Row, Label, Button } from "reactstrap";
import IntlMessages from "Util/IntlMessages";
import { Colxx } from "Components/CustomBootstrap";
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';


export default class FormUserDetails extends React.Component {

    componentDidMount() {
        document.body.classList.add("background");
    }


    componentWillUnmount() {
        document.body.classList.remove("background");
    }


    handleSubmit = () => {
        if (this.props.values.firstName !== "" && this.props.values.lastName !== "" && this.props.values.email !== "" && this.props.values.password !== "") {
            this.props.nextStep();
        }
    }



    render() {
        const { changeHandler } = this.props;
        const { values } = this.props;

        return (
            <AvForm className="av-tooltip"
                onSubmit={this.handleSubmit}
            >
                <Row>

                    {/* ---------firstName--------- */}

                    <Colxx sm={5}>
                        <AvGroup className="has-float-label tooltip-right-bottom">
                            <Label>First Name</Label>
                            <AvField name="firstName"
                                type="text"
                                onChange={changeHandler('firstName')}
                                value={values.firstName}
                                validate={{
                                    required: { value: true, errorMessage: 'Please enter your first name' },
                                    pattern: { value: '^[A-Za-z]+$', errorMessage: 'Your name must be composed only with letters' },
                                    minLength: { value: 2, errorMessage: 'Your name must be between 2 and 16 characters' },
                                    maxLength: { value: 16, errorMessage: 'Your name must be between 2 and 16 characters' }
                                }} />
                        </AvGroup>
                    </Colxx>


                    {/* ---------LastName-------- */}

                    <Colxx sm={5}>
                        <AvGroup className="has-float-label tooltip-left-bottom">
                            <Label>Last Name</Label>
                            <AvField name="lastName"
                                type="text"
                                onChange={changeHandler('lastName')}
                                value={values.lastName}
                                validate={{
                                    required: { value: true, errorMessage: 'Please enter your last name' },
                                    pattern: { value: '^[A-Za-z]+$', errorMessage: 'Your name must be composed only with letters' },
                                    minLength: { value: 2, errorMessage: 'Your name must be between 2 and 16 characters' },
                                    maxLength: { value: 16, errorMessage: 'Your name must be between 2 and 16 characters' }
                                }} />
                        </AvGroup>
                    </Colxx>

                    {/* ---------Email--------- */}

                    <Colxx sm={10}>
                        <AvGroup className="has-float-label tooltip-center-bottom">
                            <Label>Email</Label>
                            <AvField name="email"
                                type="email"
                                onChange={changeHandler('email')}
                                value={values.email}
                                validate={{
                                    required: { value: true, errorMessage: 'Please enter your email address' },
                                    email: { value: true, errorMessage: 'Please enter a valid email address' },
                                }} />
                        </AvGroup>
                    </Colxx>

                    {/* ---------Password--------- */}

                    <Colxx sm={5}>
                        <AvGroup className="has-float-label error-l-100">
                            <Label>Password</Label>
                            <AvField name="password"
                                type="password"
                                onChange={changeHandler('password')}
                                value={values.password}
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
                            <AvField name="confirmationPassword" type="password" validate={{
                                match: { value: 'password', errorMessage: 'Your inputs does not match' },
                                required: { value: true, errorMessage: 'Please enter your password again' }
                            }} />
                        </AvGroup>
                    </Colxx>
                </Row>



                <Colxx sm={4} className="offset-6">
                    <Button
                        type='submit'
                        color="primary"
                        className="btn-shadow"
                        size="lg">
                        <IntlMessages id="button.next" />
                    </Button>
                </Colxx>
            </AvForm>



        );
    }
}
