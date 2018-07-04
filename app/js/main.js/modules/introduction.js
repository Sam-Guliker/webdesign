'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.introduction = undefined;

var _data = require('./data/data');

var _h = require('virtual-dom/h');

var introduction = exports.introduction = {
    init: function init() {
        return (0, _h.h)('.greeting', ['Hello ' + _data.data.name]);
    }
};