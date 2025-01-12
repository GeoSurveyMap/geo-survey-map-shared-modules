import { en } from './Default.en';
import { pl } from './Default.pl';
import { de } from './Default.de';
import { sk } from './Default.sk';
import { lt } from './Default.lt';
import { tr } from './Default.tr';
import { el } from './Default.el';
import { hu } from './Default.hu';
import { ga } from './Default.ga';
import { it } from './Default.it';
import { ca } from './Default.ca';
import { es } from './Default.es';
import { fr } from './Default.fr';
import { nl } from './Default.nl';
import { sr } from './Default.sr';
import { sv } from './Default.sv';


export const availableLanguages: { name: string; languageCode: string; emoji: string }[] = [
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
function getFlagEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

// Function to get language details by code using Intl.DisplayNames
export function getLanguageDetails(languageCode: string) {
  const displayNames = new Intl.DisplayNames([languageCode], { type: 'language' });
  const languageName = displayNames.of(languageCode.split('-')[0]);
  const countryCode = languageCode.split('-')[1];
  const emoji = countryCode ? getFlagEmoji(countryCode) : '🏳️'; // Default emoji if not found
  return { name: languageName, languageCode, emoji };
}

export const fallbacks = {
  en: {
    Default: en,
  },
  pl: {
    Default: pl,
  },
  de: {
    Default: de,
  },
  sk: {
    Default: sk,
  },
  lt: {
    Default: lt,
  },
  tr: {
    Default: tr,
  },
  el: {
    Default: el,
  },
  hu: {
    Default: hu,
  },
  ga: {
    Default: ga,
  },
  it: {
    Default: it,
  },
  ca: {
    Default: ca,
  },
  es: {
    Default: es,
  },
  fr: {
    Default: fr,
  },
  nl: {
    Default: nl,
  },
  sr: {
    Default: sr,
  },
  sv: {
    Default: sv,
  },
};
