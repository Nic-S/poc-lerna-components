"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.codeWithDescription = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var CodeWithDesription_1 = require("./CodeWithDesription");
exports.default = {
    title: 's-common-ui/Code with description',
    component: CodeWithDesription_1.CodeWithDescription
};
var Template = function (args) { return ((0, jsx_runtime_1.jsx)(CodeWithDesription_1.CodeWithDescription, __assign({}, args))); };
exports.codeWithDescription = Template.bind({});
exports.codeWithDescription.args = {
    code: 'TS123',
    description: 'Explanation of the code',
    separator: '-'
};
