import React, { Component } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { CardTitle, Row, CardBody, Card } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx } from "../../../components/common/CustomBootstrap";




class MyMusic extends Component {
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
        console.log(localStorage.getItem('Token'))

        return (
            <Row className="h-100">
                <Colxx xxs="6" className="mx-auto my-auto">
                    <Card className="auth-card">

                        <div className="form-side">

                            <CardTitle className="mb-4">
                                <IntlMessages id="menu.music.mymusic" />
                            </CardTitle>
                            <Card>
                                <CardBody className="wizard wizard-default">
                                    <Row>
                                        {/* {!loading && this.props.companyList !== undefined ? (
                                            allMusicItems.map((item, index) => {
                                                return (
                                                    <BookListItems
                                                        key={index}
                                                        item={item}
                                                        handleCheckChange={this.handleCheckChange}
                                                        // isSelected={!loading ? selectedItems.includes(item.companyId) : false}
                                                    />
                                                );
                                            })
                                        ) : (
                                                <div className="loading" />
                                            )} */}
                                    </Row>

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
    )(MyMusic)
);
