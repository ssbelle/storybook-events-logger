"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logEvent = logEvent;

var _addons = require("@storybook/addons");

var _constants = require("../constants");

var _v = _interopRequireDefault(require("uuid/v4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function logEvent(e) {
  var id = (0, _v["default"])();
  var formattedEvent = {
    id: id,
    data: {
      name: e.type,
      payload: e.detail
    }
  };

  var channel = _addons.addons.getChannel();

  channel.emit(_constants.EMIT_EVENT, formattedEvent);
}