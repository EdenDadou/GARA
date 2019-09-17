import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import {Row,Button,} from "reactstrap";
import { NavLink } from 'react-router-dom'

import IntlMessages from "../../helpers/IntlMessages";
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import Breadcrumb from "../../containers/navs/Breadcrumb";

import {
  getCompaniesList
} from "../../redux/actions";
import { GetAllCompanies} from "../../services/Company"
import CompanyListItems from "../../components/applications/CompanyListItems";
import SurveyApplicationMenu from "../../containers/applications/SurveyApplicationMenu";

class Company extends Component {
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
      displayOptionsIsOpen: false,
      token: localStorage.getItem('Token'),
      allCompanies :''
    };
  }
  componentDidMount() {
    localStorage.setItem('onProcess', false)
    this.props.getCompaniesList()
  }
  

  handleCheckChange = (event, id) => {
    if (this.state.lastChecked == null) {
      this.setState({
        lastChecked: id
      });
    }
  }

 

  toggleDisplayOptions = () => {
    this.setState({ displayOptionsIsOpen: !this.state.displayOptionsIsOpen });
  };


  render() {
    console.log(this.props.companyList)
    let allCompanies = this.props.companyList.allCompanyItems


    const {
      loading,
    } = this.props.companyList;
    return (
      <Fragment>
        <Row className="app-row survey-app">
          <Colxx xxs="12">
            <div className="mb-2">
              <h1>
                <IntlMessages id="menu.company" />
              </h1>
              {!loading && (
                <div className="text-zero top-right-button-container">
                  <NavLink className="text-white" to="/app/newcompany">
                    <Button
                      color="primary"
                      size="lg"
                      className="top-right-button mr-1"
                    >
                      <IntlMessages id="add.company" />
                    </Button>
                  </NavLink>
                </div>
              )}

              <Breadcrumb match={this.props.match} />
            </div>

            <div className="mb-2">
              <Button
                color="empty"
                className="pt-0 pl-0 d-inline-block d-md-none"
                onClick={this.toggleDisplayOptions}>
                <IntlMessages id="survey.display-options" />{" "}
                <i className="simple-icon-arrow-down align-middle" />
              </Button>
            </div>
            <Separator className="mb-5" />
            {/* <Row>
              {loading ? (
                surveyItems.map((item, index) => {
                  return (
                    <SurveyListItem
                      key={`${index}`}
                      item={item}
                      handleCheckChange={this.handleCheckChange}
                      isSelected={
                        loading ? selectedItems.includes(item.id) : false
                      }
                    />
                  );
                })
              ) : (
                  <div className="loading" />
                )}
            </Row> */}
            <Row>
              {!loading && allCompanies !==undefined ? (
                allCompanies.map((item, index) => {
                  return (
                    <CompanyListItems
                    key={`${index}`}
                    item={item}
                    handleCheckChange={this.handleCheckChange}
                    isSelected={
                      !loading ? allCompanies.includes(item.companyId) : false
                    }
                  />
                  );
                })
              ) : (
                  <div className="loading" />
                )}
            </Row>
          </Colxx>
        </Row>

        {loading && <SurveyApplicationMenu />}
      </Fragment>
    );
  }
}
const mapStateToProps = ({ surveyListApp, companyList }) => {
  return {
    surveyListApp, companyList
  };
};
export default injectIntl(
  connect(
    mapStateToProps,
    {
      getCompaniesList,
    }
  )(Company)
);
