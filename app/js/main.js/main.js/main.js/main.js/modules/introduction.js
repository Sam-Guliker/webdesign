'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _data = require('./data/data.js');

var _data2 = _interopRequireDefault(_data);

var _h = require('virtual-dom/h');

var _h2 = _interopRequireDefault(_h);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var introduction = {
    init: function init() {
        return (0, _h2.default)('.greeting', ['Hello ' + _data2.default.name]);
    }
};

exports.default = introduction;