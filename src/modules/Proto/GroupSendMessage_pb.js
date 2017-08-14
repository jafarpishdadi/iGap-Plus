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
goog.exportSymbol('proto.proto.GroupSendMessage', null, global);
goog.exportSymbol('proto.proto.GroupSendMessageResponse', null, global);

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
proto.proto.GroupSendMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.GroupSendMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.GroupSendMessage.displayName = 'proto.proto.GroupSendMessage';
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
proto.proto.GroupSendMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.GroupSendMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.GroupSendMessage} msg The msg instance to transform.
 * @return {!Object}
 */
proto.proto.GroupSendMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && Request_pb.Request.toObject(includeInstance, f),
    messageType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    roomId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    message: jspb.Message.getFieldWithDefault(msg, 4, ""),
    attachment: jspb.Message.getFieldWithDefault(msg, 5, ""),
    location: (f = msg.getLocation()) && Global_pb.RoomMessageLocation.toObject(includeInstance, f),
    contact: (f = msg.getContact()) && Global_pb.RoomMessageContact.toObject(includeInstance, f),
    replyTo: jspb.Message.getFieldWithDefault(msg, 8, 0),
    forwardFrom: (f = msg.getForwardFrom()) && Global_pb.RoomMessageForwardFrom.toObject(includeInstance, f)
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
 * @return {!proto.proto.GroupSendMessage}
 */
proto.proto.GroupSendMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GroupSendMessage;
  return proto.proto.GroupSendMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GroupSendMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GroupSendMessage}
 */
proto.proto.GroupSendMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.proto.RoomMessageType} */ (reader.readEnum());
      msg.setMessageType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRoomId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttachment(value);
      break;
    case 6:
      var value = new Global_pb.RoomMessageLocation;
      reader.readMessage(value,Global_pb.RoomMessageLocation.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 7:
      var value = new Global_pb.RoomMessageContact;
      reader.readMessage(value,Global_pb.RoomMessageContact.deserializeBinaryFromReader);
      msg.setContact(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setReplyTo(value);
      break;
    case 9:
      var value = new Global_pb.RoomMessageForwardFrom;
      reader.readMessage(value,Global_pb.RoomMessageForwardFrom.deserializeBinaryFromReader);
      msg.setForwardFrom(value);
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
proto.proto.GroupSendMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.GroupSendMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GroupSendMessage} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.proto.GroupSendMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Request_pb.Request.serializeBinaryToWriter
    );
  }
  f = message.getMessageType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getRoomId();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAttachment();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      Global_pb.RoomMessageLocation.serializeBinaryToWriter
    );
  }
  f = message.getContact();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      Global_pb.RoomMessageContact.serializeBinaryToWriter
    );
  }
  f = message.getReplyTo();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getForwardFrom();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      Global_pb.RoomMessageForwardFrom.serializeBinaryToWriter
    );
  }
};


/**
 * optional Request request = 1;
 * @return {?proto.proto.Request}
 */
proto.proto.GroupSendMessage.prototype.getRequest = function() {
  return /** @type{?proto.proto.Request} */ (
    jspb.Message.getWrapperField(this, Request_pb.Request, 1));
};


