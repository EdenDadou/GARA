import React, { Component } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { TabContent, TabPane, Nav, NavItem, NavLink, CardTitle, CardText, Col, Row, Label, Button, CardBody, Card, FormGroup, Popover, PopoverBody } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import classnames from 'classnames';
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';
import Select from "react-select";
import CustomSelectInput from "../../components/common/CustomSelectInput";
import { getCountries } from "../../services/Country";
import { GetCompanyById } from "../../services/Company";
import { CompanyItemsChange, getCompaniesList } from "../../redux/actions";




//----------Stock service variables----------//
let APIcountrieslist = []
let countrylist = []


class EditCompany extends Component {
    constructor(props) {
        super(props);

        this.state = {
            companyName: '',
            description: '',
            adress: '',
            country: '',
            phoneNumber: localStorage.getItem('PhoneNumber'),
            country: '',
            zipCode: '',
            city: '',
        };
    }

    componentWillMount() {
        let token = localStorage.getItem('Token')
        let IDCompany = localStorage.getItem('IDCompanyToEdit')
        console.log(IDCompany)
        let IDCompamy2 = localStorage.getItem('IDCompany')
        console.log(IDCompamy2)
        this.getCountrylistFromAPI()
        GetCompanyById(token, IDCompany)
            .then(res => {
                // console.log(res)
                this.setState({ companyName: res.data.name, description: res.data.description, adress: res.data.adress, city: res.data.city })
            })
            .catch(err => { console.log(err) })

    }


    //---------Service country and operator --------// 

    /*Get country and store them*/
    async getCountrylistFromAPI() {
        await getCountries()
            .then((array) => {
                /*---Convert the list get from the back end to ahave the correct format with the index---*/
                countrylist.push(...array.map(({ name }, index) => ({ label: name, value: name, key: index })));
                array.forEach((country) => { APIcountrieslist.push(country) });

                /*--Update the state to put the new format of the list---*/
                this.setState({
                    countrylist: countrylist
                });
            });
    }



    // -------Handle field change-----------//
    changeHandler = (input, value) => {
        this.setState({ [input]: value })
    }

    changeHandler2 = input => e => {
        this.setState({ [input]: e.target.value });
    }

    handleChangeCountry = country => {
        this.setState({ selectedCountry: country });
        this.setState({ country: APIcountrieslist[country.key] });
    };

    SaveCompany = () => {
        if (this.state.companyName !== ''
            && this.state.description !== ''
            && this.state.adress !== ''
            && this.state.zipCode !== ''
            && this.state.city !== ''
            && this.state.country !== '') {

            let changedCompany =
            {
                "adress": this.state.adress,
                "city": this.state.city,
                "country": this.state.country,
                "description": this.state.description,
                "name": this.state.companyName
            }
            console.log(changedCompany)
            localStorage.setItem('onProcess', false)
            this.props.CompanyItemsChange(changedCompany)
            localStorage.setItem('onProcess', false)
            this.props.getCompaniesList()
            localStorage.removeItem('IDCompanyToEdit')

            setTimeout(() => {
                this.props.history.push('/app/company')
            }, (this.props.loading === false && 1000))
        }



    }



