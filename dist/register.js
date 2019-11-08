"use strict";

var _react = _interopRequireDefault(require("react"));

var _addons = _interopRequireDefault(require("@storybook/addons"));

var _constants = require("./constants");

var _Panel = require("./components/Panel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Register the addon with a unique name.
_addons["default"].register(_constants.ADDON_ID, function (api) {
  // Also need to set a unique name to the panel.
  _addons["default"].addPanel(_constants.PANEL_ID, {
    title: 'Events Logger',
    render: function render(_ref) {
      var active = _ref.active,
          key = _ref.key;
      return _react["default"].createElement(_Panel.Panel, {
        key: key,
        api: api,
        active: active
      });
    }
  });
});