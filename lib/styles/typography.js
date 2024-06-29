"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.weight = exports.size = exports.fontWeight = exports.fontFamily = void 0;
var types_1 = require("../types");
exports.fontFamily = 'Montserrat';
exports.fontWeight = {
    '400': "".concat(exports.fontFamily, "-Regular"),
    '500': "".concat(exports.fontFamily, "-Medium"),
    '600': "".concat(exports.fontFamily, "-SemiBold"),
    '700': "".concat(exports.fontFamily, "-Bold"),
};
exports.size = (_a = {},
    _a[types_1.TextType.TITLE] = 54,
    _a[types_1.TextType.H1] = 24,
    _a[types_1.TextType.H2] = 20,
    _a[types_1.TextType.H3] = 18,
    _a[types_1.TextType.H4] = 16,
    _a[types_1.TextType.P] = 14,
    _a[types_1.TextType.TOOLTIP] = 8,
    _a);
exports.weight = (_b = {},
    _b[types_1.TextType.TITLE] = '700',
    _b[types_1.TextType.H1] = '700',
    _b[types_1.TextType.H2] = '700',
    _b[types_1.TextType.H3] = '700',
    _b[types_1.TextType.H4] = '700',
    _b[types_1.TextType.P] = '400',
    _b[types_1.TextType.TOOLTIP] = '700',
    _b);
