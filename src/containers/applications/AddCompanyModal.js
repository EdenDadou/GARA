import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Modal,
  ModalHeader,
  Label, FormGroup,
  CardBody, Row
} from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { Wizard, Steps, Step } from 'react-albus';
import { BottomNavigation } from "../../components/wizard/BottomNavigation";
import { TopNavigation } from "../../components/wizard/TopNavigation";

import { Colxx } from "../../components/common/CustomBootstrap";
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';

import { addSurveyItem } from "../../redux/actions";

class AddCompanyModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      description: "",
      adress: "",
      zipCode: "",
      city: "",
      country: "",
    };
  }

  addNetItem = () => {
    const newItem = {
      title: this.state.title,
      label: this.state.label.value,
      labelColor: this.state.label.color,
      category: this.state.category.value,
      status: this.state.status
    };
    this.props.addSurveyItem(newItem);
    this.props.toggleModal();
    this.setState({
      title: "",
      label: {},
      category: {},
      status: "ACTIVE"
    });
  };

  hideNavigation() {
    this.setState({ bottomNavHidden: true, topNavDisabled: true });
  }


  /*Handle field change*/
  changeHandler = (input, value) => {
    this.setState({ [input]: value })
  }

  /*Handle field change*/
  changeHandler2 = input => e => {
    this.setState({ [input]: e.target.value });
  }

  onClickNext(goToNext, steps, step) {
    if (steps.length - 1 <= steps.indexOf(step)) {
      return;
    }
   
        goToNext();
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

  render() {
    const { modalOpen, toggleModal } = this.props;
    return (
      <Modal
      style={{height:"5000", width:"2000"}}
        isOpen={modalOpen}
        toggle={toggleModal}
        size='xl'
        centered
      >
        <ModalHeader toggle={toggleModal}>
          <IntlMessages id="add.company" />
        </ModalHeader>
        <CardBody className="wizard wizard-default">
          <Wizard>
            <TopNavigation className="justify-content-center" disableNav={true} />
            <Steps>
              <Step id="step1" name={"Description"}>
                <div className="wizard-basic-step">
                  <AvForm className="av-tooltip"
                    onSubmit={this.handleSubmit}>
                    <Row>

                      {/* -------- Company Name--------- */}

                      <Colxx sm={8} className="offset-2 mt-3">
                        <AvGroup className="has-float-label tooltip-right-bottom">
                          <Label>Company Name</Label>
                          <AvField name="companyName"
                            type="text"
                            onChange={this.changeHandler2('companyName')}
                            value={this.state.companyName}
                            validate={{
                              required: { value: true, errorMessage: 'Please enter your company name' },
                              pattern: { value: '^[A-Za-z]+$', errorMessage: 'Your name must be composed only with letters' },
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
                            // onChange={this.changeHandler2}
                            style={{ maxHeight: 130, minHeight: 130 }}
                          />
                        </AvGroup>
                      </Colxx>
                    </Row>
                  </AvForm>
                </div>
              </Step>

              <Step id="step2" name={"Adress"}>
                <div className="wizard-basic-step">

                  <AvForm>
                    <Row>
                      {/* ---------Adress-------- */}

                      <Colxx sm={8} className="offset-2 mt-3">
                        <AvGroup className="has-float-label tooltip-left-bottom">
                          <Label>Adresse</Label>
                          <AvField name="adress"
                            type="text"
                            onChange={this.changeHandler2('adress')}
                            value={this.state.lastName}
                            validate={{
                              required: { value: true, errorMessage: 'Please enter your last name' },
                              pattern: { value: '^[A-Za-z]+$', errorMessage: 'Your name must be composed only with letters' },
                              minLength: { value: 2, errorMessage: 'Your name must be between 2 and 16 characters' },
                              maxLength: { value: 16, errorMessage: 'Your name must be between 2 and 16 characters' }
                            }} />
                        </AvGroup>
                      </Colxx>

                      {/* ---------ZipCode--------- */}

                      <Colxx sm={3} className="offset-2">
                        <AvGroup className="has-float-label tooltip-center-bottom">
                          <Label>ZipCode</Label>
                          <AvField name="zipCode"
                            type="text"
                            onChange={this.changeHandler2('email')}
                            value={this.state.email}
                            validate={{
                              required: { value: true, errorMessage: 'Please enter your email address' },
                              email: { value: true, errorMessage: 'Please enter a valid email address' },
                            }} />
                        </AvGroup>
                      </Colxx>

                      {/* ---------City--------- */}

                      <Colxx sm={5} className="">
                        <AvGroup className="has-float-label error-l-100">
                          <Label>City</Label>
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
                      {/* ---------country--------- */}
                      <Colxx sm={8} className="offset-2 mb-3">
                        <AvGroup className="has-float-label error-l-100">
                          <Label>Country</Label>
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
                    </Row>
                  </AvForm>
                </div>
              </Step>
              <Step id="step3" name={"Registration"}>
                <div className="wizard-basic-step">
                  <AvForm className="av-tooltip"
                    onSubmit={this.handleSubmit}>
                    <Row>

                      {/* -------- Company Name--------- */}

                      <Colxx sm={8} className="offset-2 mt-3">
                        <AvGroup className="has-float-label tooltip-right-bottom">
                          <Label>Company Name</Label>
                          <AvField name="companyName"
                            type="text"
                            onChange={this.changeHandler2('companyName')}
                            value={this.state.companyName}
                            validate={{
                              required: { value: true, errorMessage: 'Please enter your company name' },
                              pattern: { value: '^[A-Za-z]+$', errorMessage: 'Your name must be composed only with letters' },
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
                            // onChange={this.changeHandler2}
                            style={{ maxHeight: 130, minHeight: 130 }}
                          />
                        </AvGroup>
                      </Colxx>
                    </Row>
                  </AvForm>
                </div>
              </Step>
            </Steps>
            <BottomNavigation onClickNext={this.onClickNext} onClickPrev={this.onClickPrev} className={"justify-content-center " + (this.state.bottomNavHidden && "invisible")} prevLabel={"Previous"} nextLabel={"Next"} />
          </Wizard>
        </CardBody>
      </Modal>
    );
  }
}

const mapStateToProps = ({ surveyListApp }) => {
  return {
    surveyListApp
  };
};
export default connect(
  mapStateToProps,
  {
    addSurveyItem
  }
)(AddCompanyModal);
