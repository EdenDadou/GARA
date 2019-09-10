import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { Wizard, Steps, Step } from 'react-albus';
import {
  Row,
  Label,
  Button,
  CardBody
} from "reactstrap";

import { BottomNavigation } from "../../components/wizard/BottomNavigation";
import { TopNavigation } from "../../components/wizard/TopNavigation";

import { Colxx } from "../../components/common/CustomBootstrap";
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';



import {
  getSurveyList,
  getSurveyListWithOrder,
  getSurveyListSearch,
  selectedSurveyItemsChange
} from "../../redux/actions";


class NewCompany extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownSplitOpen: false,
      modalOpen: false,
      lastChecked: null,

      title: "",
      label: {},
      category: {},
      status: "ACTIVE",
      displayOptionsIsOpen: false
    };
  }
  componentDidMount() {
    this.props.getSurveyList();
  }

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

  toggleDisplayOptions = () => {
    this.setState({ displayOptionsIsOpen: !this.state.displayOptionsIsOpen });
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };

  toggleSplit = () => {
    this.setState(prevState => ({
      dropdownSplitOpen: !prevState.dropdownSplitOpen
    }));
  };

  changeOrderBy = column => {
    this.props.getSurveyListWithOrder(column);
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.props.getSurveyListSearch(e.target.value);
    }
  };

  handleCheckChange = (event, id) => {
    if (this.state.lastChecked == null) {
      this.setState({
        lastChecked: id
      });
    }

    let selectedItems = Object.assign(
      [],
      this.props.surveyListApp.selectedItems
    );
    if (selectedItems.includes(id)) {
      selectedItems = selectedItems.filter(x => x !== id);
    } else {
      selectedItems.push(id);
    }
    this.props.selectedSurveyItemsChange(selectedItems);

    if (event.shiftKey) {
      var items = this.props.surveyListApp.surveyItems;
      var start = this.getIndex(id, items, "id");
      var end = this.getIndex(this.state.lastChecked, items, "id");
      items = items.slice(Math.min(start, end), Math.max(start, end) + 1);
      selectedItems.push(
        ...items.map(item => {
          return item.id;
        })
      );
      selectedItems = Array.from(new Set(selectedItems));
      this.props.selectedSurveyItemsChange(selectedItems);
    }
    return;
  };
  handleChangeSelectAll = () => {
    if (this.props.surveyListApp.loading) {
      if (
        this.props.surveyListApp.selectedItems.length >=
        this.props.surveyListApp.surveyItems.length
      ) {
        this.props.selectedSurveyItemsChange([]);
      } else {
        this.props.selectedSurveyItemsChange(
          this.props.surveyListApp.surveyItems.map(x => x.id)
        );
      }
    }
  };

  getIndex(value, arr, prop) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][prop] === value) {
        return i;
      }
    }
    return -1;
  }
  render() {
    const {
      surveyItems,
      searchKeyword,
      loading,
      orderColumn,
      orderColumns,
      selectedItems
    } = this.props.surveyListApp;
    const { messages } = this.props.intl;
    const { modalOpen } = this.state;
    return (
      <Fragment>
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
      </Fragment>
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
      getSurveyList,
      getSurveyListWithOrder,
      getSurveyListSearch,
      selectedSurveyItemsChange
    }
  )(NewCompany)
);
