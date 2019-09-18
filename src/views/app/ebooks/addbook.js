import React, { Component } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { CardTitle, InputGroup, InputGroupAddon, CustomInput, Row, Label, Button, CardBody, Card } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx } from "../../../components/common/CustomBootstrap";
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';
import Select from "react-select";
import CustomSelectInput from "../../../components/common/CustomSelectInput";
import {PostBook} from "../../../services/Upload"
import { pdfjs, Document, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



class AddEbook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ebookTitle: "",
            description: '',
            language: '',
            NbOfPages: '',
            price: '',
            uploadedFile: null,
            numPages: null,
            pageNumber: 1,
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

    onClickUploadEbook = () =>{
        let Token = localStorage.getItem('Token')
        let Ebook = { 
            file : this.state.uploadedFile, 
            title: this.state.ebookTitle, 
            description : this.state.description,
            language : this.state.language,
            price : this.state.price,
            numberOfPages : this.state.numPages
        }
        console.log(Ebook)
        PostBook(Token, Ebook)
        .then(res =>{console.log(res)})
        .catch(err =>{console.log(err)})

    }

    render() {
        console.log(localStorage.getItem('Token'))
        const LANGUAGES = [
            { value: 'English', label: 'English', key: 1 },
            { value: 'Francais', label: 'Francais', key: 2 },
            { value: 'Espanol', label: 'Espanol', key: 3 },
            { value: 'Portugais', label: 'Portugais', key: 4 },
            { value: 'Arabia', label: 'Arabia', key: 5 },
            { value: 'Wolof', label: 'Wolof', key: 6 },
            { value: 'Lingala', label: 'Lingala', key: 7 },
        ]

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

                                    <AvForm className="av-tooltip">
                                        <Row>

                                            {/* -------- Ebooks Title--------- */}

                                            <Colxx sm={10} className="offset-1">
                                                <AvGroup className="has-float-label tooltip-right-bottom">
                                                    <Label>Title</Label>
                                                    <AvField name="ebookTitle"
                                                        type="text"
                                                        onChange={this.changeHandler2('ebookTitle')}
                                                        value={this.state.ebookTitle}
                                                        validate={{
                                                            required: { value: true, errorMessage: 'Please enter your ebook title' },
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
                                                            required: { value: true, errorMessage: 'Please enter your company description' },
                                                            minLength: { value: 10, errorMessage: 'Description must be between 20 and 100 characters' },
                                                            maxLength: { value: 100, errorMessage: 'Your name must be between 20 and 100 characters' }
                                                        }} />
                                                </AvGroup>
                                            </Colxx>

                                            {/* ------------Upload Book-------- */}

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
                                            {/* ------------Language-------- */}

                                            <Colxx sm={10} className="offset-1">
                                                <AvGroup className="mb-3">
                                                    <Label className="form-group has-float-label size-1rem">
                                                        <IntlMessages id="user.languague" />
                                                    </Label>
                                                    <Select
                                                        required
                                                        components={{ Input: CustomSelectInput }}
                                                        className="react-select"
                                                        classNamePrefix="react-select"
                                                        value={this.state.language}
                                                        onChange={this.handleChangelanguage}
                                                        options={LANGUAGES} />
                                                </AvGroup>
                                            </Colxx>

                                            {/* ------------NbOfPage-------- */}

                                            <Colxx sm={5} className="offset-1">
                                                <AvGroup className="has-float-label tooltip-right-bottom">
                                                    <Label>Numbers Of Pages</Label>
                                                    <AvField name="NbOfPages"
                                                        type="text"
                                                        onChange={this.changeHandler2('NbOfPages')}
                                                        value={this.state.numPages}
                                                        validate={{
                                                            required: { value: true, errorMessage: 'Please enter your ebook number of page' },
                                                        }} />
                                                </AvGroup>
                                            </Colxx>

                                            {/* ------------Price-------- */}

                                            <Colxx sm={5} >
                                                <AvGroup className="has-float-label tooltip-right-bottom">
                                                    <Label>Price</Label>
                                                    <AvField name="price"
                                                        type="text"
                                                        onChange={this.changeHandler2('price')}
                                                        value={this.state.price}
                                                        validate={{
                                                            required: { value: true, errorMessage: 'Please enter your ebook price' },
                                                        }} />
                                                </AvGroup>
                                            </Colxx>
                                            <Button
                                            onClick={this.onClickUploadEbook}>Upload Ebook</Button>
                                        </Row>
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
                                        <Document
                                            file={this.state.uploadedFile}
                                            onLoadSuccess={this.onDocumentLoadSuccess}>

                                            <Page
                                                className={"EbookStyle"}
                                                height={550}
                                                size="A9"
                                                pageNumber={this.state.pageNumber} />
                                            <Row className="space-between mt-4 mb-3">
                                                <Button onClick={() => this.setState(prevState => ({ pageNumber: prevState.pageNumber - 1 }))}>
                                                    Previous page
                                            </Button>
                                                <Button onClick={() => this.setState(prevState => ({ pageNumber: prevState.pageNumber + 1 }))}>
                                                    Next page
                                            </Button>
                                            </Row>
                                        </Document>
                                        {this.state.uploadedFile!==null?(<p>Page {this.state.pageNumber} of {this.state.numPages}</p>):(<p></p>)}
                                        
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
    )(AddEbook)
);
