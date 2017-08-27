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
goog.exportSymbol('proto.proto.UserGetDeleteToken', null, global);
goog.exportSymbol('proto.proto.UserGetDeleteTokenResponse', null, global);

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
proto.proto.UserGetDeleteToken = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.UserGetDeleteToken, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.UserGetDeleteToken.displayName = 'proto.proto.UserGetDeleteToken';
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
proto.proto.UserGetDeleteToken.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.UserGetDeleteToken.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.UserGetDeleteToken} msg The msg instance to transform.
 * @return {!Object}
 */
proto.proto.UserGetDeleteToken.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && Request_pb.Request.toObject(includeInstance, f)
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
 * @return {!proto.proto.UserGetDeleteToken}
 */
proto.proto.UserGetDeleteToken.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.UserGetDeleteToken;
  return proto.proto.UserGetDeleteToken.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.UserGetDeleteToken} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.UserGetDeleteToken}
 */
proto.proto.UserGetDeleteToken.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.UserGetDeleteToken.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.UserGetDeleteToken.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.UserGetDeleteToken} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.proto.UserGetDeleteToken.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Request_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional Request request = 1;
 * @return {?proto.proto.Request}
 */
proto.proto.UserGetDeleteToken.prototype.getRequest = function() {
  return /** @type{?proto.proto.Request} */ (
    jspb.Message.getWrapperField(this, Request_pb.Request, 1));
};


/** @param {?proto.proto.Request|undefined} value */
proto.proto.UserGetDeleteToken.prototype.setRequest = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.UserGetDeleteToken.prototype.clearRequest = function() {
  this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.UserGetDeleteToken.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.proto.UserGetDeleteTokenResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.UserGetDeleteTokenResponse.repeatedFields_, null);
};
goog.inherits(proto.proto.UserGetDeleteTokenResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.UserGetDeleteTokenResponse.displayName = 'proto.proto.UserGetDeleteTokenResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.UserGetDeleteTokenResponse.repeatedFields_ = [3];



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
proto.proto.UserGetDeleteTokenResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.UserGetDeleteTokenResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.UserGetDeleteTokenResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.proto.UserGetDeleteTokenResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && Response_pb.Response.toObject(includeInstance, f),
    resendDelay: jspb.Message.getFieldWithDefault(msg, 2, 0),
    smsNumberList: jspb.Message.getField(msg, 3),
    tokenRegex: jspb.Message.getFieldWithDefault(msg, 4, ""),
    tokenLength: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.proto.UserGetDeleteTokenResponse}
 */
proto.proto.UserGetDeleteTokenResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.UserGetDeleteTokenResponse;
  return proto.proto.UserGetDeleteTokenResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.UserGetDeleteTokenResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.UserGetDeleteTokenResponse}
 */
proto.proto.UserGetDeleteTokenResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint32());
      msg.setResendDelay(value);
      break;
    case 3:
      var value = /** @type {!Array.<number>} */ (reader.readPackedUint64());
      msg.setSmsNumberList(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenRegex(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenLength(value);
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
proto.proto.UserGetDeleteTokenResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.UserGetDeleteTokenResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.UserGetDeleteTokenResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.proto.UserGetDeleteTokenResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Response_pb.Response.serializeBinaryToWriter
    );
  }
  f = message.getResendDelay();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getSmsNumberList();
  if (f.length > 0) {
    writer.writePackedUint64(
      3,
      f
    );
  }
  f = message.getTokenRegex();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTokenLength();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional Response response = 1;
 * @return {?proto.proto.Response}
 */
proto.proto.UserGetDeleteTokenResponse.prototype.getResponse = function() {
  return /** @type{?proto.proto.Response} */ (
    jspb.Message.getWrapperField(this, Response_pb.Response, 1));
};


/** @param {?proto.proto.Response|undefined} value */
proto.proto.UserGetDeleteTokenResponse.prototype.setResponse = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.UserGetDeleteTokenResponse.prototype.clearResponse = function() {
  this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.UserGetDeleteTokenResponse.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 resend_delay = 2;
 * @return {number}
 */
proto.proto.UserGetDeleteTokenResponse.prototype.getResendDelay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.proto.UserGetDeleteTokenResponse.prototype.setResendDelay = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * repeated uint64 sms_number = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.proto.UserGetDeleteTokenResponse.prototype.getSmsNumberList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 3));
};


/** @param {!Array.<number>} value */
proto.proto.UserGetDeleteTokenResponse.prototype.setSmsNumberList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.proto.UserGetDeleteTokenResponse.prototype.addSmsNumber = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.proto.UserGetDeleteTokenResponse.prototype.clearSmsNumberList = function() {
  this.setSmsNumberList([]);
};


/**
 * optional string token_regex = 4;
 * @return {string}
 */
proto.proto.UserGetDeleteTokenResponse.prototype.getTokenRegex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.proto.UserGetDeleteTokenResponse.prototype.setTokenRegex = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string token_length = 5;
 * @return {string}
 */
proto.proto.UserGetDeleteTokenResponse.prototype.getTokenLength = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.proto.UserGetDeleteTokenResponse.prototype.setTokenLength = function(value) {
  jspb.Message.setField(this, 5, value);
};


goog.object.extend(exports, proto.proto);