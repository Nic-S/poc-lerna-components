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
import { jsx as _jsx } from "react/jsx-runtime";
import { CodeWithDescription } from './CodeWithDesription';
export default {
    title: 's-common-ui/Code with description',
    component: CodeWithDescription
};
var Template = function (args) { return (_jsx(CodeWithDescription, __assign({}, args))); };
export var codeWithDescription = Template.bind({});
codeWithDescription.args = {
    code: 'TS123',
    description: 'Explanation of the code',
    separator: '-'
};
