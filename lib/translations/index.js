"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fallbacks = exports.availableLanguages = void 0;
var Default_en_1 = require("./Default.en");
var Default_pl_1 = require("./Default.pl");
exports.availableLanguages = [
    { name: 'English', languageCode: 'en-UK', emoji: '🇬🇧' },
    { name: 'Polski', languageCode: 'pl-PL', emoji: '🇵🇱' },
];
exports.fallbacks = {
    en: {
        Default: Default_en_1.en,
    },
    pl: {
        Default: Default_pl_1.pl,
    },
};
