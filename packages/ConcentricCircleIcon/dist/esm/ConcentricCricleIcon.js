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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function ConcentricCircleIcon(_a) {
    var innerIcon = _a.innerIcon, _b = _a.onClick, onClick = _b === void 0 ? undefined : _b, size = _a.size;
    var sizeVal = 24;
    var centerVal = 2;
    var innerIconSize = 20;
    if (size === 'small') {
        sizeVal = 16;
        centerVal = 3;
        innerIconSize = 10;
    }
    return (_jsxs("svg", __assign({ style: { cursor: onClick ? 'pointer' : '' }, onClick: onClick, width: sizeVal, height: sizeVal, viewBox: "0 0 ".concat(sizeVal, " ").concat(sizeVal), fill: 'none', xmlns: 'http://www.w3.org/1200/svg' }, { children: [_jsx("circle", { cx: sizeVal / 2, cy: sizeVal / 2, r: sizeVal / 2, fill: '#E6F3FD' }), _jsx("svg", __assign({ x: centerVal, y: centerVal }, { children: innerIcon(innerIconSize, innerIconSize, {
                    color: '#1986f5'
                }) }))] })));
}
