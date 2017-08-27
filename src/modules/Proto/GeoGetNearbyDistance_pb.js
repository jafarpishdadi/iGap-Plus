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
goog.exportSymbol('proto.proto.GeoGetNearbyDistance', null, global);
goog.exportSymbol('proto.proto.GeoGetNearbyDistanceResponse', null, global);
goog.exportSymbol('proto.proto.GeoGetNearbyDistanceResponse.Result', null, global);

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
proto.proto.GeoGetNearbyDistance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.GeoGetNearbyDistance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.GeoGetNearbyDistance.displayName = 'proto.proto.GeoGetNearbyDistance';
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
proto.proto.GeoGetNearbyDistance.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.GeoGetNearbyDistance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.GeoGetNearbyDistance} msg The msg instance to transform.
 * @return {!Object}
 */
proto.proto.GeoGetNearbyDistance.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && Request_pb.Request.toObject(includeInstance, f),
    lat: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    lon: +jspb.Message.getFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.proto.GeoGetNearbyDistance}
 */
proto.proto.GeoGetNearbyDistance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GeoGetNearbyDistance;
  return proto.proto.GeoGetNearbyDistance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GeoGetNearbyDistance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GeoGetNearbyDistance}
 */
proto.proto.GeoGetNearbyDistance.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLon(value);
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
proto.proto.GeoGetNearbyDistance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.GeoGetNearbyDistance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GeoGetNearbyDistance} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.proto.GeoGetNearbyDistance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Request_pb.Request.serializeBinaryToWriter
    );
  }
  f = message.getLat();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getLon();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional Request request = 1;
 * @return {?proto.proto.Request}
 */
proto.proto.GeoGetNearbyDistance.prototype.getRequest = function() {
  return /** @type{?proto.proto.Request} */ (
    jspb.Message.getWrapperField(this, Request_pb.Request, 1));
};


/** @param {?proto.proto.Request|undefined} value */
proto.proto.GeoGetNearbyDistance.prototype.setRequest = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.GeoGetNearbyDistance.prototype.clearRequest = function() {
  this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.GeoGetNearbyDistance.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double lat = 2;
 * @return {number}
 */
proto.proto.GeoGetNearbyDistance.prototype.getLat = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.proto.GeoGetNearbyDistance.prototype.setLat = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional double lon = 3;
 * @return {number}
 */
proto.proto.GeoGetNearbyDistance.prototype.getLon = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.proto.GeoGetNearbyDistance.prototype.setLon = function(value) {
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
proto.proto.GeoGetNearbyDistanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.GeoGetNearbyDistanceResponse.repeatedFields_, null);
};
goog.inherits(proto.proto.GeoGetNearbyDistanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.GeoGetNearbyDistanceResponse.displayName = 'proto.proto.GeoGetNearbyDistanceResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.GeoGetNearbyDistanceResponse.repeatedFields_ = [2];



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
proto.proto.GeoGetNearbyDistanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.GeoGetNearbyDistanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.GeoGetNearbyDistanceResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.proto.GeoGetNearbyDistanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && Response_pb.Response.toObject(includeInstance, f),
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.proto.GeoGetNearbyDistanceResponse.Result.toObject, includeInstance)
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
 * @return {!proto.proto.GeoGetNearbyDistanceResponse}
 */
proto.proto.GeoGetNearbyDistanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GeoGetNearbyDistanceResponse;
  return proto.proto.GeoGetNearbyDistanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GeoGetNearbyDistanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GeoGetNearbyDistanceResponse}
 */
proto.proto.GeoGetNearbyDistanceResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.proto.GeoGetNearbyDistanceResponse.Result;
      reader.readMessage(value,proto.proto.GeoGetNearbyDistanceResponse.Result.deserializeBinaryFromReader);
      msg.addResult(value);
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
proto.proto.GeoGetNearbyDistanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.GeoGetNearbyDistanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GeoGetNearbyDistanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.proto.GeoGetNearbyDistanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Response_pb.Response.serializeBinaryToWriter
    );
  }
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.proto.GeoGetNearbyDistanceResponse.Result.serializeBinaryToWriter
    );
  }
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
proto.proto.GeoGetNearbyDistanceResponse.Result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.GeoGetNearbyDistanceResponse.Result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.GeoGetNearbyDistanceResponse.Result.displayName = 'proto.proto.GeoGetNearbyDistanceResponse.Result';
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
proto.proto.GeoGetNearbyDistanceResponse.Result.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.GeoGetNearbyDistanceResponse.Result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.GeoGetNearbyDistanceResponse.Result} msg The msg instance to transform.
 * @return {!Object}
 */
proto.proto.GeoGetNearbyDistanceResponse.Result.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    hasComment: jspb.Message.getFieldWithDefault(msg, 2, false),
    distance: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.proto.GeoGetNearbyDistanceResponse.Result}
 */
proto.proto.GeoGetNearbyDistanceResponse.Result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GeoGetNearbyDistanceResponse.Result;
  return proto.proto.GeoGetNearbyDistanceResponse.Result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GeoGetNearbyDistanceResponse.Result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GeoGetNearbyDistanceResponse.Result}
 */
proto.proto.GeoGetNearbyDistanceResponse.Result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasComment(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDistance(value);
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
proto.proto.GeoGetNearbyDistanceResponse.Result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.GeoGetNearbyDistanceResponse.Result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GeoGetNearbyDistanceResponse.Result} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.proto.GeoGetNearbyDistanceResponse.Result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getHasComment();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getDistance();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint64 user_id = 1;
 * @return {number}
 */
proto.proto.GeoGetNearbyDistanceResponse.Result.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.proto.GeoGetNearbyDistanceResponse.Result.prototype.setUserId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bool has_comment = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.proto.GeoGetNearbyDistanceResponse.Result.prototype.getHasComment = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.proto.GeoGetNearbyDistanceResponse.Result.prototype.setHasComment = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 distance = 3;
 * @return {number}
 */
proto.proto.GeoGetNearbyDistanceResponse.Result.prototype.getDistance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.proto.GeoGetNearbyDistanceResponse.Result.prototype.setDistance = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional Response response = 1;
 * @return {?proto.proto.Response}
 */
proto.proto.GeoGetNearbyDistanceResponse.prototype.getResponse = function() {
  return /** @type{?proto.proto.Response} */ (
    jspb.Message.getWrapperField(this, Response_pb.Response, 1));
};


/** @param {?proto.proto.Response|undefined} value */
proto.proto.GeoGetNearbyDistanceResponse.prototype.setResponse = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.GeoGetNearbyDistanceResponse.prototype.clearResponse = function() {
  this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.GeoGetNearbyDistanceResponse.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Result result = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.proto.GeoGetNearbyDistanceResponse.Result>}
 */
proto.proto.GeoGetNearbyDistanceResponse.prototype.getResultList = function() {
  return /** @type{!Array.<!proto.proto.GeoGetNearbyDistanceResponse.Result>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.GeoGetNearbyDistanceResponse.Result, 2));
};


/** @param {!Array.<!proto.proto.GeoGetNearbyDistanceResponse.Result>} value */
proto.proto.GeoGetNearbyDistanceResponse.prototype.setResultList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.proto.GeoGetNearbyDistanceResponse.Result=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.GeoGetNearbyDistanceResponse.Result}
 */
proto.proto.GeoGetNearbyDistanceResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.proto.GeoGetNearbyDistanceResponse.Result, opt_index);
};


proto.proto.GeoGetNearbyDistanceResponse.prototype.clearResultList = function() {
  this.setResultList([]);
};


goog.object.extend(exports, proto.proto);