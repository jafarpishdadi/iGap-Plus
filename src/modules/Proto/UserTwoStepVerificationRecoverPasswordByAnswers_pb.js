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
goog.exportSymbol('proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers', null, global);
goog.exportSymbol('proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse', null, global);

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
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.displayName = 'proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers';
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
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers} msg The msg instance to transform.
 * @return {!Object}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && Request_pb.Request.toObject(includeInstance, f),
    answerOne: jspb.Message.getFieldWithDefault(msg, 2, ""),
    answerTwo: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers;
  return proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setAnswerOne(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnswerTwo(value);
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
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Request_pb.Request.serializeBinaryToWriter
    );
  }
  f = message.getAnswerOne();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAnswerTwo();
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
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.prototype.getRequest = function() {
  return /** @type{?proto.proto.Request} */ (
    jspb.Message.getWrapperField(this, Request_pb.Request, 1));
};


/** @param {?proto.proto.Request|undefined} value */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.prototype.setRequest = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.prototype.clearRequest = function() {
  this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string answer_one = 2;
 * @return {string}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.prototype.getAnswerOne = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.prototype.setAnswerOne = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string answer_two = 3;
 * @return {string}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.prototype.getAnswerTwo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswers.prototype.setAnswerTwo = function(value) {
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
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse.displayName = 'proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse';
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
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && Response_pb.Response.toObject(includeInstance, f),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse;
  return proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setToken(value);
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
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Response_pb.Response.serializeBinaryToWriter
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Response response = 1;
 * @return {?proto.proto.Response}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse.prototype.getResponse = function() {
  return /** @type{?proto.proto.Response} */ (
    jspb.Message.getWrapperField(this, Response_pb.Response, 1));
};


/** @param {?proto.proto.Response|undefined} value */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse.prototype.setResponse = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse.prototype.clearResponse = function() {
  this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.proto.UserTwoStepVerificationRecoverPasswordByAnswersResponse.prototype.setToken = function(value) {
  jspb.Message.setField(this, 2, value);
};


goog.object.extend(exports, proto.proto);
