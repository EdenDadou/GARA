import React, { Component } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { CardTitle, InputGroup, CustomInput, Row, Label, Button, CardBody, Card } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx } from "../../../components/common/CustomBootstrap";
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';




class AddVideo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: '',
            price: '',
            uploadedFile: null,
            fileName: ''
        };
    }

    changeHandler2 = input => e => {
        this.setState({ [input]: e.target.value });
    }


    handleChangelanguage = language => {
        this.setState({ language: language });
    };

    onChangeHandler = event => {

        console.log(event.target.files[0])
        this.setState({ uploadedFile: event.target.files[0] })
        this.setState({ fileName: event.target.files[0].name })
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    onClickUploadVideo = () =>{

////////////// A COMPLETER AVEC la fontion pour UPLOAD les videos //////////////


        // let Token = localStorage.getItem('Token')
        // let Ebook = { 
        //     file : this.state.uploadedFile, 
        //     title: this.state.ebookTitle, 
        //     description : this.state.description,
        //     language : this.state.language,
        //     price : this.state.price,
        //     numberOfPages : this.state.numPages
        // }
        // console.log(Ebook)
        // PostVideo(Token, Video)
        // .then(res =>{console.log(res)})
        // .catch(err =>{console.log(err)})

    }

    render() {

        return (
            <Row className="h-100">
                <Colxx xxs="6" className="mx-auto my-auto">
                    <Card className="auth-card">

                        <div className="form-side">

                            <CardTitle className="mb-4">
                                <IntlMessages id="menu.video.add" />
                            </CardTitle>
                            <Card>
                                <CardBody className="wizard wizard-default">

                                    <AvForm className="av-tooltip">
                                        <Row>

                                            {/* -------- Song Title--------- */}

                                            <Colxx sm={10} className="offset-1">
                                                <AvGroup className="has-float-label tooltip-right-bottom">
                                                    <Label>Title</Label>
                                                    <AvField name="title"
                                                        type="text"
                                                        onChange={this.changeHandler2('title')}
                                                        value={this.state.title}
                                                        validate={{
                                                            required: { value: true, errorMessage: 'Please enter the title of your video' },
                                                            minLength: { value: 2, errorMessage: 'Your name must be between 2 and 16 characters' },
                                                            maxLength: { value: 30, errorMessage: 'Your name must be between 2 and 16 characters' }
                                                        }} />
                                                </AvGroup>
                                            </Colxx>

                                            {/* -------- Description--------- */}

                                            <Colxx sm={10} className="offset-1">
                                                <AvGroup className="has-float-label tooltip-right-bottom">
                                                    <Label>Desciption</Label>
                                                    <AvField
                                                        name="description"
                                                        onChange={this.changeHandler2('description')}
                                                        style={{ maxHeight: 120, minHeight: 120 }}
                                                        validate={{
                                                            required: { value: true, errorMessage: 'Please enter a video description' },
                                                            minLength: { value: 10, errorMessage: 'Description must be between 20 and 100 characters' },
                                                            maxLength: { value: 100, errorMessage: 'Your name must be between 20 and 100 characters' }
                                                        }} />
                                                </AvGroup>
                                            </Colxx>

                                            {/* ------------Upload Video-------- */}

                                            <Colxx sm={10} className="offset-1">
                                                <InputGroup>
                                                    <CustomInput
                                                        type="file"
                                                        id="PDF"
                                                        name="PDFupload"
                                                        onChange={this.onChangeHandler}
                                                        label={this.state.fileName}
                                                    />
                                                </InputGroup>
                                            </Colxx>
                          

                                            {/* ------------Price-------- */}

                                            <Colxx sm={10} className="offset-1 mt-3" >
                                                <AvGroup className="has-float-label tooltip-right-bottom">
                                                    <Label>Price</Label>
                                                    <AvField name="price"
                                                        type="text"
                                                        onChange={this.changeHandler2('price')}
                                                        value={this.state.price}/>
                                                </AvGroup>
                                            </Colxx>


                                        </Row>
                                            <Button className="button-center space-between"
                                            onClick={this.onClickUploadVideo}>Upload Video</Button>
                                    </AvForm>
                                </CardBody>
                            </Card>
                        </div >
                    </Card >
                </Colxx >

                <Colxx xxs="6" className="mx-auto my-auto">
                    <Card className="auth-card">

                        <div className="form-side">

                            <CardTitle className="mb-4">
                                <IntlMessages id="menu.ebooks.preview" />
                            </CardTitle>
                            <Card>
                                <CardBody className="wizard wizard-default height700">
                                    <div>
                                        
                                    </div>
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
    )(AddVideo)
);
