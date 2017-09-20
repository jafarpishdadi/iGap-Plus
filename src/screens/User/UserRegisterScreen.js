/**
 * @flow
 */

import React, {Component} from 'react';
import UserRegisterComponent from '../../components/User/Register';
import {integerValidator, regexValidator, requiredValidator} from '../../utils/validator';
import countries from '../../constants/country/index';
import {LOCALES} from '../../constants/locale';
import {Text} from 'react-native';
import {ListItem} from '../../components/BaseUI/index';
import {injectIntl, intlShape} from 'react-intl';
import i18n from '../../i18n/index';
import Api from '../../modules/Api/index';
import {INFO_COUNTRY, INFO_LOCATION, USER_REGISTER} from '../../constants/methods/index';
import {InfoCountry, InfoLocation, UserRegister} from '../../modules/Proto/index';
import {goUserVerifyScreen} from '../../navigators/AppNavigator';
import {setAuthorHash, setUserId} from '../../utils/app';
import {changeLocale, getUserLocale} from '../../utils/locale';

const rules = {
  phoneNumber: [
    {validate: requiredValidator},
    {validate: integerValidator},
  ],
};
let phoneNumberRegexValidate;
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
        this.setState((prevState) => {
          if (!prevState.countryCode) {
            phoneNumberRegexValidate = {
              validate: regexValidator, options: {
                pattern: response.getRegex(),
              },
            };
            return {
              countryCode: response.getIsoCode(),
              callingCode: '+' + response.getCallingCode(),
            };
          }
          return prevState;
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
      }, this._onCountryCodeChange);
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
        }, this._onCountryCodeChange);
      }
    });
  }

  _onCountryCodeChange = async () => {
    const {countryCode} = this.state;

    const infoCountry = new InfoCountry();
    infoCountry.setIsoCode(countryCode);

    try {
      const response = await Api.invoke(INFO_COUNTRY, infoCountry);
      phoneNumberRegexValidate = {
        validate: regexValidator, options: {
          pattern: response.getRegex(),
        },
      };
    } catch (e) {

    }
  }

  handleFormData = async (formData, setError) => {
    const {countryCode, callingCode} = this.state;
    const data = {
      phoneNumber: formData.phoneNumber,
      countryCode,
    };

    try {
      if (phoneNumberRegexValidate) {
        await phoneNumberRegexValidate.validate(formData.phoneNumber, phoneNumberRegexValidate.options);
      }

      const userRegister = new UserRegister();
      userRegister.setPhoneNumber(parseInt(data.phoneNumber, 10));
      userRegister.setCountryCode(data.countryCode);
      const response = await Api.invoke(USER_REGISTER, userRegister);

      await setUserId(response.getUserId());
      await setAuthorHash(response.getAuthorHash());
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
      setError('phoneNumber', e.name + ': ' + e.message);
    }
  }

  selectNewLocale = (locale) => {
    changeLocale(locale);
  }

  render() {
    const {intl} = this.props;
    const {phoneNumber, callingCode, countryCode, phoneNumberError} = this.state;
    const formData = {phoneNumber, callingCode, countryCode};
    const countryList = [];
    const localesList = [];

    Object.keys(LOCALES).map((locale) => {
      localesList.push({
        key: locale,
        value: LOCALES[locale].en,
        element: (<ListItem centerElement={{primaryText: LOCALES[locale].en}} rightElement={<Text>{LOCALES[locale].native}</Text>}
          style={{container: {backgroundColor: 'transparent', paddingLeft: 0}}}/>),
        filter: locale,
      });
    });
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

    const defaultLocale = getUserLocale();
    return (
      <UserRegisterComponent
        formRules={rules}
        formData={formData}
        countryList={countryList}
        handleFormData={this.handleFormData}
        onSelectCountry={this.onSelectCountry}
        onChangeCallingCode={this.onChangeCallingCode}
        phoneNumberError={phoneNumberError}
        localesList={localesList}
        selectNewLocale={this.selectNewLocale}
        defaultLocale={defaultLocale}
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