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
var Global_pb = require('./Global_pb.js');
goog.exportSymbol('proto.proto.ChatUpdateStatus', null, global);
goog.exportSymbol('proto.proto.ChatUpdateStatusResponse', null, global);

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
proto.proto.ChatUpdateStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChatUpdateStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.ChatUpdateStatus.displayName = 'proto.proto.ChatUpdateStatus';
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
proto.proto.ChatUpdateStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChatUpdateStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChatUpdateStatus} msg The msg instance to transform.
 * @return {!Object}
 */
proto.proto.ChatUpdateStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && Request_pb.Request.toObject(includeInstance, f),
    roomId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    messageId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.proto.ChatUpdateStatus}
 */
proto.proto.ChatUpdateStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChatUpdateStatus;
  return proto.proto.ChatUpdateStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChatUpdateStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChatUpdateStatus}
 */
proto.proto.ChatUpdateStatus.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setRoomId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMessageId(value);
      break;
    case 4:
      var value = /** @type {!proto.proto.RoomMessageStatus} */ (reader.readEnum());
      msg.setStatus(value);
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
proto.proto.ChatUpdateStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChatUpdateStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChatUpdateStatus} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.proto.ChatUpdateStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Request_pb.Request.serializeBinaryToWriter
    );
  }
  f = message.getRoomId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getMessageId();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional Request request = 1;
 * @return {?proto.proto.Request}
 */
proto.proto.ChatUpdateStatus.prototype.getRequest = function() {
  return /** @type{?proto.proto.Request} */ (
    jspb.Message.getWrapperField(this, Request_pb.Request, 1));
};


/** @param {?proto.proto.Request|undefined} value */
proto.proto.ChatUpdateStatus.prototype.setRequest = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.ChatUpdateStatus.prototype.clearRequest = function() {
  this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ChatUpdateStatus.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 room_id = 2;
 * @return {number}
 */
proto.proto.ChatUpdateStatus.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.proto.ChatUpdateStatus.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint64 message_id = 3;
 * @return {number}
 */
proto.proto.ChatUpdateStatus.prototype.getMessageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.proto.ChatUpdateStatus.prototype.setMessageId = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional RoomMessageStatus status = 4;
 * @return {!proto.proto.RoomMessageStatus}
 */
proto.proto.ChatUpdateStatus.prototype.getStatus = function() {
  return /** @type {!proto.proto.RoomMessageStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.proto.RoomMessageStatus} value */
proto.proto.ChatUpdateStatus.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 4, value);
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
proto.proto.ChatUpdateStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChatUpdateStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.ChatUpdateStatusResponse.displayName = 'proto.proto.ChatUpdateStatusResponse';
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
proto.proto.ChatUpdateStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChatUpdateStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChatUpdateStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.proto.ChatUpdateStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && Response_pb.Response.toObject(includeInstance, f),
    roomId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    messageId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0),
    statusVersion: jspb.Message.getFieldWithDefault(msg, 5, 0),
    updaterAuthorHash: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.proto.ChatUpdateStatusResponse}
 */
proto.proto.ChatUpdateStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChatUpdateStatusResponse;
  return proto.proto.ChatUpdateStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChatUpdateStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChatUpdateStatusResponse}
 */
proto.proto.ChatUpdateStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRoomId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMessageId(value);
      break;
    case 4:
      var value = /** @type {!proto.proto.RoomMessageStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStatusVersion(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdaterAuthorHash(value);
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
proto.proto.ChatUpdateStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChatUpdateStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChatUpdateStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.proto.ChatUpdateStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Response_pb.Response.serializeBinaryToWriter
    );
  }
  f = message.getRoomId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getMessageId();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getStatusVersion();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getUpdaterAuthorHash();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional Response response = 1;
 * @return {?proto.proto.Response}
 */
proto.proto.ChatUpdateStatusResponse.prototype.getResponse = function() {
  return /** @type{?proto.proto.Response} */ (
    jspb.Message.getWrapperField(this, Response_pb.Response, 1));
};


/** @param {?proto.proto.Response|undefined} value */
proto.proto.ChatUpdateStatusResponse.prototype.setResponse = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.ChatUpdateStatusResponse.prototype.clearResponse = function() {
  this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ChatUpdateStatusResponse.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 room_id = 2;
 * @return {number}
 */
proto.proto.ChatUpdateStatusResponse.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.proto.ChatUpdateStatusResponse.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint64 message_id = 3;
 * @return {number}
 */
proto.proto.ChatUpdateStatusResponse.prototype.getMessageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.proto.ChatUpdateStatusResponse.prototype.setMessageId = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional RoomMessageStatus status = 4;
 * @return {!proto.proto.RoomMessageStatus}
 */
proto.proto.ChatUpdateStatusResponse.prototype.getStatus = function() {
  return /** @type {!proto.proto.RoomMessageStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.proto.RoomMessageStatus} value */
proto.proto.ChatUpdateStatusResponse.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint64 status_version = 5;
 * @return {number}
 */
proto.proto.ChatUpdateStatusResponse.prototype.getStatusVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.proto.ChatUpdateStatusResponse.prototype.setStatusVersion = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string updater_author_hash = 6;
 * @return {string}
 */
proto.proto.ChatUpdateStatusResponse.prototype.getUpdaterAuthorHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.proto.ChatUpdateStatusResponse.prototype.setUpdaterAuthorHash = function(value) {
  jspb.Message.setField(this, 6, value);
};


goog.object.extend(exports, proto.proto);
