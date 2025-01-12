"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fallbacks = exports.getLanguageDetails = exports.availableLanguages = void 0;
var Default_en_1 = require("./Default.en");
var Default_pl_1 = require("./Default.pl");
var Default_de_1 = require("./Default.de");
var Default_sk_1 = require("./Default.sk");
var Default_lt_1 = require("./Default.lt");
var Default_tr_1 = require("./Default.tr");
var Default_el_1 = require("./Default.el");
var Default_hu_1 = require("./Default.hu");
var Default_ga_1 = require("./Default.ga");
var Default_it_1 = require("./Default.it");
var Default_ca_1 = require("./Default.ca");
var Default_es_1 = require("./Default.es");
var Default_fr_1 = require("./Default.fr");
var Default_nl_1 = require("./Default.nl");
var Default_sr_1 = require("./Default.sr");
var Default_sv_1 = require("./Default.sv");
exports.availableLanguages = [
    { name: 'English', languageCode: 'en', emoji: '🇬🇧' },
    { name: 'Polski', languageCode: 'pl', emoji: '🇵🇱' },
    { name: 'Deutsch', languageCode: 'de', emoji: '🇩🇪' },
    { name: 'Français', languageCode: 'fr', emoji: '🇫🇷' },
    { name: 'Nederlands', languageCode: 'nl', emoji: '🇳🇱' },
    { name: 'Svenska', languageCode: 'sv', emoji: '🇸🇪' },
    { name: 'Slovenčina', languageCode: 'sk', emoji: '🇸🇰' },
    { name: 'Српски', languageCode: 'sr', emoji: '🇷🇸' },
    { name: 'Lietuvių', languageCode: 'lt', emoji: '🇱🇹' },
    { name: 'Türkçe', languageCode: 'tr', emoji: '🇹🇷' },
    { name: 'Ελληνικά', languageCode: 'el', emoji: '🇬🇷' },
    { name: 'Magyar', languageCode: 'hu', emoji: '🇭🇺' },
    { name: 'Gaeilge', languageCode: 'ga', emoji: '🇮🇪' },
    { name: 'Italiano', languageCode: 'it', emoji: '🇮🇹' },
    { name: 'Català', languageCode: 'ca', emoji: '🇪🇸' },
    { name: 'Español', languageCode: 'es', emoji: '🇪🇸' },
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
    de: {
        Default: Default_de_1.de,
    },
    sk: {
        Default: Default_sk_1.sk,
    },
    lt: {
        Default: Default_lt_1.lt,
    },
    tr: {
        Default: Default_tr_1.tr,
    },
    el: {
        Default: Default_el_1.el,
    },
    hu: {
        Default: Default_hu_1.hu,
    },
    ga: {
        Default: Default_ga_1.ga,
    },
    it: {
        Default: Default_it_1.it,
    },
    ca: {
        Default: Default_ca_1.ca,
    },
    es: {
        Default: Default_es_1.es,
    },
    fr: {
        Default: Default_fr_1.fr,
    },
    nl: {
        Default: Default_nl_1.nl,
    },
    sr: {
        Default: Default_sr_1.sr,
    },
    sv: {
        Default: Default_sv_1.sv,
    },
};
