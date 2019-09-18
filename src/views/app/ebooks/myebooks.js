import React, { Component } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { CardTitle, InputGroup, InputGroupAddon, CustomInput, Row, Label, Button, CardBody, Card } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx } from "../../../components/common/CustomBootstrap";
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';
import Select from "react-select";
import CustomSelectInput from "../../../components/common/CustomSelectInput";
import { pdfjs, Document, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



class MyEbooks extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    changeHandler2 = input => e => {
        this.setState({ [input]: e.target.value });
    }


    handleChangelanguage = language => {
        this.setState({ language: language });
    };


    render() {

        return (
            <Row className="h-100">
                <Colxx xxs="6" className="mx-auto my-auto">
                    <Card className="auth-card">

                        <div className="form-side">

                            <CardTitle className="mb-4">
                                <IntlMessages id="menu.ebooks.add" />
                            </CardTitle>
                            <Card>
                                <CardBody className="wizard wizard-default">
                                    <Button>ok</Button>

                                </CardBody>
                            </Card>
                        </div >
                    </Card >
                </Colxx >
            </Row >
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
        }
    )(MyEbooks)
);
