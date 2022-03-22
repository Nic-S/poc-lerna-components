"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeWithDescription = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
function CodeWithDescription(_a) {
    var _b = _a.separator, separator = _b === void 0 ? '-' : _b, code = _a.code, description = _a.description;
    var prefixedDescription = description == null && description === ''
        ? ''
        : "".concat(separator, " ").concat(description);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "".concat(code, " ").concat(prefixedDescription) });
}
exports.CodeWithDescription = CodeWithDescription;
