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
goog.exportSymbol('proto.proto.ClientCountRoomHistory', null, global);
goog.exportSymbol('proto.proto.ClientCountRoomHistoryResponse', null, global);

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
proto.proto.ClientCountRoomHistory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ClientCountRoomHistory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.ClientCountRoomHistory.displayName = 'proto.proto.ClientCountRoomHistory';
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
proto.proto.ClientCountRoomHistory.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ClientCountRoomHistory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ClientCountRoomHistory} msg The msg instance to transform.
 * @return {!Object}
 */
proto.proto.ClientCountRoomHistory.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && Request_pb.Request.toObject(includeInstance, f),
    roomId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.proto.ClientCountRoomHistory}
 */
proto.proto.ClientCountRoomHistory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ClientCountRoomHistory;
  return proto.proto.ClientCountRoomHistory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ClientCountRoomHistory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ClientCountRoomHistory}
 */
proto.proto.ClientCountRoomHistory.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.ClientCountRoomHistory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ClientCountRoomHistory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ClientCountRoomHistory} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.proto.ClientCountRoomHistory.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional Request request = 1;
 * @return {?proto.proto.Request}
 */
proto.proto.ClientCountRoomHistory.prototype.getRequest = function() {
  return /** @type{?proto.proto.Request} */ (
    jspb.Message.getWrapperField(this, Request_pb.Request, 1));
};


/** @param {?proto.proto.Request|undefined} value */
proto.proto.ClientCountRoomHistory.prototype.setRequest = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.ClientCountRoomHistory.prototype.clearRequest = function() {
  this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ClientCountRoomHistory.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 room_id = 2;
 * @return {number}
 */
proto.proto.ClientCountRoomHistory.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.proto.ClientCountRoomHistory.prototype.setRoomId = function(value) {
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
proto.proto.ClientCountRoomHistoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ClientCountRoomHistoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.ClientCountRoomHistoryResponse.displayName = 'proto.proto.ClientCountRoomHistoryResponse';
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
proto.proto.ClientCountRoomHistoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ClientCountRoomHistoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ClientCountRoomHistoryResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.proto.ClientCountRoomHistoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && Response_pb.Response.toObject(includeInstance, f),
    media: jspb.Message.getFieldWithDefault(msg, 2, 0),
    image: jspb.Message.getFieldWithDefault(msg, 3, 0),
    video: jspb.Message.getFieldWithDefault(msg, 4, 0),
    audio: jspb.Message.getFieldWithDefault(msg, 5, 0),
    voice: jspb.Message.getFieldWithDefault(msg, 6, 0),
    gif: jspb.Message.getFieldWithDefault(msg, 7, 0),
    file: jspb.Message.getFieldWithDefault(msg, 8, 0),
    url: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.proto.ClientCountRoomHistoryResponse}
 */
proto.proto.ClientCountRoomHistoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ClientCountRoomHistoryResponse;
  return proto.proto.ClientCountRoomHistoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ClientCountRoomHistoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ClientCountRoomHistoryResponse}
 */
proto.proto.ClientCountRoomHistoryResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setMedia(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setImage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVideo(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAudio(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVoice(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGif(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFile(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUrl(value);
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
proto.proto.ClientCountRoomHistoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ClientCountRoomHistoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ClientCountRoomHistoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.proto.ClientCountRoomHistoryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Response_pb.Response.serializeBinaryToWriter
    );
  }
  f = message.getMedia();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getImage();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getVideo();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getAudio();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getVoice();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getGif();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getFile();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getUrl();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
};


/**
 * optional Response response = 1;
 * @return {?proto.proto.Response}
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.getResponse = function() {
  return /** @type{?proto.proto.Response} */ (
    jspb.Message.getWrapperField(this, Response_pb.Response, 1));
};


/** @param {?proto.proto.Response|undefined} value */
proto.proto.ClientCountRoomHistoryResponse.prototype.setResponse = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.ClientCountRoomHistoryResponse.prototype.clearResponse = function() {
  this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 media = 2;
 * @return {number}
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.getMedia = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.proto.ClientCountRoomHistoryResponse.prototype.setMedia = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 image = 3;
 * @return {number}
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.getImage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.proto.ClientCountRoomHistoryResponse.prototype.setImage = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 video = 4;
 * @return {number}
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.getVideo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.proto.ClientCountRoomHistoryResponse.prototype.setVideo = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 audio = 5;
 * @return {number}
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.getAudio = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.proto.ClientCountRoomHistoryResponse.prototype.setAudio = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint32 voice = 6;
 * @return {number}
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.getVoice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.proto.ClientCountRoomHistoryResponse.prototype.setVoice = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional uint32 gif = 7;
 * @return {number}
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.getGif = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.proto.ClientCountRoomHistoryResponse.prototype.setGif = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional uint32 file = 8;
 * @return {number}
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.getFile = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.proto.ClientCountRoomHistoryResponse.prototype.setFile = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional uint32 url = 9;
 * @return {number}
 */
proto.proto.ClientCountRoomHistoryResponse.prototype.getUrl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.proto.ClientCountRoomHistoryResponse.prototype.setUrl = function(value) {
  jspb.Message.setField(this, 9, value);
};


goog.object.extend(exports, proto.proto);
