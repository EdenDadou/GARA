import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import {
  Row, Button, UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Collapse,
  ButtonDropdown,
  CustomInput
} from "reactstrap";
import { NavLink } from 'react-router-dom'

import IntlMessages from "../../helpers/IntlMessages";
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import Breadcrumb from "../../containers/navs/Breadcrumb";

import {
  getCompaniesList, selectedCompanyItemsChange
} from "../../redux/actions";
import CompanyListItems from "../../components/applications/CompanyListItems";
import SurveyApplicationMenu from "../../containers/applications/SurveyApplicationMenu";
import { DeveloperInfo } from "../../services/Developer";
import { UpdateCurrentCompany, DeleteCompany } from "../../services/Company";
import { VerifToken } from "../../services/Developer";

class Company extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownSplitOpen: false,
      lastChecked: null,

      displayOptionsIsOpen: false,
      token: localStorage.getItem('Token'),
      allCompanies: '',
      IDCompaniesArray: [],
      IDcurrentWorkingCompany: '',
      activated: ''
    };
  }
  componentDidMount() {
    localStorage.setItem('onProcess', false)
    this.props.getCompaniesList()

    let token = localStorage.getItem('Token');
    let UserID = localStorage.getItem('UserID');
    DeveloperInfo(token, UserID)
      .then(res => {
        this.setState({ IDcurrentWorkingCompany: res.data.currentWorkingCompany.companyId, activated: res.data.currentWorkingCompany.activated })
        if (this.state.activated === true) {
          localStorage.setItem('CurrentWorkingCompany', true)
        } else if (this.state.activated === false) {
          localStorage.setItem('CurrentWorkingCompany', false)
        }
      })
      .catch(err => { console.log(err) })

  }

  useThatCompany = () => {
    let token = localStorage.getItem('Token');
    let id = this.state.lastChecked;
    UpdateCurrentCompany(token, id)
      .then(res => {
        window.location.reload()
      })
      .catch(err => { console.log(err) })
  }

  deleteThatCompany = () => {
    if (this.props.companyList.selectedItems.length < 2) {
      let token = localStorage.getItem('Token');
      let id = this.state.lastChecked;
      DeleteCompany(token, id)
        .then(res => { window.location.reload() })
        .catch(err => { console.log(err) })
    }
  }

  editCompany = ()=>{
    localStorage.setItem('IDCompanyToEdit', this.props.companyList.selectedItems[0])
    this.props.history.push('/app/editcompany')

  }


  handleCheckChange = (event, companyId) => {
    if (this.state.lastChecked == null) {
      this.setState({
        lastChecked: companyId
      });
    }
    let selectedItems = Object.assign(
      [],
      this.props.companyList.selectedItems
    );
    if (selectedItems.includes(companyId)) {
      selectedItems = selectedItems.filter(x => x !== companyId);
    } else {
      selectedItems.push(companyId);
    }
    this.props.selectedCompanyItemsChange(selectedItems);

    if (event.shiftKey) {
      var items = this.props.companyList.allCompanyItems;
      var start = this.getIndex(companyId, items, "companyId");
      var end = this.getIndex(this.state.lastChecked, items, "companyId");
      items = items.slice(Math.min(start, end), Math.max(start, end) + 1);
      selectedItems.push(
        ...items.map(item => {
          return item.companyId;
        })
      );
      selectedItems = Array.from(new Set(selectedItems));
      this.props.selectedCompanyItemsChange(selectedItems);
    }
    return;
  };

  handleChangeSelectAll = () => {
    if (!this.props.companyList.loading) {
      if (
        this.props.companyList.selectedItems.length >=
        this.props.companyList.allCompanyItems.length
      ) {
        this.props.selectedCompanyItemsChange([]);
      } else {
        this.props.selectedCompanyItemsChange(
          this.props.companyList.allCompanyItems.map(x => x.companyId)
        );
      }
    }
  };

  toggleDisplayOptions = () => {
    this.setState({ displayOptionsIsOpen: !this.state.displayOptionsIsOpen });
  };

  toggleSplit = () => {
    this.setState(prevState => ({
      dropdownSplitOpen: !prevState.dropdownSplitOpen
    }));
  };



  render() {
    const { loading, allCompanyItems, selectedItems } = this.props.companyList;
    if (allCompanyItems !== undefined) {
      console.log('activated', this.state.activated)
      console.log('valur of CurrentworkingCompany', localStorage.getItem('CurrentWorkingCompany'))

    }
    return (
      <Fragment>
        <Row className="app-row survey-app">
          <Colxx xxs="12">
            <div className="mb-2">
              <h1>
                <IntlMessages id="menu.company" />
              </h1>
              {!loading && allCompanyItems !== undefined && (
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
                  <ButtonDropdown
                    isOpen={this.state.dropdownSplitOpen}
                    toggle={this.toggleSplit}
                  >
                    <div className="btn btn-primary btn-lg pl-4 pr-0 check-button check-all">
                      <CustomInput
                        className="custom-checkbox mb-0 d-inline-block"
                        type="checkbox"
                        id="checkAll"
                        checked={selectedItems.length >= allCompanyItems.length}
                        onClick={() => this.handleChangeSelectAll()}
                        onChange={() => this.handleChangeSelectAll()}
                        label={
                          <span
                            className={`custom-control-label ${
                              selectedItems.length > 0 &&
                                selectedItems.length < allCompanyItems.length
                                ? "indeterminate"
                                : ""
                              }`}
                          />
                        }
                      />
                    </div>
                    <DropdownToggle
                      caret
                      color="primary"
                      className="dropdown-toggle-split btn-lg"
                    />
                    <DropdownMenu right>
                      <DropdownItem
                        onClick={this.useThatCompany}>
                        <IntlMessages id="company.use" />
                      </DropdownItem>
                        <DropdownItem
                        onClick={this.editCompany}>
                          <IntlMessages id="company.edit" />
                        </DropdownItem>
                      <DropdownItem
                        onClick={this.deleteThatCompany}>
                        <IntlMessages id="company.delete" />
                      </DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
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
            <Row>
              {!loading && this.props.companyList.allCompanyItems !== undefined ? (
                allCompanyItems.map((item, index) => {
                  return (
                    <CompanyListItems
                      key={index}
                      item={item}
                      CWC={this.state.IDcurrentWorkingCompany}
                      handleCheckChange={this.handleCheckChange}
                      isSelected={!loading ? selectedItems.includes(item.companyId) : false}
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
const mapStateToProps = ({ companyList }) => {
  return {
    companyList
  };
};
export default injectIntl(
  connect(
    mapStateToProps,
    {
      getCompaniesList,
      selectedCompanyItemsChange
    }
  )(Company)
);
