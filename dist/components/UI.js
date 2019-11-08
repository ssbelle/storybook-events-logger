"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H3 = exports.Textarea = exports.Input = exports.Button = exports.Flex = exports.Card = exports.InspectorContainer = exports.Wrapper = exports.Action = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    margin: ", "px 0;\n    font-weight: bold;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    resize: vertical;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    flex: 1 0 0;\n    margin: ", "px 0 0 ", "px;\n    padding: ", "px ", "px;\n    color: white;\n    font-weight: bold;\n    background-color: ", ";\n    border: none;\n    border-radius: ", "px;\n    transition: background-color 0.2s ease;\n    border: 1px solid ", ";\n    &.outline {\n        color: ", ";\n        background-color: transparent;\n    }\n    &.secondary {\n        color: ", ";\n        background-color: transparent;\n        border-color: ", ";\n        &.active {\n            color: white;\n            background-color: ", ";\n        }\n    }\n    &.error {\n        background-color: ", ";\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n    flex-flow: row wrap;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    flex: 1 0 0;\n    max-width: 550px;\n    margin: ", "px;\n    padding: ", "px;\n    border-radius: ", "px;\n    box-shadow: 0 5px 15px -10px black;\n    &.secondary {\n        background-color: ", ";\n        box-shadow: none;\n        border: 1px solid #ccc;\n    }\n    @media(max-width: 860px) {\n        flex: 1 100%;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex,\n  flex-direction: column\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Action = _styled["default"].div({
  display: 'flex',
  padding: '5px',
  borderLeft: '5px solid transparent',
  borderBottom: '1px solid transparent',
  transition: 'all 0.1s',
  alignItems: 'flex-start'
});

exports.Action = Action;

var Wrapper = _styled["default"].section(_templateObject());

exports.Wrapper = Wrapper;

var InspectorContainer = _styled["default"].div({
  flex: 1,
  padding: '0 0 0 5px'
});

exports.InspectorContainer = InspectorContainer;
var colors = {
  primary: '#4ABE9D',
  secondary: '#1FA6FD',
  error: '#E66962',
  grey: '#ddd'
};
var spacing = 4;

var Card = _styled["default"].div(_templateObject2(), spacing * 3, spacing * 3, spacing, colors.grey);

exports.Card = Card;

var Flex = _styled["default"].div(_templateObject3());

exports.Flex = Flex;

var Button = _styled["default"].button(_templateObject4(), spacing * 3, spacing * 3, spacing * 2, spacing * 4, colors.primary, spacing, colors.primary, colors.primary, colors.secondary, colors.secondary, colors.secondary, colors.error);

exports.Button = Button;
var forms = "\n    width: 100%;\n    display: block;\n    margin: ".concat(spacing, "px 0 ").concat(spacing * 2, "px;\n    padding: ").concat(spacing, "px ").concat(spacing + 2, "px;\n    background-color: transparent;\n    border: 1px solid ").concat(colors.grey, ";\n    border-radius: ").concat(spacing, "px;\n");

var Input = _styled["default"].input(_templateObject5(), forms);

exports.Input = Input;

var Textarea = _styled["default"].textarea(_templateObject6(), forms);

exports.Textarea = Textarea;

var H3 = _styled["default"].h3(_templateObject7(), spacing * 2);

exports.H3 = H3;