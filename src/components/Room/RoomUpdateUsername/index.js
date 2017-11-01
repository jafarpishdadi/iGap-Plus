import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Text, View} from 'react-native';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import styleSheet from './index.styles';
import {RadioButton, Toolbar} from '../../BaseUI';
import i18n from '../../../i18n/index';
import Form from '../../BaseUI/Form/index';
import TextInputField from '../../BaseUI/Form/fields/TextInputField';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';

class RoomUpdateUsernameComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {intl, isPublic, username, formRules, onSelectRadioBtn, handleFormData, goBack} = this.props;
    const styles = this.getStyles();

    return (
      <View>
        <Toolbar
          leftElement="arrow-back"
          rightElement="check"
          onLeftElementPress={goBack}
          onRightElementPress={async () => {
            try {
              this.form.loadingOn();
              const data = await this.form.submit();
              await handleFormData(data, this.form.setError);
            } finally {
              this.form.loadingOff();
            }
          }}
          centerElement={intl.formatMessage(i18n.roomUpdateUsernameToolbarTitle)}/>

        <ScrollView style={styles.scroll}>
          <Form style={styles.form} control={(form) => {
            this.form = form;
          }}>

            <View style={styles.radioWrap}>
              <RadioButton
                value={0}
                checked={!isPublic}
                onSelect={onSelectRadioBtn}
                label={intl.formatMessage(i18n.roomUpdateUsernameRadioBtnPrivate)}
              />
              <RadioButton
                value={1}
                checked={isPublic}
                onSelect={onSelectRadioBtn}
                label={intl.formatMessage(i18n.roomUpdateUsernameRadioBtnPublic)}
              />
            </View>

            {isPublic ? (<View style={styles.usernameWrap}>
              <TextInputField
                isField={true}
                rules={formRules.username}
                name="username"
                defaultValue={username}
                label={intl.formatMessage(i18n.roomUpdateUsernameTitle)}
                placeholder={intl.formatMessage(i18n.roomUpdateUsernameTitle)}
              />
              <Text>
                <FormattedMessage {...i18n.roomUpdateUsernameDescription} />
              </Text>
            </View>) : null}

          </Form>
        </ScrollView>
      </View>
    );
  }
}

RoomUpdateUsernameComponent.propTypes = {
  intl: intlShape.isRequired,
  goBack: PropTypes.func.isRequired,
  isPublic: PropTypes.bool.isRequired,
  handleFormData: PropTypes.func.isRequired,
  formRules: PropTypes.object.isRequired,
};

export default injectIntl(RoomUpdateUsernameComponent);
