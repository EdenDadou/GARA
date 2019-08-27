import React, { Component, Fragment } from 'react';
import { Alert, UncontrolledAlert, Form, Card, CardBody, CardTitle, Label, Button, CustomInput, Row } from "reactstrap";
import IntlMessages from "Util/IntlMessages";
import { Colxx } from "Components/CustomBootstrap";
import { NotificationManager } from "Components/ReactNotifications";




export default class Confirm extends React.Component {

    componentDidMount() {
        document.body.classList.add("background");
        this.setState({
            agreeToTermsOfUse: false
        });
    }


    componentWillUnmount() {
        document.body.classList.remove("background");
    }


    handleSubmit = () => {
        if (this.state.agreeToTermsOfUse != false) {
            this.createNotification("success","filled")
            // this.props.nextStep();
        }
    }

    goBack = (e) => {
        e.preventDefault()
        this.props.previousStep()
    };

    _onChange = () => {
        if (this.state.agreeToTermsOfUse == false) {
            this.setState({ agreeToTermsOfUse: true });
            this.props.changeHandler2(agreeToTermsOfUse, true)

        } else {
            this.setState({ agreeToTermsOfUse: false });
            this.props.changeHandler2(agreeToTermsOfUse, false)
        }
    }

  
    createNotification = (type, className) => {
        let cName = className || "";
        return (NotificationManager.success(
            "You've been registred",
            "Well done",
            3000,
            null,
            null,
            cName)
        )
    }



    render() {

        return (
            <Fragment>
                <Form onSubmit={this.handleSubmit}>
                    <p className="">
                        Qu'est-ce que le Lorem Ipsum?
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition
                        et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard
                         de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla
                          ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
                           Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique
                           informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans
                           les années 1960 grâce à la vente de feuilles Letraset contenant des passages
                           du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications
                           de mise en page de texte, comme Aldus PageMaker.
                </p>


                    {/* User agrement */}

                    <Colxx sm={8} className="offset-5 mt-3 mb-3">
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

                    {/* //------------------------Previous Button ------------------------// */}

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


                        {/* //------------------------Register Button ------------------------// */}

                        <Colxx sm={4} className="offset-2">
                            <Button
                                type='submit'
                                color="primary"
                                className="btn-shadow"
                                size="lg">
                                <IntlMessages id="user.register" />
                            </Button>{" "}
                        </Colxx>
                    </Row>
                </Form>
            </Fragment>
        );
    }
}