/** @param {?proto.proto.Request|undefined} value */
proto.proto.GroupSendMessage.prototype.setRequest = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.GroupSendMessage.prototype.clearRequest = function() {
  this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.GroupSendMessage.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RoomMessageType message_type = 2;
 * @return {!proto.proto.RoomMessageType}
 */
proto.proto.GroupSendMessage.prototype.getMessageType = function() {
  return /** @type {!proto.proto.RoomMessageType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.proto.RoomMessageType} value */
proto.proto.GroupSendMessage.prototype.setMessageType = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint64 room_id = 3;
 * @return {number}
 */
proto.proto.GroupSendMessage.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.proto.GroupSendMessage.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.proto.GroupSendMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.proto.GroupSendMessage.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string attachment = 5;
 * @return {string}
 */
proto.proto.GroupSendMessage.prototype.getAttachment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.proto.GroupSendMessage.prototype.setAttachment = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional RoomMessageLocation location = 6;
 * @return {?proto.proto.RoomMessageLocation}
 */
proto.proto.GroupSendMessage.prototype.getLocation = function() {
  return /** @type{?proto.proto.RoomMessageLocation} */ (
    jspb.Message.getWrapperField(this, Global_pb.RoomMessageLocation, 6));
};


/** @param {?proto.proto.RoomMessageLocation|undefined} value */
proto.proto.GroupSendMessage.prototype.setLocation = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.proto.GroupSendMessage.prototype.clearLocation = function() {
  this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.GroupSendMessage.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional RoomMessageContact contact = 7;
 * @return {?proto.proto.RoomMessageContact}
 */
proto.proto.GroupSendMessage.prototype.getContact = function() {
  return /** @type{?proto.proto.RoomMessageContact} */ (
    jspb.Message.getWrapperField(this, Global_pb.RoomMessageContact, 7));
};


/** @param {?proto.proto.RoomMessageContact|undefined} value */
proto.proto.GroupSendMessage.prototype.setContact = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.proto.GroupSendMessage.prototype.clearContact = function() {
  this.setContact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.GroupSendMessage.prototype.hasContact = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint64 reply_to = 8;
 * @return {number}
 */
proto.proto.GroupSendMessage.prototype.getReplyTo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.proto.GroupSendMessage.prototype.setReplyTo = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional RoomMessageForwardFrom forward_from = 9;
 * @return {?proto.proto.RoomMessageForwardFrom}
 */
proto.proto.GroupSendMessage.prototype.getForwardFrom = function() {
  return /** @type{?proto.proto.RoomMessageForwardFrom} */ (
    jspb.Message.getWrapperField(this, Global_pb.RoomMessageForwardFrom, 9));
};


/** @param {?proto.proto.RoomMessageForwardFrom|undefined} value */
proto.proto.GroupSendMessage.prototype.setForwardFrom = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.proto.GroupSendMessage.prototype.clearForwardFrom = function() {
  this.setForwardFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.GroupSendMessage.prototype.hasForwardFrom = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.proto.GroupSendMessageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.GroupSendMessageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.GroupSendMessageResponse.displayName = 'proto.proto.GroupSendMessageResponse';
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
proto.proto.GroupSendMessageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.GroupSendMessageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.GroupSendMessageResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.proto.GroupSendMessageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && Response_pb.Response.toObject(includeInstance, f),
    roomId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    roomMessage: (f = msg.getRoomMessage()) && Global_pb.RoomMessage.toObject(includeInstance, f)
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
 * @return {!proto.proto.GroupSendMessageResponse}
 */
proto.proto.GroupSendMessageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GroupSendMessageResponse;
  return proto.proto.GroupSendMessageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GroupSendMessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GroupSendMessageResponse}
 */
proto.proto.GroupSendMessageResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new Global_pb.RoomMessage;
      reader.readMessage(value,Global_pb.RoomMessage.deserializeBinaryFromReader);
      msg.setRoomMessage(value);
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
proto.proto.GroupSendMessageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.GroupSendMessageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GroupSendMessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.proto.GroupSendMessageResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getRoomMessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      Global_pb.RoomMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional Response response = 1;
 * @return {?proto.proto.Response}
 */
proto.proto.GroupSendMessageResponse.prototype.getResponse = function() {
  return /** @type{?proto.proto.Response} */ (
    jspb.Message.getWrapperField(this, Response_pb.Response, 1));
};


/** @param {?proto.proto.Response|undefined} value */
proto.proto.GroupSendMessageResponse.prototype.setResponse = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.GroupSendMessageResponse.prototype.clearResponse = function() {
  this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.GroupSendMessageResponse.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 room_id = 2;
 * @return {number}
 */
proto.proto.GroupSendMessageResponse.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.proto.GroupSendMessageResponse.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional RoomMessage room_message = 3;
 * @return {?proto.proto.RoomMessage}
 */
proto.proto.GroupSendMessageResponse.prototype.getRoomMessage = function() {
  return /** @type{?proto.proto.RoomMessage} */ (
    jspb.Message.getWrapperField(this, Global_pb.RoomMessage, 3));
};


/** @param {?proto.proto.RoomMessage|undefined} value */
proto.proto.GroupSendMessageResponse.prototype.setRoomMessage = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.proto.GroupSendMessageResponse.prototype.clearRoomMessage = function() {
  this.setRoomMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.GroupSendMessageResponse.prototype.hasRoomMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.proto);
