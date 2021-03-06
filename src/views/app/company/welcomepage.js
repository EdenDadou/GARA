import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import {Row, Card, Jumbotron,Button, CardBody} from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import { NavLink } from 'react-router-dom'

class WelcomePage extends Component {

  render() {
   console.log(localStorage.getItem('Token'))
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <Breadcrumb heading="menu.jumbotron" match={this.props.match} />
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12" className="mb-4">
            <Card>
              <CardBody>
                <Jumbotron>
                  <h1 className="display-4">
                    <IntlMessages id="jumbotron.hello-world" />
                  </h1>
                  <p className="lead">
                    <IntlMessages id="jumbotron.lead" />
                  </p>
                  <hr className="my-4" />
                  <p>
                    <IntlMessages id="jumbotron.lead-detail" />
                  </p>
                  <p className="lead mb-0">
                    <NavLink className="text-white" to="/app/company/newcompany">
                    <Button
                      color="primary"
                      size="lg"
                      className="mt-3 mr-1"
                    >
                        <IntlMessages id="create.company" />
                    </Button>
                      </NavLink>
                  </p>
                </Jumbotron>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}

export default injectIntl(
  connect(
    null,
    null
  )(WelcomePage)
);
