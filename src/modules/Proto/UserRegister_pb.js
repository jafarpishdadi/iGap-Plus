/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var Request_pb = require('./Request_pb.js');
var Response_pb = require('./Response_pb.js');
goog.exportSymbol('proto.proto.UserRegister', null, global);
goog.exportSymbol('proto.proto.UserRegisterResponse', null, global);
goog.exportSymbol('proto.proto.UserRegisterResponse.Method', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.UserRegister = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.UserRegister, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.UserRegister.displayName = 'proto.proto.UserRegister';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.UserRegister.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.UserRegister.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.UserRegister} msg The msg instance to transform.
 * @return {!Object}
 */
proto.proto.UserRegister.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && Request_pb.Request.toObject(includeInstance, f),
    phoneNumber: jspb.Message.getFieldWithDefault(msg, 2, 0),
    countryCode: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.UserRegister}
 */
proto.proto.UserRegister.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.UserRegister;
  return proto.proto.UserRegister.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.UserRegister} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.UserRegister}
 */
proto.proto.UserRegister.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Request_pb.Request;
      reader.readMessage(value,Request_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPhoneNumber(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.UserRegister.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.UserRegister.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.UserRegister} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.proto.UserRegister.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Request_pb.Request.serializeBinaryToWriter
    );
  }
  f = message.getPhoneNumber();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getCountryCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Request request = 1;
 * @return {?proto.proto.Request}
 */
proto.proto.UserRegister.prototype.getRequest = function() {
  return /** @type{?proto.proto.Request} */ (
    jspb.Message.getWrapperField(this, Request_pb.Request, 1));
};


/** @param {?proto.proto.Request|undefined} value */
proto.proto.UserRegister.prototype.setRequest = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.UserRegister.prototype.clearRequest = function() {
  this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.UserRegister.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 phone_number = 2;
 * @return {number}
 */
proto.proto.UserRegister.prototype.getPhoneNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.proto.UserRegister.prototype.setPhoneNumber = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string country_code = 3;
 * @return {string}
 */
proto.proto.UserRegister.prototype.getCountryCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.proto.UserRegister.prototype.setCountryCode = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.UserRegisterResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.UserRegisterResponse.repeatedFields_, null);
};
goog.inherits(proto.proto.UserRegisterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.UserRegisterResponse.displayName = 'proto.proto.UserRegisterResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.UserRegisterResponse.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.UserRegisterResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.UserRegisterResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.UserRegisterResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.proto.UserRegisterResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && Response_pb.Response.toObject(includeInstance, f),
    username: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    authorHash: jspb.Message.getFieldWithDefault(msg, 4, ""),
    method: jspb.Message.getFieldWithDefault(msg, 5, 0),
    resendDelay: jspb.Message.getFieldWithDefault(msg, 6, 0),
    smsNumberList: jspb.Message.getField(msg, 7),
    verifyCodeRegex: jspb.Message.getFieldWithDefault(msg, 8, ""),
    verifyCodeDigitCount: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.UserRegisterResponse}
 */
proto.proto.UserRegisterResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.UserRegisterResponse;
  return proto.proto.UserRegisterResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.UserRegisterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.UserRegisterResponse}
 */
proto.proto.UserRegisterResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Response_pb.Response;
      reader.readMessage(value,Response_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorHash(value);
      break;
    case 5:
      var value = /** @type {!proto.proto.UserRegisterResponse.Method} */ (reader.readEnum());
      msg.setMethod(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setResendDelay(value);
      break;
    case 7:
      var value = /** @type {!Array.<number>} */ (reader.readPackedUint64());
      msg.setSmsNumberList(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setVerifyCodeRegex(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVerifyCodeDigitCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.UserRegisterResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.UserRegisterResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.UserRegisterResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.proto.UserRegisterResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Response_pb.Response.serializeBinaryToWriter
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getAuthorHash();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getResendDelay();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getSmsNumberList();
  if (f.length > 0) {
    writer.writePackedUint64(
      7,
      f
    );
  }
  f = message.getVerifyCodeRegex();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getVerifyCodeDigitCount();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.proto.UserRegisterResponse.Method = {
  VERIFY_CODE_SMS: 0,
  VERIFY_CODE_SOCKET: 1,
  VERIFY_CODE_SMS_SOCKET: 2
};

/**
 * optional Response response = 1;
 * @return {?proto.proto.Response}
 */
proto.proto.UserRegisterResponse.prototype.getResponse = function() {
  return /** @type{?proto.proto.Response} */ (
    jspb.Message.getWrapperField(this, Response_pb.Response, 1));
};


/** @param {?proto.proto.Response|undefined} value */
proto.proto.UserRegisterResponse.prototype.setResponse = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.UserRegisterResponse.prototype.clearResponse = function() {
  this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.UserRegisterResponse.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.proto.UserRegisterResponse.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.proto.UserRegisterResponse.prototype.setUsername = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint64 user_id = 3;
 * @return {number}
 */
proto.proto.UserRegisterResponse.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.proto.UserRegisterResponse.prototype.setUserId = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string author_hash = 4;
 * @return {string}
 */
proto.proto.UserRegisterResponse.prototype.getAuthorHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.proto.UserRegisterResponse.prototype.setAuthorHash = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional Method method = 5;
 * @return {!proto.proto.UserRegisterResponse.Method}
 */
proto.proto.UserRegisterResponse.prototype.getMethod = function() {
  return /** @type {!proto.proto.UserRegisterResponse.Method} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.proto.UserRegisterResponse.Method} value */
proto.proto.UserRegisterResponse.prototype.setMethod = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint32 resend_delay = 6;
 * @return {number}
 */
proto.proto.UserRegisterResponse.prototype.getResendDelay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.proto.UserRegisterResponse.prototype.setResendDelay = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * repeated uint64 sms_number = 7;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.proto.UserRegisterResponse.prototype.getSmsNumberList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 7));
};


/** @param {!Array.<number>} value */
proto.proto.UserRegisterResponse.prototype.setSmsNumberList = function(value) {
  jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.proto.UserRegisterResponse.prototype.addSmsNumber = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


proto.proto.UserRegisterResponse.prototype.clearSmsNumberList = function() {
  this.setSmsNumberList([]);
};


/**
 * optional string verify_code_regex = 8;
 * @return {string}
 */
proto.proto.UserRegisterResponse.prototype.getVerifyCodeRegex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.proto.UserRegisterResponse.prototype.setVerifyCodeRegex = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional uint32 verify_code_digit_count = 9;
 * @return {number}
 */
proto.proto.UserRegisterResponse.prototype.getVerifyCodeDigitCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.proto.UserRegisterResponse.prototype.setVerifyCodeDigitCount = function(value) {
  jspb.Message.setField(this, 9, value);
};


goog.object.extend(exports, proto.proto);
