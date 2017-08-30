/**
 * @flow
 */

import React, {Component} from 'react';
import UserRegisterComponent from '../../components/User/Register';
import {integerValidator, regexValidator, requiredValidator} from '../../utils/validator';
import countries from '../../constants/country/index';
import {Text} from 'react-native';
import {ListItem} from '../../components/BaseUI/index';
import {injectIntl, intlShape} from 'react-intl';
import i18n from '../../i18n/index';
import Api from '../../modules/Api/index';
import {INFO_LOCATION, USER_REGISTER} from '../../constants/methods/index';
import {InfoLocation, UserRegister} from '../../modules/Proto/index';
import {goUserVerifyScreen} from '../../navigators/AppNavigator';
import {setAuthorHash, setUserId} from '../../utils/app';

const rules = {
  phoneNumber: [
    {validate: requiredValidator},
    {validate: integerValidator},
  ],
};

class UserRegisterScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countryCode: '',
      callingCode: '',
      phoneNumber: '',
    };
  }

  componentDidMount() {
    let infoLocation = new InfoLocation();
    Api.invoke(INFO_LOCATION, infoLocation)
      .then((response) => {
        this.setState({
          countryCode: response.getIsoCode(),
          callingCode: '+' + response.getCallingCode(),
        });
        rules.phoneNumber.push({
          validate: regexValidator, options: {
            pattern: response.getRegex(),
          },
        });
      });
  }

  onSelectCountry = (key) => {
    const country = countries.find(function(country) {
      return key === country[0];
    });
    if (country) {
      this.setState({
        countryCode: country[0],
        callingCode: country[1],
      });
    }
  }

  onChangeCallingCode = (code) => {
    this.setState({callingCode: code}, function() {
      const country = countries.find(function(country) {
        return code === country[1];
      });
      if (country) {
        this.setState({
          countryCode: country[0],
        });
      }
    });
  }

  handleFormData = async (formData) => {
    const {intl} = this.props;
    const {countryCode, callingCode} = this.state;
    const data = {
      phoneNumber: formData.phoneNumber,
      countryCode,
    };
    try {
      const userRegister = new UserRegister();
      userRegister.setPhoneNumber(parseInt(data.phoneNumber));
      userRegister.setCountryCode(data.countryCode);
      const response = await Api.invoke(USER_REGISTER, userRegister);

      setUserId(response.getUserId());
      setAuthorHash(response.getAuthorHash());
      goUserVerifyScreen(
        callingCode + ' ' + data.phoneNumber,
        response.getUsername(),
        response.getMethod(),
        response.getResendDelay(),
        [],
        response.getVerifyCodeRegex(),
        response.getVerifyCodeDigitCount(),
        data);
    } catch (e) {
      // TODO COMPLETE ERRORS
      this.setState({phoneNumberError: e.name + ': ' + e.message});
    }
  }

  render() {
    const {intl} = this.props;
    const {phoneNumber, callingCode, countryCode, phoneNumberError} = this.state;
    const formData = {phoneNumber, callingCode, countryCode};
    const countryList = [];

    countries.map((country) => {
      let id = 'country' + country[0];
      let countryName = intl.formatMessage(i18n[id]);
      let countryCode = country.slice(1).join();
      countryList.push({
        key: country[0],
        value: countryName,
        element: (<ListItem centerElement={{primaryText: countryName}} rightElement={<Text>{countryCode}</Text>}
          style={{container: {backgroundColor: 'transparent', paddingLeft: 0}}}/>),
        filter: countryName.toLowerCase() + ',' + countryCode,
      });
    });

    return (
      <UserRegisterComponent
        formRules={rules}
        formData={formData}
        countryList={countryList}
        handleFormData={this.handleFormData}
        onSelectCountry={this.onSelectCountry}
        onChangeCallingCode={this.onChangeCallingCode}
        phoneNumberError={phoneNumberError}
      />
    );
  }
}

UserRegisterScreen.propTypes = {
  intl: intlShape.isRequired,
};
const RegisterIntl = injectIntl(UserRegisterScreen);
RegisterIntl.navigationOptions = {
  header: null,
};
export default RegisterIntl;