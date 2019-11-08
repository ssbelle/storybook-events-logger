"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Panel = void 0;

var _react = _interopRequireDefault(require("react"));

var _api = require("@storybook/api");

var _coreEvents = require("@storybook/core-events");

var _theming = require("@storybook/theming");

var _reactInspector = _interopRequireDefault(require("react-inspector"));

var _UI = require("./UI");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ThemedInspector = (0, _theming.withTheme)(function (_ref) {
  var theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ["theme"]);

  return _react["default"].createElement(_reactInspector["default"], _extends({
    theme: theme.addonActionsTheme || 'chromeLight'
  }, props));
});

var Panel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Panel, _React$Component);

  function Panel(props) {
    var _this;

    _classCallCheck(this, Panel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Panel).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "logger", function (e) {
      _this.setState(function (prevState) {
        var eventsToDisplay = _toConsumableArray(prevState.eventsToDisplay);

        eventsToDisplay.push(e);
        return {
          eventsToDisplay: eventsToDisplay
        };
      });
    });

    _this.state = {
      current: {},
      edit: {
        name: '',
        payload: ''
      },
      events: [],
      eventsToDisplay: []
    };
    _this.api = props.api || {};
    _this.storyChanged = _this.storyChanged.bind(_assertThisInitialized(_this));
    _this.logger = _this.logger.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Panel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.api.on(_coreEvents.STORY_RENDERED, this.storyChanged);
      this.api.on(_constants.EMIT_EVENT, this.logger);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.off(_coreEvents.STORY_RENDERED, this.storyChanged);
      this.api.off(_constants.EMIT_EVENT, this.logger);
    }
  }, {
    key: "storyChanged",
    value: function storyChanged(id) {
      var events = this.api.getParameters(id, _constants.ADDON_ID) || [];
      this.setState({
        events: events,
        current: events[0] || {}
      });
    }
  }, {
    key: "render",
    value: function render() {
      var active = this.props.active;
      var result = this.state.eventsToDisplay.length ? _react["default"].createElement(_UI.Wrapper, null, this.state.eventsToDisplay.map(function (e, index) {
        return _react["default"].createElement(_UI.Action, {
          key: index
        }, _react["default"].createElement("h3", null, e.data.name), _react["default"].createElement(_UI.InspectorContainer, null, _react["default"].createElement(ThemedInspector, {
          sortObjectKeys: true,
          showNonenumerable: false,
          name: "Payload",
          data: e.data.payload || e.data
        })));
      })) : null;
      return active ? result : null;
    }
  }]);

  return Panel;
}(_react["default"].Component);

exports.Panel = Panel;