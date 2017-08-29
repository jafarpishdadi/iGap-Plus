import i18n from '../i18n/index';
import * as _ from 'lodash';

function _messageSelector(optionMessage, defaultMessage) {
  if (optionMessage) {
    return optionMessage;
  }
  return defaultMessage;
}

export const requiredValidator = function(value, options = {}) {
  return new Promise(function(resolve, reject) {
    if (value === '' || value === null || value === undefined) {
      reject(_messageSelector(options.message, i18n.errorRequired));
    } else {
      resolve();
    }
  });
};
export const numberValidator = function(value, options = {}) {
  return new Promise(function(resolve, reject) {
    if (typeof value !== 'number') {
      console.log('number Typer', typeof value);
      reject(_messageSelector(options.messageNumber, i18n.errorTypeNumber));

    } else if (_.has(options, 'min') && value < options.min) {
      reject(_messageSelector(options.errorNumberSmallMin, {...i18n.errorNumberSmallMin, values: {min: options.min}}));

    } else if (_.has(options, 'max') && value > options.max) {
      reject(_messageSelector(options.errorNumberBigMax, {...i18n.errorNumberBigMax, values: {max: options.max}}));

    } else {
      resolve();
    }
  });
};
export const stringValidator = function(value, options = {}) {
  return new Promise(function(resolve, reject) {
    if (typeof value !== 'string') {
      reject(_messageSelector(options.message, i18n.errorTypeString));

    } else if (_.has(options, 'min') && value.length < options.min) {
      reject(_messageSelector(options.errorStringLengthMin, {
        ...i18n.errorStringLengthMin,
        values: {min: options.min},
      }));

    } else if (_.has(options, 'max') && value.length > options.max) {
      reject(_messageSelector(options.errorStringLengthMax, {
        ...i18n.errorStringLengthMax,
        values: {max: options.max},
      }));

    } else {
      resolve();
    }
  });
};

export const regexValidator = function(value, options = {}) {
  return new Promise(function(resolve, reject) {
    if (options.pattern && typeof value && !value.match(options.pattern)) {
      reject(_messageSelector(options.message, i18n.errorRegexInvalid));
    } else {
      resolve();
    }
  });
};