"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fallbacks = exports.getLanguageDetails = exports.availableLanguages = void 0;
var Default_en_1 = require("./Default.en");
var Default_pl_1 = require("./Default.pl");
exports.availableLanguages = [
    { name: 'English', languageCode: 'en-UK', emoji: '🇬🇧' },
    { name: 'Polski', languageCode: 'pl-PL', emoji: '🇵🇱' },
];
// Function to get flag emoji from country code
function getFlagEmoji(countryCode) {
    var codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(function (char) { return 127397 + char.charCodeAt(0); });
    return String.fromCodePoint.apply(String, codePoints);
}
// Function to get language details by code using Intl.DisplayNames
function getLanguageDetails(languageCode) {
    var displayNames = new Intl.DisplayNames([languageCode], { type: 'language' });
    var languageName = displayNames.of(languageCode.split('-')[0]);
    var countryCode = languageCode.split('-')[1];
    var emoji = countryCode ? getFlagEmoji(countryCode) : '🏳️'; // Default emoji if not found
    return { name: languageName, languageCode: languageCode, emoji: emoji };
}
exports.getLanguageDetails = getLanguageDetails;
exports.fallbacks = {
    en: {
        Default: Default_en_1.en,
    },
    pl: {
        Default: Default_pl_1.pl,
    },
};