    render() {
        console.log(this.props)
        const COUNTRY = this.state.countrylist
        return (
            <Row className="h-100">
                <Colxx xxs="12" md="10" className="mx-auto my-auto">
                    <Card className="auth-card">

                        <div className="form-side">

                            <CardTitle className="mb-4">
                                <IntlMessages id="edit.company" />
                            </CardTitle>
                            <Card>
                                <CardBody className="wizard wizard-default">
                                    <div className="wizard-basic-step">
                                        <AvForm className="av-tooltip">
                                            <Row>

                                                {/* -------- Company Name--------- */}

                                                <Colxx sm={8} className="offset-2 mt-5">
                                                    <AvGroup className="has-float-label tooltip-right-bottom">
                                                        <Label>Company Name</Label>
                                                        <AvField name="companyName"
                                                            type="text"
                                                            onChange={this.changeHandler2('companyName')}
                                                            value={this.state.companyName}
                                                            validate={{
                                                                required: { value: true, errorMessage: 'Please enter your company name' },
                                                                minLength: { value: 2, errorMessage: 'Your name must be between 2 and 16 characters' },
                                                                maxLength: { value: 30, errorMessage: 'Your name must be between 2 and 16 characters' }
                                                            }} />
                                                    </AvGroup>
                                                </Colxx>

                                                {/* -------- Description--------- */}

                                                <Colxx sm={8} className="offset-2 mt-3">
                                                    <AvGroup className="has-float-label tooltip-right-bottom">
                                                        <Label>Desciption</Label>
                                                        <AvField
                                                            name="Desciption"
                                                            onChange={this.changeHandler2('description')}
                                                            value={this.state.description}
                                                            style={{ maxHeight: 130, minHeight: 130 }}
                                                            validate={{
                                                                required: { value: true, errorMessage: 'Please enter your company description' },
                                                                minLength: { value: 10, errorMessage: 'Description must be between 20 and 100 characters' },
                                                                maxLength: { value: 100, errorMessage: 'Your name must be between 20 and 100 characters' }
                                                            }} />
                                                    </AvGroup>
                                                </Colxx>

                                                {/* ---------country--------- */}

                                                <Colxx sm={8} className="offset-2">
                                                    <FormGroup className="mb-3 mt-0">
                                                        <Label className="form-group has-float-label size-1rem">
                                                            <IntlMessages id="user.country" />
                                                        </Label>
                                                        <Select
                                                            required
                                                            components={{ Input: CustomSelectInput }}
                                                            className="react-select"
                                                            classNamePrefix="react-select"
                                                            value={this.state.selectedCountry}
                                                            onChange={this.handleChangeCountry}
                                                            options={COUNTRY} />
                                                    </FormGroup>
                                                </Colxx>

                                                {/* ---------Adress-------- */}

                                                <Colxx sm={8} className="offset-2 mt-3">
                                                    <AvGroup className="has-float-label tooltip-left-bottom">
                                                        <Label>Adresse</Label>
                                                        <AvField name="adress"
                                                            type="text"
                                                            onChange={this.changeHandler2('adress')}
                                                            value={this.state.adress}
                                                            validate={{
                                                                required: { value: true, errorMessage: 'Please enter your adress' },
                                                            }} />
                                                    </AvGroup>
                                                </Colxx>

                                                {/* ---------ZipCode--------- */}

                                                <Colxx sm={3} className="offset-2">
                                                    <AvGroup className="has-float-label tooltip-center-bottom">
                                                        <Label>ZipCode</Label>
                                                        <AvField name="zipCode"
                                                            type="text"
                                                            onChange={this.changeHandler2('zipCode')}
                                                            value={this.state.zipCode}
                                                            validate={{
                                                                required: { value: true, errorMessage: 'Please enter your zipCode' },
                                                            }} />
                                                    </AvGroup>
                                                </Colxx>

                                                {/* ---------City--------- */}

                                                <Colxx sm={5}>
                                                    <AvGroup className="has-float-label error-l-100">
                                                        <Label>City</Label>
                                                        <AvField
                                                            name="city"
                                                            onChange={this.changeHandler2('city')}
                                                            value={this.state.city}
                                                            validate={{
                                                                required: { value: true, errorMessage: 'Please enter your city' },
                                                            }} />
                                                    </AvGroup>
                                                </Colxx>

                                                <Button className="button-center mt-3" onClick={this.SaveCompany}> Save changement</Button>


                                            </Row>
                                        </AvForm>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Card>
                </Colxx>
            </Row>
        );
    }
}

const mapStateToProps = ({ companyList }) => {
    const { item, loading } = companyList;
    return { item, loading, companyList }
};
export default injectIntl(connect(mapStateToProps, { CompanyItemsChange, getCompaniesList })(EditCompany));
