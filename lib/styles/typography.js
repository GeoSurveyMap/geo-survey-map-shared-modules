"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.weight = exports.size = exports.TextType = exports.fontWeight = exports.fontFamily = void 0;
exports.fontFamily = 'Montserrat';
exports.fontWeight = {
    '400': "".concat(exports.fontFamily, "-Regular"),
    '500': "".concat(exports.fontFamily, "-Medium"),
    '600': "".concat(exports.fontFamily, "-SemiBold"),
    '700': "".concat(exports.fontFamily, "-Bold"),
};
var TextType;
(function (TextType) {
    TextType["H1"] = "H1";
    TextType["H2"] = "H2";
    TextType["H3"] = "H3";
    TextType["H4"] = "H4";
    TextType["P"] = "P";
})(TextType || (exports.TextType = TextType = {}));
exports.size = (_a = {},
    _a[TextType.H1] = 24,
    _a[TextType.H2] = 20,
    _a[TextType.H3] = 18,
    _a[TextType.H4] = 16,
    _a[TextType.P] = 14,
    _a);
exports.weight = (_b = {},
    _b[TextType.H1] = '700',
    _b[TextType.H2] = '700',
    _b[TextType.H3] = '700',
    _b[TextType.H4] = '700',
    _b[TextType.P] = '400',
    _b);
