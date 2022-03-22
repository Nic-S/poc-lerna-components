import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
export function CodeWithDescription(_a) {
    var _b = _a.separator, separator = _b === void 0 ? '-' : _b, code = _a.code, description = _a.description;
    var prefixedDescription = description == null && description === ''
        ? ''
        : "".concat(separator, " ").concat(description);
    return _jsx(_Fragment, { children: "".concat(code, " ").concat(prefixedDescription) });
}
