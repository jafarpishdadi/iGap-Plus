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
goog.exportSymbol('proto.proto.UserSessionTerminate', null, global);
goog.exportSymbol('proto.proto.UserSessionTerminateResponse', null, global);

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
proto.proto.UserSessionTerminate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.UserSessionTerminate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.UserSessionTerminate.displayName = 'proto.proto.UserSessionTerminate';
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
proto.proto.UserSessionTerminate.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.UserSessionTerminate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.UserSessionTerminate} msg The msg instance to transform.
 * @return {!Object}
 */
proto.proto.UserSessionTerminate.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && Request_pb.Request.toObject(includeInstance, f),
    sessionId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.proto.UserSessionTerminate}
 */
proto.proto.UserSessionTerminate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.UserSessionTerminate;
  return proto.proto.UserSessionTerminate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.UserSessionTerminate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.UserSessionTerminate}
 */
proto.proto.UserSessionTerminate.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSessionId(value);
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
proto.proto.UserSessionTerminate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.UserSessionTerminate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.UserSessionTerminate} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.proto.UserSessionTerminate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Request_pb.Request.serializeBinaryToWriter
    );
  }
  f = message.getSessionId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional Request request = 1;
 * @return {?proto.proto.Request}
 */
proto.proto.UserSessionTerminate.prototype.getRequest = function() {
  return /** @type{?proto.proto.Request} */ (
    jspb.Message.getWrapperField(this, Request_pb.Request, 1));
};


/** @param {?proto.proto.Request|undefined} value */
proto.proto.UserSessionTerminate.prototype.setRequest = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.UserSessionTerminate.prototype.clearRequest = function() {
  this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.UserSessionTerminate.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 session_id = 2;
 * @return {number}
 */
proto.proto.UserSessionTerminate.prototype.getSessionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.proto.UserSessionTerminate.prototype.setSessionId = function(value) {
  jspb.Message.setField(this, 2, value);
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
proto.proto.UserSessionTerminateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.UserSessionTerminateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.UserSessionTerminateResponse.displayName = 'proto.proto.UserSessionTerminateResponse';
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
proto.proto.UserSessionTerminateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.UserSessionTerminateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.UserSessionTerminateResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.proto.UserSessionTerminateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && Response_pb.Response.toObject(includeInstance, f)
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
 * @return {!proto.proto.UserSessionTerminateResponse}
 */
proto.proto.UserSessionTerminateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.UserSessionTerminateResponse;
  return proto.proto.UserSessionTerminateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.UserSessionTerminateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.UserSessionTerminateResponse}
 */
proto.proto.UserSessionTerminateResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.UserSessionTerminateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.UserSessionTerminateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.UserSessionTerminateResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.proto.UserSessionTerminateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Response_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional Response response = 1;
 * @return {?proto.proto.Response}
 */
proto.proto.UserSessionTerminateResponse.prototype.getResponse = function() {
  return /** @type{?proto.proto.Response} */ (
    jspb.Message.getWrapperField(this, Response_pb.Response, 1));
};


/** @param {?proto.proto.Response|undefined} value */
proto.proto.UserSessionTerminateResponse.prototype.setResponse = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.UserSessionTerminateResponse.prototype.clearResponse = function() {
  this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.UserSessionTerminateResponse.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.proto);
